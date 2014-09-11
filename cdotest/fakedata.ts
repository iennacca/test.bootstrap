/**
 * Created by jchaves on 8/9/14.
 */

import CDO = require('./../common/infrastructure');

class FakeDataSetInfo implements CDO.CDODataSetInfo {
    Id: number;
    Name: string;
    UID: string;
}

export class FakeDataSetSource implements CDO.AsyncDataSource {
    GetDataAsync(): JQueryPromise<any> {
        var d = $.Deferred();
        var names = ['Jerry', 'Karen', 'Cameron'];
        var data = [];

        setTimeout(function () {
            for (var i = 0; i < names.length; i++) {
                var dpData = new FakeDataSetInfo();
                dpData.Id = i;
                dpData.Name = names[i];
                data.push(dpData);
            }
            d.resolve(data);
        }, 2000);
        return d.promise();
    }
}
