/**
 * Created by jchaves on 9/14/14.
 */

/// <reference path="../js/tsdefinitions/jquery.d.ts" />

export interface CDOStationInfo {
    Id: number;
    Name: string;
    Latitude: number;
    Longitude: number;
}

export interface AsyncDataSource {
    GetDataAsync(): JQueryPromise<any>;
}

export interface AsyncDataTransform {
    TransformDataAsync(data: any): JQueryPromise<CDOStationInfo[]>;
}

export interface AsyncDataDisplay {
    DisplayDataAsync(data: CDOStationInfo[]): JQueryPromise<CDOStationInfo[]>;
}
