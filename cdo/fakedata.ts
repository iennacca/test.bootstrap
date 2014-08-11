/**
 * Created by jchaves on 8/9/14.
 */

/// <reference path="infrastructure.ts" />

module CDO {
    class FakeDataSet implements CDODataSet {
        id: number;
        Name: string;
        uid: string;
    }

    export class FakeDataSetSource implements AsyncDataSource {
        GetDataAsync(): JQueryPromise<CDODataSet[]> {
            var d = $.Deferred();
            var l = [];

            setTimeout(function () {
                var dpData = new FakeDataSet();
                dpData.id = 1;
                dpData.Name = 'Jerry';
                l.push(dpData);

                var dpData1 = new FakeDataSet();
                dpData1.id = 2;
                dpData1.Name = 'Karen';
                l.push(dpData1);

                d.resolve(l);
            }, 2000);
            return d.promise();
        }
    }
}