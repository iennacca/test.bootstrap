/**
 * Created by jchaves on 8/11/14.
 */

/// <reference path="infrastructure.ts" />

module CDO {
    export class FakeDataDisplay implements AsyncDataDisplay {
        DisplayDataAsync(data: CDODataSet[]): JQueryPromise<CDODataSet[]> {
            var d = $.Deferred();

            setTimeout(function () {
                for (var i: number = 0; i < data.length; i++) {
                    $('#data').append('<li> ' + data[i].Name + ' </li>');
                    console.log(data[i].Name);
                }
                d.resolve(data);
            }, 2000);
            return d.promise();
        }
    }
}