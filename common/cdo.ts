/**
 * Created by jchaves on 8/9/14.
 */

/// <reference path='../js/tsdefinitions/require.d.ts' />

import CDOData = require('../cdodataset/cdodata');
import CDOTransform = require('../cdodataset/cdotransform');
import CDODisplay = require('../cdodataset/cdodisplay');

export function Visualizer() {
    var process:JQueryDeferred<any> = $.Deferred();

    process
        .then(function () {
            return new CDOData.CDODataSetInfoSource().GetDataAsync();
        })
        .then(function (data) {
            return new CDOTransform.CDODataSetInfoTransform().TransformDataAsync(data);
        })
        .then(function (data) {
            return new CDODisplay.CDODataSetInfoDisplay().DisplayDataAsync(data);
        })
        .done(function () {
            $('#done').html('Done.');
        });

    process.resolve();
}

require([], () => {
    Visualizer();
});
