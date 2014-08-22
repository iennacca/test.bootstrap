/**
 * Created by JerryChaves on 8/1/14.
 */

/// <reference path="../js/tsdefinitions/jquery.d.ts" />

export interface CDODataSetInfo {
    Id: number;
    Name: string;
    UID: string;
}

export interface AsyncDataSource {
    GetDataAsync(): JQueryPromise<any>;
}

export interface AsyncDataTransform {
    TransformDataAsync(data: any): JQueryPromise<CDODataSetInfo[]>;
}

export interface AsyncDataDisplay {
    DisplayDataAsync(data: CDODataSetInfo[]): JQueryPromise<CDODataSetInfo[]>;
}
