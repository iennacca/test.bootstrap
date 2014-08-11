/**
 * Created by jchaves on 8/9/14.
 */

/// <reference path="infrastructure.ts" />

module CDO {
    export class FakeDataTransform implements AsyncDataTransform {
        TransformDataAsync(data: CDODataSet[]): JQueryPromise<CDODataSet[]> {
            var d = $.Deferred();

            setTimeout(function () {
                for (var i: number = 0; i < data.length; i++) {
                    data[i].Name = data[i].Name + ' Chaves';
                }
                d.resolve(data);
            }, 2000);
            return d.promise();
        }
    }
}