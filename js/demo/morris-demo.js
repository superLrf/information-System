$(function() {

    Morris.Line({
        element: 'morris-one-line-chart',
            data: [
                { year: '2014', value: 1000 },
                { year: '2015', value: 2000 },
                { year: '2016', value: 1000 },
                { year: '2017', value: 3200 },
                { year: '2018', value: 800 },
                { year: '2019', value: 2000 },
                { year: '2020', value: 4000 },
            ],
        xkey: 'year',
        ykeys: ['value'],
        resize: true,
        hideHover: 'auto',
        lineWidth:4,
        labels: ['Value'],
        lineColors: ['#1ab394'],
    });

    Morris.Area({
        element: 'morris-area-chart',
        data: [{
            period: '2010 Q1',
            iphone: 2666,
            ipad: null,
            itouch: 2647
        }, {
            period: '2010 Q2',
            iphone: 2778,
            ipad: 2294,
            itouch: 2441
        }, {
            period: '2010 Q3',
            iphone: 4912,
            ipad: 1969,
            itouch: 2501
        }, {
            period: '2010 Q4',
            iphone: 3767,
            ipad: 3597,
            itouch: 5689
        }, {
            period: '2011 Q1',
            iphone: 6810,
            ipad: 1914,
            itouch: 2293
        }, {
            period: '2011 Q2',
            iphone: 5670,
            ipad: 4293,
            itouch: 1881
        }, {
            period: '2011 Q3',
            iphone: 4820,
            ipad: 3795,
            itouch: 1588
        }, {
            period: '2011 Q4',
            iphone: 15073,
            ipad: 5967,
            itouch: 5175
        }, {
            period: '2012 Q1',
            iphone: 10687,
            ipad: 4460,
            itouch: 2028
        }, {
            period: '2012 Q2',
            iphone: 8432,
            ipad: 5713,
            itouch: 1791
        }],
        xkey: 'period',
        ykeys: ['iphone', 'ipad', 'itouch'],
        labels: ['iPhone', 'iPad', 'iPod Touch'],
        pointSize: 2,
        hideHover: 'auto',
        resize: true,
        lineColors: ['#87d6c6', '#54cdb4','#1ab394'],
        lineWidth:2,
        pointSize:1,
    });

    Morris.Donut({
        element: 'morris-donut-chart',
        data: [{
            label: "A系列",
            value: 12
        }, {
            label: "B系列",
            value: 30
        }, {
            label: "C系列",
            value: 20
        }],
        resize: true,
        colors: ['#87d6c6', '#54cdb4','#1ab394'],
    });

    Morris.Bar({
        element: 'morris-bar-chart',
        data: [{
            y: '2006',
            a: 600,
            b: 500
        }, {
            y: '2007',
            a: 750,
            b: 650
        }, {
            y: '2008',
            a: 500,
            b: 400
        }, {
            y: '2009',
            a: 75,
            b: 65
        }, {
            y: '2010',
            a: 50,
            b: 40
        }, {
            y: '2011',
            a: 75,
            b: 65
        }, {
            y: '2012',
            a: 100,
            b: 90
        }],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['A系列', 'B系列'],
        hideHover: 'auto',
        resize: true,
        barColors: ['#1ab394', '#cacaca'],
    });

    Morris.Line({
        element: 'morris-line-chart',
        data: [{
            y: '2006',
            a: 100,
            b: 90
        }, {
            y: '2007',
            a: 75,
            b: 65
        }, {
            y: '2008',
            a: 50,
            b: 40
        }, {
            y: '2009',
            a: 75,
            b: 65
        }, {
            y: '2010',
            a: 50,
            b: 40
        }, {
            y: '2011',
            a: 75,
            b: 65
        }, {
            y: '2012',
            a: 100,
            b: 90
        }],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['A系列', 'B系列'],
        hideHover: 'auto',
        resize: true,
        lineColors: ['#54cdb4','#1ab394'],
    });

});
