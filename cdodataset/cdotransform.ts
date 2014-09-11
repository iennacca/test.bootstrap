/**
 * Created by jchaves on 8/15/14.
 */

import CDO = require('../common/infrastructure');


class DataSetInfo implements CDO.CDODataSetInfo {
    Id: number;
    Name: string;
    UID: string;
}

export class CDODataSetInfoTransform implements CDO.AsyncDataTransform {
    TransformDataAsync(data: any): JQueryPromise<CDO.CDODataSetInfo[]> {
        var d = $.Deferred();
        var dataSets = [];

        setTimeout(function () {
            for (var i: number = 0; i < data.results.length; i++) {
                var dataset = new DataSetInfo();

                dataset.Id = data.results[i].id;
                dataset.Name = '[' + data.results[i].name + ']';
                dataset.UID = data.results[i].uid;
                dataSets.push(dataset);
            }
            d.resolve(dataSets);
        }, 2000);
        return d.promise();
    }
}
