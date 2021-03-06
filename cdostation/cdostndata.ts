/**
 * Created by jchaves on 9/9/14.
 */

import CDO = require('infrastructure');

export class Source implements CDO.AsyncDataSource {
    GetDataAsync(): JQueryPromise<any> {
        return $.ajax({
            type: "GET",
            url: "http://www.ncdc.noaa.gov/cdo-web/api/v2/stations",
            headers: { "token": "TZLkSchIioQEPMWNWcuakCCLUbvJaUhk" }
        });
    }
}

