/**
 * Created by jchaves on 9/9/14.
 */

/// <reference path="../common/infrastructure.ts" />
import CDO = require('../common/infrastructure');

export class CDOStationSource implements CDO.AsyncDataSource {
    GetDataAsync(): JQueryPromise<any> {
        return $.ajax({
            type: "GET",
            url: "http://www.ncdc.noaa.gov/cdo-web/api/v2/stations",
            headers: { "token": "TZLkSchIioQEPMWNWcuakCCLUbvJaUhk" }
        });
    }
}
