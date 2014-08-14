/**
 * Created by jchaves on 8/9/14.
 */

/// <reference path='../js/tsdefinitions/require.d.ts' />

import CDOData = require('./fakedata');
import CDOTransform = require('./faketransform');
import CDODisplay = require('./fakedisplay');

export function Visualizer() {
    var process:JQueryDeferred<any> = $.Deferred();

    process
        .then(function () {
            return new CDOData.FakeDataSetSource().GetDataAsync();
        })
        .then(function (data) {
            return new CDOTransform.FakeDataTransform().TransformDataAsync(data);
        })
        .then(function (data) {
            return new CDODisplay.FakeDataDisplay().DisplayDataAsync(data);
        })
        .done(function () {
            $('#done').html('Done.');
        });

    process.resolve();
}

require([], () => {
    Visualizer();
});
