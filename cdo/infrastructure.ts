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
    TransformDataAsync(data: CDOData): JQueryPromise<CDOData>;
}

class DP implements AsyncDataSource {
    GetDataAsync(): JQueryPromise<CDOData> {
        var d = $.Deferred();

        setTimeout(function() {
            var dpData = new CDOData();
            dpData.Id = 1;
            dpData.Name = 'Jerry';
            $('#result1').html(dpData.Name);
            d.resolve(dpData);
        }, 2000);
        return d.promise();
    }
}

class TP implements AsyncDataTransform {
    TransformDataAsync(tData: CDOData): JQueryPromise<CDOData> {
        var d = $.Deferred();

        setTimeout(function() {
            tData.Name = tData.Name + ' Chaves';
            $('#result2').html(tData.Name);
            d.resolve(tData);
        }, 2000);
        return d.promise();
    }
}

function Visualizer() {
    var process: JQueryDeferred<CDOData> = $.Deferred();

    process
        .then(function() { return new DP().GetDataAsync(); })
        .then(function(d1) { return new TP().TransformDataAsync(d1); })
        .then(function(d2) { console.log(d2) })
        .done(function() {
            $('#done').html('Done.');
        });

    process.resolve();
}