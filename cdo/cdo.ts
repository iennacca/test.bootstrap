/**
 * Created by jchaves on 8/9/14.
 */

/// <reference path="infrastructure.ts" />
/// <reference path="fakedata.ts" />
/// <reference path="faketransform.ts" />

module CDO {
    export function Visualizer() {
        var process:JQueryDeferred<CDO.CDOData> = $.Deferred();

        process
            .then(function () {
                return new CDO.DP().GetDataAsync();
            })
            .then(function (d1) {
                return new CDO.TP().TransformDataAsync(d1);
            })
            .done(function () {
                $('#done').html('Done.');
            });

        process.resolve();
    }
}