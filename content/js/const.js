class Const {
    constructor () {
        this.M = 1000000;
        this.d = {};
        console.log("HI")

        this.d["fixedD"] = 12.7;
        this.d["fixed"] = 12.7;
        this.d["hourlyrateD"] = 285;
        this.d["hourlyrate"] = (285 / this.M);
        this.d["salaryD"] = 107;
        this.d["salary"] = (107 / this.M);
        console.log("HI")

        this.d["khoursneeded"] = 72;
        console.log("HI")

        this.d["staffneeded"] = 35; 
        this.d["weeksperyear"] = 40;
        this.d["howmanystaff"] = 56; 
        console.log(this.d);
        this.d["doublefixed"] = (this.d["fixed"] * 2)

    }

    get (f) {
        return "" + this.d[f];
    }

    replaceAll () {
        for (var k in this.d) {
            console.log("key: ", k);
            var es = document.getElementsByClassName(k);
            for (var i = 0; i < es.length; i++) {
                console.log("es", es[i])
                es[i].innerHTML = this.d[k];
            }
        }
    }
}   

c = new Const();
c.replaceAll();
