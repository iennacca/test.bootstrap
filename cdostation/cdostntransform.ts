/**
 * Created by jchaves on 9/13/14.
 */

import CDO = require('infrastructure');


class StationInfo implements CDO.CDOStationInfo {
    Id: number;
    Location: string;
    Longitude: number;
    Latitude: number;
}

export class Transform implements CDO.AsyncDataTransform {
    TransformDataAsync(data: any): JQueryPromise<CDO.CDOStationInfo[]> {
        var d = $.Deferred();
        var stations = [];

        /// TODO: Recreate geocoder code
        //var geocoder = new google.maps.Geocoder();
        var geocoder;

        setTimeout(function () {
            for (var i: number = 0; i < data.results.length; i++) {
                var station = new StationInfo();

                station.Id = data.results[i].id;
                station.Location = '[' + data.results[i].name + ']';
                station.Longitude = data.results[i].longitude;
                station.Latitude = data.results[i].latitude;
                stations.push(station);
            }
            d.resolve(stations);
        }, 2000);
        return d.promise();
    }

    /// TODO: Recreate geocoder code
/*
    private geocodeAddress(stnInfo: StationInfo): JQueryPromise<StationInfo> {
        var geocoder = new google.maps.Geocoder();
        var def = $.Deferred();
        var self = this;

        geocoder.geocode( { 'address': address }, function(results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                console.log(results[0].geometry.location);
                self.Latitude = results[0].geometry.location.lat();
                self.Longitude = results[0].geometry.location.lng();
            } else {
                console.log('Geocode was not successful for the following reason: ' + status);
            }
            def.resolve();
        });
        return def.promise();
    }
*/
}
