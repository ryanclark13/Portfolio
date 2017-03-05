console.log('\'Allo \'Allo!');
$(document).ready(function(){
      $('.parallax').parallax();
    });
    (function() {
        var width = 0, widthScale, barHeight = 30, gutter = 15;

        var chart = d3.select('.chart');

        // data converted from TSV to JS array
        var data = [
        {name: 'HTML', value: 90},
        {name: 'CSS', value: 90},
        {name: 'PHP', value: 60},
        {name: 'PHOTOSHOP', value: 70},
        {name: 'UI/UX DESIGN', value: 70}
        ];

        // coerce to number
        data.forEach(function(d){
          d.value = +d.value;
        });

        var maxVal = d3.max(data, function(d) {
          return d.value;
        });

        // sort data
        data.sort(function(a, b){
          return Number(b.value) - Number(a.value);
        });

        var bar = chart.selectAll('div')
        .data(data)
        .enter().append('div')
        .attr('class', 'bar cf')
        .style('width', function(d) {
          return Number((d.value/maxVal) * 100) + '%';
        });

        bar.append('span')
          .attr('class', 'label')
          .text(function(d) {
          return d.value;
        });

        bar.append('span')
          .attr('class', 'name')
          .text(function(d) {
          return d.name;
        });

    })();
