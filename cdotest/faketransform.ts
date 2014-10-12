/**
 * Created by jchaves on 8/9/14.
 */

import CDO = require('./../cdodataset/infrastructure');

export class Transform implements CDO.AsyncDataTransform {
    TransformDataAsync(data: any): JQueryPromise<CDO.CDODataSetInfo[]> {
        var d = $.Deferred();

        setTimeout(function () {
            for (var i: number = 0; i < data.length; i++) {
                data[i].Name = data[i].Location + ' Chaves';
            }
            d.resolve(data);
        }, 2000);
        return d.promise();
    }
}
