/**
 * Created by jchaves on 8/12/14.
 */

/// <reference path="infrastructure.ts" />

module CDO {
    class CDODataSetInfo implements CDODataSet {
        id: number;
        Name: string;
        uid: string;
    }

    export class CDODataSetInfoSource implements AsyncDataSource {
        GetDataAsync(): JQueryPromise<any> {
            return $.ajax({
                type: "GET",
                url: "http://www.ncdc.noaa.gov/cdo-web/api/v2/datasets",
                headers: { "token": "TZLkSchIioQEPMWNWcuakCCLUbvJaUhk" }
            });
        }
    }
}