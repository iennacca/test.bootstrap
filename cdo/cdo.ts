/**
 * Created by jchaves on 8/9/14.
 */

/// <reference path="infrastructure.ts" />
/// <reference path="fakedata.ts" />
/// <reference path="faketransform.ts" />
/// <reference path="fakedatadisplay.ts" />

module CDO {
    export function Visualizer() {
        var process:JQueryDeferred<CDO.CDODataSet[]> = $.Deferred();

        process
            .then(function () {
                return new FakeDataSetSource().GetDataAsync();
            })
            .then(function (data) {
                return new FakeDataTransform().TransformDataAsync(data);
            })
            .then(function (data) {
                return new FakeDataDisplay().DisplayDataAsync(data);
            })
            .done(function () {
                $('#done').html('Done.');
            });

        process.resolve();
    }
}