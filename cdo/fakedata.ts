/**
 * Created by jchaves on 8/9/14.
 */

/// <reference path="infrastructure.ts" />

module CDO {
    export class DP implements AsyncDataSource {
        GetDataAsync():JQueryPromise<CDOData> {
            var d = $.Deferred();

            setTimeout(function () {
                var dpData = new CDOData();
                dpData.Id = 1;
                dpData.Name = 'Jerry';
                $('#result1').html(dpData.Name);
                d.resolve(dpData);
            }, 2000);
            return d.promise();
        }
    }
}