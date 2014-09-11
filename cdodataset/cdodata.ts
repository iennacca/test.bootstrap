/**
 * Created by jchaves on 8/12/14.
 */

/// <reference path="../common/infrastructure.ts" />
import CDO = require('../common/infrastructure');

export class CDODataSetInfoSource implements CDO.AsyncDataSource {
    GetDataAsync(): JQueryPromise<any> {
        return $.ajax({
            type: "GET",
            url: "http://www.ncdc.noaa.gov/cdo-web/api/v2/datasets",
            headers: { "token": "TZLkSchIioQEPMWNWcuakCCLUbvJaUhk" }
        });
    }
}
