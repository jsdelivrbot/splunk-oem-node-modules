define([
    'jquery',
    'underscore',
    'module',
    'backbone',
    'models/managementconsole/App',
    'models/managementconsole/Deploy',
    'views/shared/apps_remote/dialog/Master',
    'views/managementconsole/apps/install_app/overrides/shared/apps_remote/apps/dialog/Success',
    'views/managementconsole/apps/install_app/overrides/shared/apps_remote/apps/dialog/Login',
    'views/managementconsole/apps/install_app/overrides/shared/apps_remote/apps/dialog/Downloading',
    'views/managementconsole/apps/install_app/overrides/shared/apps_remote/apps/dialog/Restarting',
    'views/managementconsole/apps/install_app/overrides/shared/apps_remote/apps/dialog/Error',
    'views/managementconsole/apps/install_app/overrides/shared/apps_remote/apps/dialog/InstallDependencies'
], function(
    $,
    _,
    module,
    Backbone,
    AppModel,
    DeployModel,
    DialogView,
    SuccessView,
    LoginView,
    DownloadingView,
    RestartingView,
    ErrorView,
    InstallDependencies
){
    var SLIM_STATUS_CODES = {
      STATUS_ERROR_MISSING_DEPENDENCIES: 4
    };

    var CLIENT_STATUS_CODES = {
        deploy_fail: 'DEPLOY_FAIL'
    };

    return DialogView.extend({
        moduleId: module.id,

        initialize: function(options) {
            this.model.app = this.model.app || new AppModel();

            options = $.extend(true, options, {
                successViewClass: SuccessView,
                successViewOptions: {
                    model: {
                        dmcApp: this.model.app
                    }
                },
                loginViewClass: LoginView,
                installViewClass: DownloadingView,
                installViewOptions: {
                    appId: this.model.appRemote.get('uid'),
                    model: {
                        app: this.model.app,
                        metadata: this.model.metadata,
                        serverInfo: this.model.serverInfo
                    },
                    collection: {
                        messages: this.collection.messages
                    },
                    onFail: this.onDeployFail.bind(this)
                },
                showSuccessDialog: this.options.appId ? true : false,
                errorViewClass: ErrorView,
                backdrop: 'static',
                keyboard: false
            });

            this.deployTaskId;
            this.model.installDependencies = new Backbone.Model();
            this.children.installDependencies = new InstallDependencies({
                model: {
                    working: this.model.installDependencies
                }
            });

            DialogView.prototype.initialize.call(this, options);

            if (this.options.showSuccess) {
                this.model.wizard.set('step', 2);
            }

            this.on('startRestartPolling', this.startRestartPolling);

            this.listenTo(this.model.installDependencies, 'installDependencies', this.installDependencies);
        },

        installDependencies: function() {
            this.model.wizard.set('step', 1);
        },

        fetchMessages: function() {
            this.collection.messages.fetch();
        },

        startRestartPolling: function() {
            this.children.install.startPolling(this.deployTaskId);
        },

        hideDialogs: function() {
            DialogView.prototype.hideDialogs.apply(this, arguments);
            this.children.installDependencies.$el.hide();
        },

        visibility: function() {
          this.unbindHide();
          this.hideDialogs();

          var step = this.model.wizard.get('step');
          switch(step) {
              case 1:
                  this.installApp();
                  this.children.install.render();
                  this.children.install.$el.show();
                  break;
              case 'install_dependencies':
                  // trigger update to fetch dependency metadata
                  var appDependencies = this.model.wizard.get('appDependencies');
                  this.model.installDependencies.trigger('start:updateDependencies', appDependencies);

                  this.children.installDependencies.render();
                  this.children.installDependencies.$el.show();
                  break;
              case 'retry_deploy':
                  this.retryDeploy();
                  this.children.install.render();
                  this.children.install.$el.show();
                  break;
              default:
                  DialogView.prototype.visibility.apply(this, arguments);
          }
        },

        installApp: function() {
            var appId = this.model.appRemote.get('appid'),
                auth = this.model.auth.get('sbsessionid'),
                taskId;

            this.model.app.clear();
            this.model.app.entry.content.set({
                uid: this.model.appRemote.get('uid'),
                appId: this.model.appRemote.get('appid'),
                auth: this.model.auth.get('sbsessionid'),
                installDependencies: this.model.installDependencies.get('installDependencies') ? true : false
            });

            this.model.wizard.unset('errorResponse');
            this.model.app.install().done(function(response) {
                if (response.status === SLIM_STATUS_CODES.STATUS_ERROR_MISSING_DEPENDENCIES) {
                    this.propogateErrorResponse(response);
                    return;
                }

                taskId = this.model.app.entry.get('name');
                this.deployTaskId = taskId;

                this.model.app.entry.set('name', appId);
                this.model.app.fetch().done(function() {
                    this.collection.appLocals.fetch();
                    this.collection.dmcApps.fetch();

                    this.trigger('startRestartPolling');
                    this.trigger('onInstallSuccess');
                }.bind(this)).fail(this.propogateErrorResponse.bind(this));
            }.bind(this)).fail(this.propogateErrorResponse.bind(this));
        },

        retryDeploy: function() {
            var deployModel = new DeployModel();
            deployModel.deploy().done(function() {
                this.deployTaskId = deployModel.entry.get('name');
                this.trigger('startRestartPolling');
            }.bind(this)).fail(function() {
                this.model.wizard.set('step', -1);
            }.bind(this));
        },

        onDeployFail: function() {
            // set CLIENT SIDE error response status
            this.propogateErrorResponse({
                status: CLIENT_STATUS_CODES.deploy_fail
            });
        },

        propogateErrorResponse: function(response) {
            this.model.wizard.set({
              errorResponse: response,
              step: -1
            });
        },

        needsRestart: function() {
            return false;
        },

        render: function() {
            this.$el.append(this.children.installDependencies.render().el);
            DialogView.prototype.render.apply(this, arguments);

            return this;
        }
    });
});
