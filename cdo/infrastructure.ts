/**
 * Created by JerryChaves on 8/1/14.
 */

/// <reference path="../js/jquery.d.ts" />

module CDO {
    export class CDOData {
        Id:number;
        Name:string;
    }

    export interface AsyncDataSource {
        GetDataAsync(): JQueryPromise<CDOData>;
    }

    export interface AsyncDataTransform {
        TransformDataAsync(data:CDOData): JQueryPromise<CDOData>;
    }
}
