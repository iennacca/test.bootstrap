/**
 * Created by jchaves on 9/14/14.
 */

/// <reference path='../js/tsdefinitions/d3.d.ts' />
/// <reference path='../js/tsdefinitions/d3.layout.cloud.d.ts' />
import CDO = require('infrastructure');

export class Display implements CDO.AsyncDataDisplay {
    DisplayDataAsync(data: CDO.CDOStationInfo[]): JQueryPromise<CDO.CDOStationInfo[]> {
        var process = $.Deferred();
        var displayWords = data.map(function(d) { return d.Name; });

        setTimeout(function() {
            var displayer = new DisplayModule();

            displayer.displayData(displayWords);
            process.resolve();
        }, 0);

        return process.promise();
    }
}

class DisplayModule {
    displayData(data: string[]) {
        var fill = d3.scale.category20();

        d3.layout.cloud().size([300, 300])
            .words(data.map(function(d) {
                return {text: d, size: 10};
            }))
            .padding(5)
            .rotate(0)
            .font("Impact")
            .fontSize(function(d) { return d.size; })
            .on("end", draw)
            .start();

        function draw(words) {
            d3.select("body").append("svg")
                .attr("width", 300)
                .attr("height", 300)
                .append("g")
                .attr("transform", "translate(150,150)")
                .selectAll("text")
                .data(words)
                .enter().append("text")
                .style("font-size", function(d) { return d.size + "px"; })
                .style("font-family", "Impact")
                .style("fill", function(d, i) { return fill(i); })
                .attr("text-anchor", "middle")
                .attr("transform", function(d) {
                    return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
                })
                .text(function(d) { return d.text; });
        }
    }
}