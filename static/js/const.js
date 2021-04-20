class Const {
    constructor () {
        this.M = 1000000;
        this.d = {};

        this.fixedD = 12.7;
        this.fixed = 12.7;
        this.hourlyrateD = 285;
        this.hourlyrate = (285 / this.M);
        this.salaryD = 107;
        this.salary = (107 / this.M);

        this.khoursneeded = 72;
        this.hoursperweek = 32;
        
        this.staffneeded = 35; 
        this.weeksperyear = 40;
        this.howmanystaff = 56; 
        this.doublefixed = (this.fixed * 2);
        this.moreherdingstaff = 70;
        this.moreherdingwranglers = 9;
        this.turnover = 30;
        this.annualhires = Math.ceil(this.howmanystaff * (this.turnover / 100));
        this.moreherdinghires = Math.ceil(this.moreherdingstaff * (this.turnover / 100));
        this.onboarding = 120;
        this.withonboarding = 72;
    }

    get (f) {
        return "" + this[f];
    }

    replaceAll () {
        for (var k in this) {
            console.log("k: ", k, "v:", this[k]);
            var es = document.getElementsByClassName(k);
            for (var i = 0; i < es.length; i++) {
                console.log("es", es[i])
                es[i].innerHTML = this[k];
            }
        }
    }
}   

c = new Const();
c.replaceAll();
