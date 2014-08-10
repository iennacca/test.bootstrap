/**
 * Created by jchaves on 8/9/14.
 */

/// <reference path="infrastructure.ts" />

module CDO {
    export class TP implements AsyncDataTransform {
        TransformDataAsync(tData:CDOData):JQueryPromise<CDOData> {
            var d = $.Deferred();

            setTimeout(function () {
                tData.Name = tData.Name + ' Chaves';
                $('#result2').html(tData.Name);
                d.resolve(tData);
            }, 2000);
            return d.promise();
        }
    }
}