/**
 * Created by Jerry on 3/13/2016.
 */

var width = 750,
    height = 500;

var svg = d3.select(".graph-container").append("svg")
    .attr("width", width)
    .attr("height", height);

var force = d3.layout.force()
    .gravity(0.01)
    .distance(100)
    .charge(-100)
    .size([width, height]);

d3.json("js/fdg.json", function(error, json) {
    if (error) throw error;

    force
        .nodes(json.nodes)
        .links(json.links)
        .start();

    var link = svg.selectAll(".link")
        .data(json.links)
        .enter()
        .append("g")
        .attr("class", "link")
        .append("line")
        .attr("class", "link-line")
        .style("stroke-width", function (d) {
            return Math.sqrt(d.strength);
        });

    var linkText = svg.selectAll(".link")
        .append("text")
        .attr("class", "link-label")
        .attr("font-family", "Arial, Helvetica, sans-serif")
        .attr("fill", "Black")
        .style("font", "normal 12px Arial")
        .attr("dy", ".35em")
        .attr("text-anchor", "middle")
        .text(function(d) {
            return d.relation;
        });

    var node = svg.selectAll(".node")
        .data(json.nodes)
        .enter().append("g")
        .attr("class", "node")
        .call(force.drag);

    node.append("image")
        .attr("xlink:href", "https://github.com/favicon.ico")
        .attr("x", -8)
        .attr("y", -8)
        .attr("width", 16)
        .attr("height", 16);

    node.append("text")
        .attr("dx", 12)
        .attr("dy", ".35em")
        .text(function(d) { return d.name });

    node[0].x = width / 2;
    node[0].y = height / 2;

    force.on("tick", function() {
        link.attr("x1", function(d) { return d.source.x; })
            .attr("y1", function(d) { return d.source.y; })
            .attr("x2", function(d) { return d.target.x; })
            .attr("y2", function(d) { return d.target.y; });

        linkText
            .attr("x", function(d) {
                return ((d.source.x + d.target.x)/2);
            })
            .attr("y", function(d) {
                return ((d.source.y + d.target.y)/2);
            });

        node.attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });
    });
});
