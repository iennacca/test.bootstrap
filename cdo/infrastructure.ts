/**
 * Created by JerryChaves on 8/1/14.
 */

/// <reference path="../js/jquery.d.ts" />

module CDO {
    export interface CDODataSet {
        id: number;
        Name: string;
        uid: string;
    }

    export interface AsyncDataSource {
        GetDataAsync(): JQueryPromise<any>;
    }

    export interface AsyncDataTransform {
        TransformDataAsync(data: any): JQueryPromise<CDODataSet[]>;
    }

    export interface AsyncDataDisplay {
        DisplayDataAsync(data: CDODataSet[]): JQueryPromise<CDODataSet[]>;
    }
}
