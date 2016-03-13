/**
 * Created by jchaves on 8/9/14.
 */

/// <reference path='../js/tsdefinitions/require.d.ts' />

//import CDOData = require('../cdostation/cdostndata');
//import CDOTransform = require('../cdostation/cdostntransform');
//import CDODisplay = require('../cdostation/cdostndisplay');

import CDOData = require('../cdodataset/cdodata');
import CDOTransform = require('../cdodataset/cdotransform');
import CDODisplay = require('../cdodataset/cdodisplay');

//import CDOData = require('../cdotest/fakedata');
//import CDOTransform = require('../cdotest/faketransform');
//import CDODisplay = require('../cdotest/fakedisplay');

export function Visualizer() {
    var process:JQueryDeferred<any> = $.Deferred();

    process
        .then(function () {
            return new CDOData.Source().GetDataAsync();
        })
        .then(function (data) {
            return new CDOTransform.Transform().TransformDataAsync(data);
        })
        .then(function (data) {
            return new CDODisplay.Display().DisplayDataAsync(data);
        })
        .done(function () {
            $('#done').html('Done.');
        });

    process.resolve();
}

require([], () => {
    Visualizer();
});
