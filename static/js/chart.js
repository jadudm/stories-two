class VizSlider {
    constructor (id, config) {
        this.id = id; //"{{ safeJS (.Get "id") }}";
        this.width = config.width;
        this.config = config;
        this.callback = function (val) {
            if ("callback" in config) {
                config.callback(val);
            } else {
                console.log("default slider callback: " + val);
            }
        };

        this.slider = d3
            .sliderBottom()
            .min(config.min)
            .max(config.max)
            .width(config.width)
            .tickFormat(d3.format("d")) // d3.format('.2%')
            .ticks(config.ticks | 5)
            .step(1)
            .default(config.value)
            .on('onchange', this.callback)
            ;

        this.container = d3
            .select('div#slider' + this.id)
            .append('svg')
            .attr('width', this.width + 50)
            .attr('height', 100)
            .append('g')
            .attr('transform', 'translate(30,30)');

        this.container.call( this.slider );
    }

    setCallbacks (fun) {
        this.slider.on("onchange", fun);
        this.slider.on("end", fun);
    }

    setValue (v) {
        this.slider.value(v);
    }

    setMin (v) {
        this.slider.min(v);
    }

    setMax (v) {
        this.slider.max(v);
    }

    getValue () {
        return this.slider.value();
    }
}


class VizChart {
    constructor (id, config) {
        this.id = id;
        console.log("VizChart id:", this.id);
        this.ctx = config.ctx
        this.labels = config.labels;
        this.datasets = config.datasets;
        this.options = {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 16,
                }
            }
        };        
        
        this.chart = new Chart(this.ctx, {
            type: 'bar',
            data: {
                labels: this.labels,
                datasets: this.datasets,
            }, 
            options: this.options
        });
    }

    setMax (v) {
        this.chart.options.scales.y.max = v;
    }
    
    setDatasets (ds) {
        this.chart.data.datasets = ds;
        this.chart.update();
    }
    setLabels (ls) {
        this.chart.labels = ls;
        this.chart.update();
    }

    setDatasetIndex(ndx, ds) {
        this.chart.data.datasets[ndx].data = ds;
        this.chart.update();
    }

    setLabel (lab) {
        this.chart.label = lab;
        this.chart.update();
    }

    setTitle (t) {
        this.chart.plugins = {};
        this.chart.plugins.title = { display: true, text: t };
        this.chart.update();
    }

    setLegend (lgd) {
        this.options.legend = lgd;
        this.chart.update();
    }

    setCallback (fun) {
        this.callback = fun;
        this.chart.setCallbacks(fun);
        this.chart.update();
    }

    invokeCallback (v) {
        this.callback(v);
    }

    update () {
        this.chart.update();
    }
}
