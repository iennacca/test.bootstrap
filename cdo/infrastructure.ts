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
    GetDataAsync(): JQueryPromise<CDOData>;
}


interface AsyncDataTransform {
    TransformAsync(data: CDOData): JQueryPromise<CDOData>;
}

class DP implements AsyncDataSource {
    GetDataAsync(): JQueryPromise<CDOData> {
        var d = $.Deferred();

        setTimeout(function() {
            var data = new CDOData();
            data.Id = 1;
            data.Name = 'Jerry';
        }, 2000);
        return d.promise();
    }
}

class TP implements AsyncDataTransform {
    TransformAsync(data: CDOData): JQueryPromise<CDOData> {
        var d = $.Deferred();

        setTimeout(function() {
            console.log(data.Name);
        }, 2000);
        return d.promise();
    }
}



function Visualizer() {
    var process: JQueryDeferred<CDOData>;
    var dataPromise: JQueryPromise<CDOData>;
    var transformPromise: JQueryPromise<TransformData>;

    process
        .then(function() { return new DP().GetDataAsync(); })
        .then(function(data) { return new TP().TransformAsync(data); })
        .done();
}