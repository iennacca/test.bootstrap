/**
 * Created by jchaves on 9/13/14.
 */

import CDO = require('infrastructure');


class StationInfo implements CDO.CDOStationInfo {
    Id: number;
    Name: string;
    Longitude: number;
    Latitude: number;
}

export class Transform implements CDO.AsyncDataTransform {
    TransformDataAsync(data: any): JQueryPromise<CDO.CDOStationInfo[]> {
        var d = $.Deferred();
        var stations = [];

        setTimeout(function () {
            for (var i: number = 0; i < data.results.length; i++) {
                var station = new StationInfo();

                station.Id = data.results[i].id;
                station.Name = '[' + data.results[i].name + ']';
                station.Longitude = data.results[i].longitude;
                station.Latitude = data.results[i].latitude;
                stations.push(station);
            }
            d.resolve(stations);
        }, 2000);
        return d.promise();
    }
}
