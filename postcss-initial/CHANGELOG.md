# Change Log

All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).

## [Unreleased]

## [1.5.3] - 2016-11-30
 - Add `.eslintrc` to `.npmignore` Thanks to @wtgtybhertgeghgtwtg for pr [#20](https://github.com/maximkoretskiy/postcss-initial/pull/20)

## [1.5.2] - 2016-07-20
Fix rules duplication in case when user added own fallback for rule.
See [#18](https://github.com/maximkoretskiy/postcss-initial/issues/18).
Thanks to @ChaosExAnima for suggestion and PR.

## [1.5.1] - 2016-04-09
Added support of multiple initial values in property. Thanks to @johnbender for issue and contribution.

## [1.5.0] - 2016-03-09
 - Fix some props with inherit values to more specific values. Thnx @dzhiriki  for issue.
 - Update deps

## [1.4.1] - 2016-02-05
 - Remove gulp from workflow, using npm-scrips only
 - Update lodash.template@4
 - Fix browser compatibility issues(font, orphans, widows, text-decoration). Thnx to @kinday for issue.

## [1.4] - 2015-11-08
 - Added `replace` option. Thanks to @sylvainbaronnet

## [1.3] - 2015-08-27
Rename project to make it more universal (plugin name is **postcss-initial**)

## [1.2] - 2015-08-26
Rename project to fit standards (plugin name is **postcss-all-property**)

## [1.1.0] - 2015-08-25
Add reset: inherited option

## [1.0.1] - 2015-08-24
Proof of concept. Plugin still works =)(plugin name is **postcss-all-unset**)
