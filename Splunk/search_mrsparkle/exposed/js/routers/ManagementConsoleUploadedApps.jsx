import _ from 'underscore';
import $ from 'jquery';
import React from 'react';
import { render } from 'react-dom';
import BaseRouter from 'routers/Base';
import TaskModel from 'models/managementconsole/Task';
import DeployModel from 'models/managementconsole/Deploy';
import Packages from 'collections/managementconsole/Packages';
import UploadedAppsPageContainer from 'views/managementconsole/apps/uploaded_apps/UploadedAppsPageContainer';

const UploadedAppsPageRouter = BaseRouter.extend({
    initialize(...args) {
        BaseRouter.prototype.initialize.call(this, ...args);
        this.setPageTitle(_('Uploaded Apps').t());

        this.fetchUploadedPackages();
        this.initializeDeployTaskModel();
        this.initializeDeployModel();
    },

    fetchUploadedPackages() {
        this.collection.packages = new Packages();
        this.deferreds.packages = this.collection.packages.fetch();
    },

    // Poll the /packages endpoint to see if any package is in 'Vetting' state
    // Stop polling if none are found in 'Vetting' state
    pollPackagesCollection() {
        const packagesCollection = (this.collection && this.collection.packages) || this.packages;

        packagesCollection.startPolling({
            delay: 30000,
            condition: (packages) => {
                if (packages.models.length > 0) {
                    const isVetting = packages.models.find(model => (
                        model.isVetting()
                    ));
                    return !!isVetting;
                }
                return false;
            },
        });
    },

    // Initialize deploy task model to keep track of the deploy action progress. No initial fetch
    initializeDeployTaskModel() {
        this.model.deployTask = new TaskModel();
    },

    // Initialize the deploy model - provide taskId for the last deployment
    initializeDeployModel() {
        this.model.deployModel = new DeployModel();
        this.model.deployModel.startPolling();

        this.listenTo(this.model.deployModel.entry.content, 'change:taskId', (model, taskId) => {
            if (!this.model.deployTask.isPolling()) {
                this.model.deployTask.entry.set('name', taskId);
                this.model.deployTask.beginPolling()
                .always(() => {
                    this.collection.packages.fetch();
                });
            }
        });
    },

    page(...args) {
        BaseRouter.prototype.page.call(this, ...args);

        $.when(
            this.deferreds.pageViewRendered,
            this.deferreds.packages,
        ).done(() => {
            this.pollPackagesCollection();
            $('.preload').replaceWith(this.pageView.el);

            const props = {
                packages: this.collection.packages,
                pollPackagesCollection: this.pollPackagesCollection,
                deployTask: this.model.deployTask,
                canEdit: this.model.user.hasCapability('dmc_deploy_apps'),
            };

            render(
                <UploadedAppsPageContainer {...props} />,
                this.pageView.$('.main-section-body').get(0),
            );
        });
    },
});

export default UploadedAppsPageRouter;
