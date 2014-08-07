/**
 * Created by JerryChaves on 8/1/14.
 */

/// <reference path="../js/jquery.d.ts" />

class CDOData {
    Id: number;
    Name: string;
}

class TransformData {
    Id: number;
    Name: string;
}

interface AsyncDataSource {
    GetAsyncData(): JQueryPromise<CDOData>;
}


interface AsyncDataTransform {
    TransforAsync(): JQueryPromise<CDOData>;
}

class DP implements AsyncDataSource {
    GetAsyncData(): JQueryPromise<CDOData> {
        var d = $.Deferred();

        return d.promise();
    }
}

function Visualizer() {
    var process: JQueryDeferred<CDOData>;
    var dataPromise: JQueryPromise<CDOData>;
    var transformPromise: JQueryPromise<TransformData>;

    process
        .then(function() { return dataPromise; })
        .then(function() { return transformPromise; })
        .done();
}