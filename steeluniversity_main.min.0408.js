function PhysicalConstants() {
}

function SteelData() {
}

function State() {
}

function ThermodynamicData(a, b, c, d) {
    this.dHf = a, this.s0 = b, this.k = c, this.m = d, this.getDHf = function () {
        return this.dHf
    }, this.getS0 = function () {
        return this.s0
    }, this.getCp = function (a) {
        return this.k * a + this.m
    }, this.getIntegralCp = function (a, b) {
        return this.m * (a - b) + this.k * ((a * a - b * b) / 2)
    }
}

function Element(a, b, c, d, e, f, g, h) {
    this.symbol = a, this.index = b, this.atomicMass = c, this.recoveryRate = d, this.liquidusCoefficient = e, this.elementColor = f, this.oxide = g, this.reducable = h, this.thermoData = [], Elements[a.toUpperCase()] = Elements.array[b] = this
}

function Compound(a, b, c, d, e) {
    this.symbol = a, this.index = b, this.molecularMass = c, this.noCations = d, this.noAnions = e, this.thermoData = [], Compounds[a.toUpperCase()] = Compounds.array[b] = this
}

function Phase(a, b, c, d) {
    var e = a, f = d, g = [];
    this.temperature = b, this.mass = c;
    var h;
    "Steel" == e ? h = Elements.getElementArrayCount() : "Slag" == e || "Gas" == e ? h = Compounds.getCompoundArrayCount() : console.log("#### PHASE OUT OF RANGE ####");
    var i = 0;
    for (i; h > i; i++) g[i] = 0;
    this.getName = function () {
        return e
    }, this.getComposition = function () {
        return g
    }, this.getTemperature = function () {
        return this.temperature
    }, this.getMass = function () {
        return this.mass
    }, this.getVolume = function () {
        return this.mass / f
    }, this.addMaterial = function (a, b) {
        var c = g.concat(), d = this.mass + b;
        if (d > 0) {
            var e = 0, f = [], h = 0, i = g.length;
            for (e; i > e; e++) {
                var j = .95 + .1 * Math.random();
                void 0 == a[e] && (a[e] = 0), f[e] = j * a[e], h += f[e]
            }
            for (0 == h && (h = 1), e = 0; i > e; e++) g[e] = (c[e] * this.mass + f[e] * b / h) / d
        } else d = 0;
        this.set("mass", d)
    }, this.removeMaterial = function (a) {
        var b = this.mass - a;
        b = Math.max(b, 0), this.set("mass", b)
    }, this.incrementTemperature = function (a) {
        this.set("temperature", this.temperature + a)
    }, this.setTemperature = function (a) {
        this.set("temperature", a)
    }, this.getEnergyPerKelvin = function (a) {
        var b = 0;
        if ("Steel" == e) {
            var c = 0, d = g.length;
            for (c; d > c; c++) {
                var f = Elements.getElementByIndex(c), h = f.getThermodynamicData(a);
                b += h.getCp(this.temperature) * g[c] * this.mass
            }
        } else if ("Slag" == e) {
            var c = 0, d = g.length;
            for (c; d > c; c++) {
                var f = Compounds.getCompoundByIndex(c), h = f.getThermodynamicData(a);
                b += h.getCp(this.temperature) * g[c] * this.mass
            }
        }
        return b
    }, this.adjustComposition = function (a, b) {
        var c = g.concat(), d = this.mass, f = [];
        if ("Steel" == e) var h = Elements.getElementArray(); else if ("Slag" == e || "Gas" == e) var h = Compounds.getCompoundArray();
        var i = 0, j = 0, k = c.length;
        for (j; k > j; j++) void 0 == a[j] && (a[j] = 0), f[j] = c[j] * d / h[j].getMolecularMass(), i += a[j] * h[j].getMolecularMass();
        var l = [], m = 0, j = 0;
        for (j; k > j; j++) l[j] = (a[j] + f[j]) * h[j].getMolecularMass() / (d + i) || 0, m += l[j], l[j] < 0 && console.log("## " + e + " phase component " + h[j].getSymbol() + " content is less than 0, wt%=" + l[j]);
        isNaN(l[0]) && console.log("das"), g = l, this.set("mass", d + i)
    }
}

function ChemicalComposition(a) {
    this.componentArray = [], this.balanceComponent = a, a && this.componentArray.push(new ChemicalFraction(this.balanceComponent, 1)), this.addData = function (a, b) {
        var c = 0;
        for (i = 1; i < this.componentArray.length; i++) c += this.componentArray[i].fraction;
        c += b, c > 1 ? console.log("Adding " + a.symbol + ": total compositional fraction exceeds 1") : (this.componentArray.push(new ChemicalFraction(a, b)), this.componentArray[0] = new ChemicalFraction(this.balanceComponent, 1 - c))
    }, this.getLiquidusTemperature = function () {
        for (var a, b = 0, c = 0; c < this.componentArray.length; c++) {
            var d = 100 * componentArray[c].getFraction(),
                e = this.componentArray[c].component.getLiquidusCoefficient();
            null != e && (b += d * e)
        }
        var f = getElementArray(100), g = f[1];
        return a = .5 > g ? 1537 - 73.1 * g + b : 1531 - 61.5 * g + b
    }, this.getElementArray = function (a) {
        var b = new Array;
        for (i = 0; i < 28; i++) b[i] = 0;
        var c = this.componentArray;
        for (i = 0; i < c.length; i++) {
            var d = c[i].component.index;
            b[d] = a * c[i].fraction
        }
        return b
    }, this.getCompoundArray = function (a) {
        for (var b = new Array, c = 0; 19 > c; c++) b[c] = 0;
        var d = this.componentArray;
        for (c = 0; c < d.length; c++) {
            var e = d[c].component.index;
            b[e] = a * d[c].fraction
        }
        return b
    }, this.getFraction = function (a) {
        for (var b = -1, c = 0; c < this.componentArray.length; c++) if (this.componentArray[c].component.symbol.toUpperCase() === a.toUpperCase()) {
            b = this.componentArray[c].fraction;
            break
        }
        return b
    }
}

function ChemicalFraction(a, b) {
    this.component = a, this.fraction = b, this.getFraction = function () {
        return this.fraction
    }
}

function Electrode(a) {
    this.electrodeNo = a;
    var b = 6.17e-13, c = 2.47e-12, d = 38.4;
    this.wearRatePerJoule = b + Math.random() * (c - b), this.relativeBottom = 0, this.imageTop = 0, this.height = 250, this.bottom = 0;
    var e = .5, f = 1.1, g = .9, h = 1.05, i = .65, j = .55, k = 1e6, l = -137, m = .07, n = 1, o = 0, p = 0, q = 0,
        r = new Highcharts.Chart({
            chart: {
                renderTo: "electrode" + a + "_power_graph",
                type: "solidgauge",
                margin: [-30, -10, -10, -10],
                backgroundColor: null,
                animation: !1
            },
            title: {text: null, floating: !0},
            pane: {
                center: ["50%", "95%"],
                size: "120%",
                startAngle: -60,
                endAngle: 60,
                background: {
                    backgroundColor: Highcharts.theme && Highcharts.theme.background2 || "#EEE",
                    innerRadius: "60%",
                    outerRadius: "100%",
                    shape: "arc"
                }
            },
            tooltip: {enabled: !1},
            yAxis: {
                stops: [[.1, "#EDD266"], [.4, "#F5A549"], [.8, "#DF5353"]],
                lineWidth: 0,
                minorTickInterval: null,
                tickPixelInterval: 400,
                tickWidth: 0,
                title: null,
                labels: {enabled: !1},
                min: 0,
                max: 100,
                title: null
            },
            credits: {enabled: !1},
            plotOptions: {solidgauge: {dataLabels: {y: -30, borderWidth: 0, useHTML: !0}, animation: !1}},
            series: [{name: "power", data: [0], dataLabels: {enabled: !1}, tooltip: null}]
        });
    this.update = function (a) {
        var b = Furnace.Model.scrapBottom + 110, c = 110 - (Re.Model.ecTop - this.relativeBottom - 19),
            l = Furnace.Model.msBottom + 56;
        p = c - b, q = c - l;
        var m = Re.Model.get("currentPower") / Re.Model.get("NUM_ELECTRODES") * k, n = 0, r = 0,
            s = Boolean(Furnace.getSolidHeight() > Furnace.getSteelHeight());
        s && m > 0 ? (r = e + (f - e) * Math.random(), n = i) : m > 0 && (r = g + (h - g) * Math.random(), n = j);
        var t = 1 * r / (1 + 150 * Math.exp(p / 3 - 5)), u = 1 * r / (1 + 1e3 * Math.exp(q - 12));
        r = Math.max(t, u), r = Math.max(Math.min(r, 1), 0);
        var v = m * r * n * a;
        o += v * this.wearRatePerJoule, this.height = 250 - o * d, $("#electrode" + this.electrodeNo + "_mask").css("height", this.height), this.relativeBottom += v * this.wearRatePerJoule * d, Re.updateRelativeBottom(), v > 0 && Furnace.addEnergy(v, String("electrode " + this.electrodeNo)), this.updatePowerFactor(r, a)
    }, this.updatePowerFactor = function (a, b) {
        var c = $("#electrode" + this.electrodeNo + "_image");
        return c.hasClass("broken") ? (c.hasClass("out") || (this.imageTop = 0, c.css("top", this.imageTop)), void r.series[0].points[0].update(0)) : (c.hasClass("replaced") ? (this.imageTop = 10, c.css("top", this.imageTop), c.removeClass("replaced")) : (a > 0 ? this.imageTop = Math.max(this.imageTop - n * a * b, l) : this.imageTop = Math.min(this.imageTop + m * b, 0), c.css("top", this.imageTop)), void (0 == Re.Model.cycleCounter && r.series[0].points[0].update(100 * a)))
    }, this.setDistanceToScrap = function (a) {
        p = a
    }, this.setDistanceToSteel = function (a) {
        q = a
    }
}

function RawMaterial(a, b, c, d, e, f, g, h) {
    this.name = a, this.type = b, this.form = c, this.bulkDensity = d, this.unitCost = e, this.metalComposition_array = f.getElementArray(1), this.oxideComposition_array = g.getCompoundArray(1), this.metalFraction = h, this.getName = function () {
        return this.name
    }, this.getType = function () {
        return this.type
    }, this.getForm = function () {
        return this.form
    }, this.getBulkDensity = function () {
        return this.bulkDensity
    }, this.getUnitCost = function () {
        return this.unitCost
    }, this.getMetalComposition = function () {
        return this.metalComposition_array
    }, this.getOxideComposition = function () {
        return this.oxideComposition_array
    }, this.getMetalFraction = function () {
        return this.metalFraction
    }
}

function RawMaterialAmount(a, b) {
    this.rawMaterial = a, this.mass = b, this.getRawMaterial = function () {
        return this.rawMaterial
    }, this.getMass = function () {
        return this.mass
    }, this.addMass = function (a) {
        this.mass += a, this.mass = Math.max(0, this.mass)
    }
}

function RawMaterialType(a) {
    this.name = a, this.getName = function () {
        return this.name
    }
}

function RawMaterialForm(a, b, c) {
    this.id = a, this.name = b, this.reactionRate = c, this.getID = function () {
        return this.id
    }, this.getName = function () {
        return this.name
    }, this.getReactionRate = function () {
        return this.reactionRate
    }
}

function SteelGrade(a, b, c, d, e, f, g, h, i, j) {
    this.index = a, this.shortName = b, this.name = c, this.nameEnglish = d, this.minimumComposition = e, this.maximumComposition = f, this.maximumTime = g, this.minimumTemperature = h, this.maximumTemperature = i, this.maxCO2 = j, this.getIndex = function () {
        return this.index
    }, this.getShortName = function () {
        return this.shortName
    }, this.getName = function () {
        return this.name
    }, this.getMinimumComposition = function () {
        return this.minimumComposition
    }, this.getMaximumComposition = function () {
        return this.maximumComposition
    }, this.getMaximumTime = function () {
        return maximumTime
    }, this.getMinimumTemperature = function () {
        return minimumTemperature
    }, this.getMaximumTemperature = function () {
        return maximumTemperature
    }, this.getMaxCO2 = function () {
        return this.maxCO2
    }
}

function SolidPhase() {
    this.solids_array = new Array, this.scrapVolume = 0, this.temperature = 298, this.addSolids = function (a, b) {
        var c = this.getTotalMass();
        this.solids_array = this.solids_array.concat(a);
        var d = this.getTotalMass();
        this.set({temperature: (c * this.temperature + (d - c) * b) / d, scrapVolume: this.getVolume()})
    }, this.reduceMass = function (a) {
        this.solids_array[0].addMass(-a), this.set("scrapVolume", this.getScrapVolume())
    }, this.getTemperature = function () {
        return this.temperature
    }, this.changeTemperature = function (a) {
        this.set("temperature", this.temperature + a)
    }, this.getHeatingEnergyPerKelvin = function () {
        var a = 0, b = 0, c = this.solids_array.length;
        for (b; c > b; b++) {
            var d = this.solids_array[b].getRawMaterial(), e = 1e3 * this.solids_array[b].getMass(),
                f = d.getMetalFraction(), g = e * f, h = e * (1 - f), i = d.getMetalComposition(), j = 0, k = i.length;
            for (j; k > j; j++) {
                var l = Elements.getElementByIndex(j), m = l.getThermodynamicData(State.SOLID()), n = i[j] * g;
                a += m.getCp(this.temperature) * n
            }
            var o = d.getOxideComposition(), j = 0, k = o.length;
            for (j; k > j; j++) {
                var l = Compounds.getCompoundByIndex(j), m = l.getThermodynamicData(State.SOLID()), p = o[j] * h;
                a += m.getCp(this.temperature) * p
            }
        }
        return a
    }, this.getVolume = function () {
        var a = 0, b = this.solids_array.length, c = 0;
        for (c; b > c; c++) {
            var d = this.solids_array[c].getRawMaterial().getBulkDensity(), e = this.solids_array[c].getMass();
            a += e / d
        }
        return a
    }, this.getScrapVolume = function () {
        var a = 0, b = this.solids_array.length, c = 0;
        for (c; b > c; c++) if (this.solids_array[c].getRawMaterial().getType().name == RawMaterialType.BASKET().name) {
            var d = this.solids_array[c].getRawMaterial().getBulkDensity(), e = this.solids_array[c].getMass();
            a += e / d
        }
        return a
    }, this.getTotalMass = function () {
        var a = 0, b = this.solids_array.length, c = 0;
        for (c; b > c; c++) a += this.solids_array[c].getMass();
        return a
    }, this.getCoarseFraction = function () {
        var a = 0, b = 0, c = this.solids_array.length, d = 0;
        if (!(c > 0)) return 0;
        for (d; c > d; d++) {
            var e = this.solids_array[d].getRawMaterial().getBulkDensity(), f = this.solids_array[d].getMass();
            a += f / e, this.solids_array[d].getRawMaterial().getForm().id == RawMaterialForm.COARSE_SCRAP().id && (b += f / e)
        }
        return b / a
    }
}

function ScrapBasket() {
    this.TOTAL_BASKET_CAPACITY = 40, this.contentsArray = new Array, this.unusableVolume = 0, this.nextBasket, this.setNextBasket = function (a) {
        nextBasket = a
    }, this.getContentsVolume = function () {
        for (var a = 0, b = 0; b < this.contentsArray.length; b++) a += this.contentsArray[b].getMass() / this.contentsArray[b].rawMaterial.bulkDensity;
        return a
    }, this.getContentsMass = function () {
        for (var a = 0, b = 0; b < this.contentsArray.length; b++) a += this.contentsArray[b].mass;
        return a
    }, this.getContentsCost = function () {
        for (var a = 0, b = 0; b < this.contentsArray.length; b++) a += this.contentsArray[b].mass * this.contentsArray[b].rawMaterial.unitCost;
        return a
    }, this.setBin = function (a, b) {
        b > 0 && (confirmAddition(b), targetMovie_mc.addNewLayer(), scrapLayer_mc = targetMovie_mc.scrapLayer_mc), currentMaterial = a;
        var c = currentMaterial.getForm().getID();
        scrapLayer_mc.gotoAndStop(c)
    }, this.confirmAddition = function (a, b) {
        this.contentsArray.push(new RawMaterialAmount(a, b))
    }, this.checkOverfill = function (a) {
        overfill = a + unusableVolume > this.TOTAL_BASKET_CAPACITY, overflow_mc._visible = overfill
    }, this.getOverfill = function () {
        return overfill
    }, this.setUnusableVolume = function (a) {
        unusableVolume = a
    }, this.getInstanceName = function () {
        return targetMovie_mc
    }
}

PhysicalConstants.SPEED_OF_LIGHT = function () {
    return 299792459
}, PhysicalConstants.ELEMENTARY_CHARGE = function () {
    return 1.602192e-19
}, PhysicalConstants.ELECTRON_REST_MASS = function () {
    return 9.1095e-31
}, PhysicalConstants.PROTON_REST_MASS = function () {
    return 1.6726e-27
}, PhysicalConstants.NEUTRON_REST_MASS = function () {
    return 1.6749e-27
}, PhysicalConstants.ATOMIC_MASS_UNIT = function () {
    return 1.6606e-27
}, PhysicalConstants.PERMITTIVITY_FREE_SPACE = function () {
    return 8.8541878e-12
}, PhysicalConstants.PLANCK = function () {
    return 6.6262e34
}, PhysicalConstants.GRAV_CONSTANT = function () {
    return 6.6733e-11
}, PhysicalConstants.GRAV_ACCEL = function () {
    return 9.80665
}, PhysicalConstants.AVOGADRO = function () {
    return 6.022174e23
}, PhysicalConstants.GAS_CONSTANT = function () {
    return 8.31433
}, PhysicalConstants.BOLTZMANN = function () {
    return 1.380626
}, PhysicalConstants.STEFAN_BOLTZMANN = function () {
    return 5.6703e-8
}, SteelData.STEEL_DENSITY_SOLID = function () {
    return 7900
}, SteelData.STEEL_DENSITY_LIQUID = function () {
    return 7400
}, SteelData.FE_MELTING_TEMP = function () {
    return 1537
}, SteelData.SLAG_DENSITY_LIQUID = function () {
    return 2500
}, SteelData.SLAG_DENSITY_SOLID = function () {
    return 3500
}, State.SOLID = function () {
    return 0
}, State.LIQUID = function () {
    return 1
}, State.GAS = function () {
    return 2
};
var Elements = {
    array: [], getElementArray: function () {
        return this.array
    }, getIndex: function (a) {
        return this[a.toUpperCase()].index
    }, getElementArrayCount: function () {
        return this.array.length
    }, getElementByIndex: function (a) {
        return this.array[a]
    }, getElementBySymbol: function (a) {
        return this[a.toUpperCase()]
    }
};
Element.prototype = {
    getMolecularMass: function () {
        return this.atomicMass
    }, getAtomicMass: function () {
        return this.atomicMass
    }, getRecoveryRate: function () {
        return this.recoveryRate
    }, getLiquidusCoefficient: function () {
        return this.liquidusCoefficient
    }, getElementColor: function () {
        return this.elementColor
    }, getOxide: function () {
        return this.oxide
    }, getIsReducable: function () {
        return this.reducable
    }, setThermodynamicData: function (a, b, c, d, e) {
        var f = this.getMolecularMass(), g = 1e3 / f;
        this.thermoData[a] = new ThermodynamicData(g * b, g * c, g * d, g * e)
    }, getThermodynamicData: function (a) {
        var b = this.thermoData[a];
        return void 0 == b && (b = new ThermodynamicData(0, 0, 0, 0)), b
    }
}, new Element("Fe", 0, 55.847, 100, 0, 0, "FEO", !1), Elements.FE.setThermodynamicData(State.SOLID(), 0, 0, .02345, 18.018), Elements.FE.setThermodynamicData(State.LIQUID(), 12400, 34.76, 1.31e-13, 46.024), new Element("C", 1, 12.0107, 95, 0, 0, "CO", !0), Elements.C.setThermodynamicData(State.SOLID(), 0, 5.74, 0, 8.43), new Element("Si", 2, 28.0855, 98, -14, 112639742, "SIO2", !0), Elements.SI.setThermodynamicData(State.SOLID(), 0, 18.81, .00547, 20.517), Elements.SI.setThermodynamicData(State.LIQUID(), 48470, 44.46, 1.46e-14, 27.196), new Element("Mn", 3, 54.938, 95, -4, 39372, "MNO", !0), Elements.MN.setThermodynamicData(State.SOLID(), 0, 32.01, .00418, 33.518), Elements.MN.setThermodynamicData(State.LIQUID(), 16290, 43.49, 1.7e-13, 46.024), new Element("P", 4, 30.974, 98, -30, 102, "", !1), Elements.P.setThermodynamicData(State.SOLID(), 0, 41.09, .0204, 17.77), Elements.P.setThermodynamicData(State.LIQUID(), 615, 43.01, 8.69e-15, 26.326), new Element("S", 5, 32.066, 80, -45, 16776960, "", !0), Elements.S.setThermodynamicData(State.SOLID(), 0, 32.054, .0217, 16.259), Elements.S.setThermodynamicData(State.LIQUID(), 1854, 36.85, -.0229, 49.567), new Element("Cr", 6, 51.966, 99, -1.5, 767357, "CR2O3", !1), Elements.CR.setThermodynamicData(State.SOLID(), 0, 23.62, .0141, 19.482), Elements.CR.setThermodynamicData(State.LIQUID(), 26070, 36.2, -3.73e-17, 39.33), new Element("Mo", 7, 95.94, 100, -5, 12616385, "MOO3", !1), Elements.MO.setThermodynamicData(State.SOLID(), 0, 28.6, .00641, 22.267), Elements.MO.setThermodynamicData(State.LIQUID(), 41570, 43.12, 6.79e-14, 37.656), new Element("Ni", 8, 58.6934, 100, -3.5, 3963780, "", !1), Elements.NI.setThermodynamicData(State.SOLID(), 0, 29.87, .0277, 17.463), Elements.NI.setThermodynamicData(State.LIQUID(), 17480, 41.49, 2e-16, 38.911), new Element("Al", 9, 26.9815, 90, -2.5, 10658497, "AL2O3", !0), Elements.AL.setThermodynamicData(State.SOLID(), 0, 28.3, .0127, 20.507), Elements.AL.setThermodynamicData(State.LIQUID(), 10562, 39.55, -1.41e-13, 31.751), new Element("Ar", 10, 39.948, 100, 0, 0, "", !1), Elements.AR.setThermodynamicData(State.GAS(), 0, 0, 0, 154.737), new Element("As", 11, 74.92, 100, 0, 12040076, "", !1), new Element("B", 12, 10.811, 100, 0, 10053222, "", !1), Elements.B.setThermodynamicData(State.SOLID(), 0, 5.9, .00899, 14.541), Elements.B.setThermodynamicData(State.LIQUID(), 48930, 26.54, -7.1e-13, 31.75), new Element("Ca", 13, 40.078, 15, 0, 2461477, "CAO", !1), Elements.CA.setThermodynamicData(State.SOLID(), 0, 41.59, .0201, 18.708), Elements.CA.setThermodynamicData(State.LIQUID(), 7788, 45.51, -1e-14, 35), new Element("Ce", 14, 140.116, 100, 0, 0, "", !1), new Element("Co", 15, 58.933, 100, 0, 0, "", !1), Elements.CO.setThermodynamicData(State.SOLID(), 0, 30.07, .0324, 5.71), Elements.CO.setThermodynamicData(State.LIQUID(), 18e3, 41, -202e-7, 40.554), new Element("Cu", 16, 63.546, 100, 0, 15113576, "", !1), Elements.CU.setThermodynamicData(State.SOLID(), 0, 33.15, .00699, 22.208), Elements.CU.setThermodynamicData(State.LIQUID(), 11860, 41.62, 3.25e-9, 32.844), new Element("H", 17, 1.0079, 100, 0, 16777215, "", !0), new Element("Mg", 18, 24.305, 100, 0, 0, "MGO", !1), Elements.MG.setThermodynamicData(State.SOLID(), 0, 32.67, .0112, 21.576), Elements.MG.setThermodynamicData(State.LIQUID(), 4790, 34.46, 4.34e-14, 34.309), new Element("N", 19, 14.00674, 40, 0, 65280, "", !0), new Element("Nb", 20, 92.906, 100, 0, 10470560, "", !1), Elements.NB.setThermodynamicData(State.SOLID(), 0, 36.47, .00648, 21.548), Elements.NB.setThermodynamicData(State.LIQUID(), 29650, 47.3, 3.36e-10, 33.472), new Element("O", 21, 15.9994, 100, 0, 16711680, "", !0), new Element("Pb", 22, 207.2, 100, 0, 0, "PBO", !1), Elements.PB.setThermodynamicData(State.SOLID(), 0, 64.8, .0086, 24.263), Elements.PB.setThermodynamicData(State.LIQUID(), 4283, 71.71, -802e-6, 30.29), new Element("Sn", 23, 118.71, 100, 0, 14474375, "", !1), new Element("Ti", 24, 47.867, 90, 0, 16711935, "TIO2", !1), Elements.TI.setThermodynamicData(State.SOLID(), 0, 30.72, .00915, 23.089), Elements.TI.setThermodynamicData(State.LIQUID(), 13650, 39.18, 3.03e-14, 47.237), new Element("V", 25, 50.9415, 100, -4, 13008277, "V2O5", !1), Elements.V.setThermodynamicData(State.SOLID(), 0, 28.93, .0095, 21.263), Elements.V.setThermodynamicData(State.LIQUID(), 17290, 36.13, -7.09e-14, 46.204), new Element("W", 26, 183.84, 100, 0, 0, "", !1), new Element("Zn", 27, 65.39, 100, 0, 0, "", !1), Elements.ZN.setThermodynamicData(State.SOLID(), 0, 41.63, .0111, 21.916), Elements.ZN.setThermodynamicData(State.LIQUID(), 6519, 50.79, -2.52e-13, 31.38);
var Compounds = {
    array: [], getCompoundArray: function () {
        return this.array
    }, getIndex: function (a) {
        return this[a.toUpperCase()].index
    }, getCompoundArrayCount: function () {
        return this.array.length
    }, getCompoundByIndex: function (a) {
        return this.array[a]
    }, getCompoundBySymbol: function (a) {
        return this[a.toUpperCase()]
    }
};
Compound.prototype = {
    getMolecularMass: function () {
        return this.molecularMass
    }, getNoCations: function () {
        return this.noCations
    }, getNoAnions: function () {
        return this.noAnions
    }, setThermodynamicData: function (a, b, c, d, e) {
        var f = this.getMolecularMass(), g = 1e3 / f;
        this.thermoData[a] = new ThermodynamicData(g * b, g * c, g * d, g * e)
    }, getThermodynamicData: function (a) {
        var b = this.thermoData[a];
        return void 0 == b && (b = new ThermodynamicData(0, 0, 0, 0)), b
    }
}, new Compound("Al2O3", 0, 101.9612, 2, 3), Compounds.AL2O3.setThermodynamicData(State.SOLID(), -1676e3, 50.92, .0199, 99.452), Compounds.AL2O3.setThermodynamicData(State.LIQUID(), -1621e3, 67.24, -3.71e-13, 192.464), new Compound("CaF2", 1, 78.0748, 1, 2), Compounds.CAF2.setThermodynamicData(State.SOLID(), -1226e3, 68.63, .0301, 60.615), Compounds.CAF2.setThermodynamicData(State.LIQUID(), -1186e3, 92.6, 4.61e-14, 99.914), new Compound("CaO", 2, 56.0774, 1, 1), Compounds.CAO.setThermodynamicData(State.SOLID(), -635100, 38.1, .00533, 47.403), Compounds.CAO.setThermodynamicData(State.LIQUID(), -557300, 62.31, -5.19e-13, 62.76), new Compound("CO", 3, 28.0101, 1, 1), Compounds.CO.setThermodynamicData(State.GAS, -110500, 197.551, .00613, 26.909), new Compound("Cr2O3", 4, 151.9302, 2, 3), Compounds.CR2O3.setThermodynamicData(State.SOLID(), -1135e3, 80.65, .0129, 112.186), Compounds.CR2O3.setThermodynamicData(State.LIQUID(), -1018e3, 125.57, 1.75e-8, 156.9), new Compound("FeO", 5, 71.8464, 1, 1), Compounds.FEO.setThermodynamicData(State.SOLID(), -272e3, 60.75, .0102, 48.53), Compounds.FEO.setThermodynamicData(State.LIQUID(), -249500, 75.4, -2.48e-15, 68.199), new Compound("H2", 6, 2.0158, 0, 0), Compounds.H2.setThermodynamicData(State.GAS, 0, 130.571, .00274, 27.735), Compounds.H2.setThermodynamicData(State.GAS, 0, 130.571, .00207, 30.471), new Compound("H2O", 7, 18.0152, 2, 1), Compounds.H2O.setThermodynamicData(State.LIQUID(), -285800, 69.95, .0381, 62.371), Compounds.H2O.setThermodynamicData(State.GAS, -241800, 188.726, .0118, 29.336), new Compound("MgO", 8, 40.3044, 1, 1), Compounds.MGO.setThermodynamicData(State.SOLID(), -601200, 26.95, .00535, 44.444), Compounds.MGO.setThermodynamicData(State.LIQUID(), -532600, 48.34, -3.55e-17, 66.944), new Compound("MnO", 9, 70.9374, 1, 1), Compounds.MNO.setThermodynamicData(State.SOLID(), 388900, 76.316, .0095, 44.131), new Compound("MoO3", 10, 143.9382, 1, 3), Compounds.MOO3.setThermodynamicData(State.SOLID(), -745200, 77.78, .0441, 64.944), Compounds.MOO3.setThermodynamicData(State.GAS, -346400, 283.89, 185e-6, 82.054), new Compound("N2", 11, 28.01348, 0, 0), Compounds.N2.setThermodynamicData(State.GAS, 0, 191.5, .00127, 32.106), new Compound("O2", 12, 31.9988, 0, 0), Compounds.O2.setThermodynamicData(State.GAS, 0, 205.043, .00208, 32.771), new Compound("PbO", 13, 223.1994, 1, 1), Compounds.PBO.setThermodynamicData(State.SOLID(), -219400, 0, .0164, 44.428), Compounds.PBO.setThermodynamicData(State.LIQUID(), -202200, 73.38, 1.75e-8, 65), new Compound("SiO2", 14, 60.0843, 1, 2), Compounds.SIO2.setThermodynamicData(State.SOLID(), -905500, 0, .0152, 49.834), Compounds.SIO2.setThermodynamicData(State.LIQUID(), -902700, 47.92, -1.23e-9, 85.772), new Compound("TiO2", 15, 79.8658, 1, 2), Compounds.TIO2.setThermodynamicData(State.SOLID(), -938700, 50.62, .00785, 64.958), Compounds.TIO2.setThermodynamicData(State.LIQUID(), -305400, 260.14, .00203, 51.102), new Compound("V2O5", 16, 181.88, 2, 5), Compounds.V2O5.setThermodynamicData(State.SOLID(), -1551e3, 130.4, .067, 124.321), Compounds.V2O5.setThermodynamicData(State.LIQUID(), -1491e3, 191.96, 8.41e-14, 190.79), new Compound("P", 17, 30.974, 0, 0), new Compound("S", 18, 32.065, 0, 0), RawMaterialType.BASKET = function () {
    return new RawMaterialType(gt("c_Basket"))
}, RawMaterialType.MAJOR_ADDITION = function () {
    return new RawMaterialType(gt("eafMajorAddition"))
}, RawMaterialType.SLAG = function () {
    return new RawMaterialType(gt("Slag"))
}, RawMaterialForm.COARSE_SCRAP = function () {
    return new RawMaterialForm("COSC", gt("eafScrapForm01"), 1)
}, RawMaterialForm.PEBBLES = function (a) {
    return new RawMaterialForm("PEBB", gt("ss3AdditionTypePebbles"), 5)
}, RawMaterialForm.WIRE = function (a) {
    return new RawMaterialForm("WIRE", gt("ss3AdditionTypeWire"), 21)
}, RawMaterialForm.POWDER = function (a) {
    return new RawMaterialForm("POWD", gt("ss3AdditionTypePowder"), 1600)
}, RawMaterialForm.FINE_SCRAP = function (a) {
    return new RawMaterialForm("FINE", gt("eafScrapForm02"), 10)
}, RawMaterialForm.VERY_FINE_SCRAP = function (a) {
    return new RawMaterialForm("VFIN", gt("eafScrapForm03"), 20)
}, function (a) {
    a(document).ready(function () {
        clearLog = function () {
            EafLogModel.totalCost = 0, EafLogModel.consumablesCost = 0, EafLogModel.additionsCost = 0, EafLogModel.scrapCost = 0, EafLogModel.oxygenConsumption = 0, EafLogModel.carbonConsumption = 0, EafLogModel.furnaceModel = null, EafLogModel.output_txt = null, EafLogModel.finalSteelMass = void 0, EafLogModel.finalSteelComposition = void 0, EafLogModel.finalSlagMass = void 0, EafLogModel.finalSlagComposition = void 0, EafLogModel.timeLog_array = [], EafLogModel.steelCompLog_array = [], EafLogModel.slagCompLog_array = [], EafLogModel.steelTemp_array = [], EafLogModel.steelMass_array = [], EafLogModel.solidsMass_array = [], EafLogModel.energyBalance_array = []
        }, addCost = function (a, b) {
            switch (a) {
                case"carbon":
                    break;
                case"oxygen":
                    break;
                case"electrode":
                    EafLogModel.consumablesCost += EafLogModel.ELECTRODE_COST;
                    break;
                case"analysis":
                    EafLogModel.consumablesCost += EafLogModel.ANALYSIS_COST;
                    break;
                case"addition":
                case"additions":
                    EafLogModel.additionsCost += b;
                    break;
                case"scrap":
                    EafLogModel.scrapCost += b
            }
        }, getTotalCost = function () {
            return this.getConsumablesCost() + EafLogModel.additionsCost + EafLogModel.scrapCost + this.getPowerCost()
        }, getPowerCost = function () {
            var a = Furnace.getTotalAddedElectricEnergy() / 36e5;
            return a * EafLogModel.COST_PER_KWH
        }, getConsumablesCost = function () {
            var a = EafLogModel.consumablesCost + EafLogModel.oxygenConsumption * EafLogModel.OXYGEN_COST + EafLogModel.carbonConsumption * EafLogModel.CARBON_COST;
            return a
        }, getCostBreakdown = function () {
            return Math.floor(Timer.Model.totalSeconds / 60) + ";" + EafLogModel.scrapCost + ";" + EafLogModel.additionsCost + ";" + this.getPowerCost().toFixed(2) + ";" + this.getConsumablesCost().toFixed(2)
        }, getAuditData = function () {
            EafLogModel.auditData.eventLog = [];
            for (var a = 0; a < EafLogModel.msg_array_eng.length; a++) EafLogModel.auditData.eventLog.push(encodeURI(EafLogModel.msg_array_eng[a]));
            return EafLogModel.auditData.loggedValues = {
                time: EafLogModel.timeLog_array,
                steelComposition: EafLogModel.steelCompLog_array,
                slagComposition: EafLogModel.slagCompLog_array,
                steelTemperature: EafLogModel.steelTemp_array,
                steelMass: EafLogModel.steelMass_array,
                solidsMass: EafLogModel.solidsMass_array,
                energyBalance: EafLogModel.energyBalance_array
            }, EafLogModel.auditData.browser = sBrowser, EafLogModel.auditData
        }, storeLoggedValues = function (a, b, c, d, e, f, g, h, i) {
            EafLogModel.timeLog_array.push(a), EafLogModel.steelCompLog_array.push(d), EafLogModel.slagCompLog_array.push(e), Eaf.Model.graphs.steelCompositionGraph.get("Si").addPoint(100 * d[Elements.SI.index], !1), Eaf.Model.graphs.steelCompositionGraph.get("C").addPoint(100 * d[Elements.C.index], !1), Eaf.Model.graphs.steelCompositionGraph.get("Cr").addPoint(100 * d[Elements.CR.index], !1), Eaf.Model.graphs.steelCompositionGraph.get("Al").addPoint(100 * d[Elements.AL.index], !1), Eaf.Model.graphs.steelCompositionGraph.get("S").addPoint(100 * d[Elements.S.index], !1), Eaf.Model.graphs.steelCompositionGraph.get("P").addPoint(100 * d[Elements.P.index], !1), Eaf.Model.graphs.steelCompositionGraph.redraw(), Eaf.Model.graphs.slagCompositionGraph.get("SiO2").addPoint(100 * e[Compounds.SIO2.index], !1), Eaf.Model.graphs.slagCompositionGraph.get("FeO").addPoint(100 * e[Compounds.FEO.index], !1), Eaf.Model.graphs.slagCompositionGraph.get("CaO").addPoint(100 * e[Compounds.CAO.index], !1), Eaf.Model.graphs.slagCompositionGraph.get("MgO").addPoint(100 * e[Compounds.MGO.index], !1), Eaf.Model.graphs.slagCompositionGraph.get("Basicity").addPoint(e[Compounds.CAO.index] / e[Compounds.SIO2.index] || 0, !1), Eaf.Model.graphs.slagCompositionGraph.redraw(), Eaf.Model.graphs.powerTimeGraph.series[0].addPoint(b), Eaf.Model.graphs.powerTimeGraph.series[1].addPoint(c), a > 0 && a % 5 === 0 && !Furnace.Model.tapping && Challenge.progress({costBreakdown: this.getCostBreakdown()}), EafLogModel.steelTemp_array.push(f), EafLogModel.steelMass_array.push(g), EafLogModel.solidsMass_array.push(h), EafLogModel.energyBalance_array.push(i)
        }, addConsumedCarbon = function (a) {
            EafLogModel.carbonConsumption += a
        }, addConsumedOxygen = function (a) {
            EafLogModel.oxygenConsumption += a
        }, storeMsg = function (a, b, c) {
            EafLog.Model.msg_array.push([a, b]), EafLog.Model.msg_array_eng.push([a, c]), document.getElementById("events_log_body").innerHTML += a + " :  " + b + "<br>"
        }, storeMsgAudit = function (a, b) {
            EafLog.Model.msg_array_eng.push([a, b])
        }, EafLogModel = M({
            COST_PER_KWH: .57,
            ELECTRODE_COST: 200,
            ANALYSIS_COST: 40,
            OXYGEN_COST: .1,
            CARBON_COST: .28,
            consumablesCost: 0,
            additionsCost: 0,
            scrapCost: 0,
            oxygenConsumption: 0,
            carbonConsumption: 0,
            finalSteelMass: 0,
            finalSteelComposition: null,
            msg_array: [],
            msg_array_eng: [],
            auditData: {rawMaterials: {}, additions: {}},
            timeLog_array: [],
            steelCompLog_array: [],
            slagCompLog_array: [],
            furnaceModel: null,
            output_txt: null,
            steelTemp_array: [],
            steelMass_array: [],
            solidsMass_array: [],
            energyBalance_array: [],
            init: function () {
            }
        }), EafLog = {
            clearLog: clearLog,
            addCost: addCost,
            getTotalCost: getTotalCost,
            getPowerCost: getPowerCost,
            getCostBreakdown: getCostBreakdown,
            getConsumablesCost: getConsumablesCost,
            storeLoggedValues: storeLoggedValues,
            addConsumedCarbon: addConsumedCarbon,
            addConsumedOxygen: addConsumedOxygen,
            getAuditData: getAuditData,
            storeMsg: storeMsg,
            storeMsgAudit: storeMsgAudit,
            Model: EafLogModel
        }, window.EafLog = EafLog
    })
}(jQuery), function (a) {
    var b, c = .125, d = 38, e = -26, f = -92, g = -111, h = 36, i = -19, j = -94, k = -104, l = g, m = f, n = k, o = j,
        p = 0, q = function (a) {
            (0 != z.Model.oxygenFlow || 0 != z.Model.carbonFlow) && !Furnace.isSolidPresent() && Furnace.Model.steel.getMass() > 0 && (EafLog.addConsumedCarbon(z.Model.carbonFlow * a / 60), EafLog.addConsumedOxygen(z.Model.oxygenFlow * a / 60))
        }, r = function () {
            return 1 === p
        }, s = function () {
            var a = Furnace.Model.msBottom + 52 + Furnace.Model.slagHeight, b = -26 - l;
            return a - b
        }, t = function () {
            Furnace.isFurnaceUpright() && Furnace.isSlagDoorOpen() && this.Model.set("velocity", c / (1 / Timer.Model.simRate)), b = requestAnimationFrame(x)
        }, u = function () {
            Furnace.isFurnaceUpright() && Furnace.isSlagDoorOpen() && this.Model.set({
                carbonFlow: 0,
                oxygenFlow: 0,
                velocity: -c / (1 / Timer.Model.simRate)
            }), b = requestAnimationFrame(x)
        }, v = function () {
            return m == f
        }, w = function () {
            return m == d || r()
        }, x = function () {
            var c = !1, q = s();
            q >= 0 && z.Model.velocity > 0 ? c = !0 : (m += z.Model.velocity, o += z.Model.velocity), z.Model.velocity < 0 && f >= m ? (c = !0, m = f, o = j) : z.Model.velocity > 0 && m >= d && (c = !0, m = d, o = h), l = g + (m - f) * ((e - g) / (d - f)), n = k + (o - j) * ((i - k) / (h - j)), a("#o_lance").css({
                left: m,
                top: l
            }), a("#c_lance").css({
                left: o,
                top: n
            }), c ? (z.Model.velocity > 0 && (p = 1), cancelAnimationFrame(b), z.Model.set("velocity", 0)) : (p = 0, b = requestAnimationFrame(x))
        }, y = M({
            velocity: 0, carbonFlow: 0, oxygenFlow: 0, init: function () {
            }
        }), z = {insertLance: t, retractLance: u, getIsLanceRetracted: v, getIsLanceInserted: w, Model: y};
    window.Lance = z, a(document).ready(function () {
        var b = a(".spinner.flow_amount_control"), d = a("#lance_flow");
        a(".lance_control").prop("disabled", !0).parent().addClass("disabled"), a(".flow_control").prop("disabled", !0).parent().addClass("disabled"), refreshLanceFlow = function (c) {
            return a(b[0]).prop("disabled") ? void c.preventDefault() : void z.Model.set(a("#flow_control").prop("checked") ? {
                carbonFlow: parseInt(a("#carbon_flow").val()),
                oxygenFlow: parseInt(a("#oxygen_flow").val())
            } : {carbonFlow: 0, oxygenFlow: 0})
        }, a(".spinner.flow_amount_control").on("spnrspin", function (a) {
            refreshLanceFlow(a)
        }).on("spnrstop", function (a) {
            refreshLanceFlow(a)
        }), a("#flow_control").click(function (a) {
            refreshLanceFlow(a)
        }), a(".lance_control").click(function (a) {
            z.getIsLanceRetracted() ? (z.insertLance(), (Furnace.isSolidPresent() || Furnace.Model.steel.getMass() <= 0) && EafView.displayUserMessage(gt("carbonAndOxygenInjectionTitle"), gt("carbonAndOxygenInjectionDesc"), !0)) : z.getIsLanceInserted() ? z.retractLance() : z.Model.velocity = -1 * z.Model.velocity
        }), Timer.Model.on("change", function (a, b) {
            b.seconds && q(1), b.simRate && (z.Model.velocity > 0 ? z.Model.velocity = +c / (1 / Timer.Model.simRate) : z.Model.velocity < 0 && (z.Model.velocity = -c / (1 / Timer.Model.simRate)))
        }), z.Model.on("change", function (c, e) {
            e.velocity && (e.velocity.value < 0 && 0 == e.velocity.oldValue ? (a("#flow_control").prop("checked") && a("#flow_control").trigger("click"), a(".flow_control").prop("disabled", !0).parent().addClass("disabled"), b.spnr("disable")) : z.getIsLanceInserted() && (a(".flow_control").prop("disabled", !1).parent().removeClass("disabled"), b.spnr("enable")));
            var f = !1;
            if (e.carbonFlow && (e.carbonFlow.value < 0 && (e.carbonFlow.value = 0, z.Model.carbonFlow = e.carbonFlow.value), e.carbonFlow.value > 150 && (e.carbonFlow.value = 150, z.Model.carbonFlow = e.carbonFlow.value), e.carbonFlow.value % 10 != 0 && (e.carbonFlow.value = 10 * Math.round(Math.round(e.carbonFlow.value) / 10), z.Model.carbonFlow = e.carbonFlow.value), EafLog.storeMsg(Timer.getTime(), gt("eafChangedCarbonFlow") + " (" + e.carbonFlow.value + " kg / min)", gt_eng("eafChangedCarbonFlow") + " (" + e.carbonFlow.value + " kg / min)"), f = !0), e.oxygenFlow && (e.oxygenFlow.value < 0 && (e.oxygenFlow.value = 0, z.Model.oxygenFlow = e.oxygenFlow.value), e.oxygenFlow.value > 150 && (e.oxygenFlow.value = 150, z.Model.oxygenFlow = e.oxygenFlow.value), e.oxygenFlow.value % 10 != 0 && (e.oxygenFlow.value = 10 * Math.round(Math.round(e.oxygenFlow.value) / 10), z.Model.oxygenFlow = e.oxygenFlow.value), EafLog.storeMsg(Timer.getTime(), gt("eafChangedOxygenFlow") + " (" + e.oxygenFlow.value + " Nm\xb3 / min)", gt_eng("eafChangedOxygenFlow") + " (" + e.oxygenFlow.value + " Nm\xb3 / min)"), f = !0), f) {
                var g = (z.Model.oxygenFlow + z.Model.carbonFlow) / 2;
                if (g > 0) {
                    var h = m + 160, i = Math.min(20 * g / 150 + 40, 215 - h);
                    d.css({width: i, top: l + 105 - i / 10, left: h})
                } else d.css("width", 0)
            }
        }), Furnace.Model.on("change", function (b, c) {
            c.slagDoorVelocity && (0 != c.slagDoorVelocity.value ? a(".lance_control").prop("disabled", !0).parent().addClass("disabled") : Furnace.isSlagDoorOpen() && a(".lance_control").prop("disabled", !1).parent().removeClass("disabled"))
        })
    })
}(jQuery),
    function (a) {
        var b, c, d, e = 5e3, f = 3e4, g = .15, h = 1.2, i = 2.5, j = 338, k = 393, l = 368, m = 293, n = 250, o = 383,
            p = 353, q = m, r = !1, s = .1, t = .5, u = 1, v = 1.5, w = 2e3, x = 1e4, y = 1e4, z = 100, A = 2e4,
            B = 5e3, C = 1e3, D = 1 / 32, E = 95, F = 144, G = E, H = 0, I = 11, J = .5, K = 0, L = 0, N = .2, O = 0,
            P = 18e4, Q = [], R = !1, S = 0, T = 0, U = 0, V = 0, W = 0, X = 10, Y = 4, Z = .05, $ = 0, _ = 1.6, aa = 0,
            ba = 0, ca = 0, da = 0, ea = 0, fa = 0, ga = 0, ha = 0, ia = 0, ja = 0, ka = 0, la = 0, ma = 0, na = 0,
            oa = 0, pa = "none", qa = 75, ra = 90, sa = 105, ta = 2073, ua = 31, va = 56, wa = 56, xa = 0, ya = 0,
            za = 0;
        update = function (c) {
            if (xa = Furnace.Model.gas.getComposition()[3] * Furnace.Model.gas.getMass() * (44.01 / 28.01), ya = Furnace.getTotalAddedElectricEnergy() / 36e5 * .476, za = xa + ya, a(".power .value").html(Math.round(za)), Furnace.Model.steel.getTemperature() > ta && Re.powerOff(), 0 != L && (Re.powerOff(), rotateFurnace(c)), K == I && (0 == Furnace.Model.tapping ? (EafLog.storeMsg(Timer.getTime(), gt("ss3dStartTap"), gt_eng("ss3dStartTap")), EafLog.Model.finalSteelMass = Furnace.Model.steel.mass, EafLog.Model.finalSteelComposition = Furnace.Model.steel.getComposition().concat(), EafLog.Model.finalSlagMass = Furnace.Model.slag.mass, EafLog.Model.finalSlagComposition = Furnace.Model.slag.getComposition().concat(), Furnace.Model.tapping = !0, d = requestAnimationFrame(pourSteel)) : 1 == Furnace.Model.tapping && getSteelHeight() <= N && (Timer.pause(), EafLog.storeMsg(Timer.getTime(), gt("ss3dTapComp"), gt_eng("ss3dTapComp")), cancelAnimationFrame(d), Eaf.displayFinalResults()), O += getTapFlow(c)), !Furnace.Model.tapping) {
                handleModelFactors(c), isSolidPresent() ? (V > 0 && meltDown(V), a(".tap_steel.button").prop("disabled", !0)) : !isSolidPresent() && Furnace.Model.steel.getMass() > 0 && (a(".tap_steel.button").prop("disabled", !1), chemicalReactions(c)), (Furnace.Model.steel.getMass() > 0 || Furnace.Model.slag.get("mass") > 0) && heating(V), Furnace.Model.analysisPending && Timer.Model.totalSeconds >= b && (Eaf.executeSteelCompositionAnalysis(Q, !1), EafLog.storeMsg(Timer.getTime(), gt("analysis_received"), gt_eng("analysis_received")), Furnace.Model.analysisPending = !1, a(".take-sample").prop("disabled", !1), EafView.displayAnalysisResults());
                var e = _ * c;
                if ($ > 0) if (aa == $) aa = 0, $ = 0; else if ($ > aa) {
                    var f = aa;
                    aa = Math.min($, aa + e), e = aa - f, delete f
                }
                updateWCP()
            }
        }, addBasket = function (a, b) {
            var c = Lance.Model.oxygenFlow, d = Lance.Model.carbonFlow;
            (c > 0 || d > 0) && EafView.displayUserMessage(gt("carbonAndOxygenInjectionTitle"), gt("carbonAndOxygenInjectionDesc"), !0), Furnace.Model.solid.addSolids(a, b)
        }, meltDown = function (a) {
            var b = Furnace.Model.solid.getTemperature(),
                c = (Furnace.Model.slag.getTemperature(), Furnace.Model.steel.getComposition().concat());
            S = 273 + SteelData.FE_MELTING_TEMP() - 78 * c[Elements.C.index] * 100, S -= 7.6 * c[Elements.SI.index] * 100, S -= 4.9 * c[Elements.MN.index] * 100, S -= 34 * c[Elements.P.index] * 100, S -= 30 * c[Elements.S.index] * 100, S -= 5 * c[Elements.CU.index] * 100, S -= 3.1 * c[Elements.NI.index] * 100, S -= 1.3 * c[Elements.CR.index] * 100, S > 1973 || void 0 == S || isNaN(S), Furnace.Model.steel.getMass() > 0;
            var d = 0, e = 0, f = Furnace.Model.solid.solids_array[0].getRawMaterial(),
                g = 1e3 * Furnace.Model.solid.solids_array[0].getMass(), h = f.getMetalFraction(), i = g * h,
                j = g * (1 - h), k = new Array;
            k = f.getMetalComposition().concat();
            var l = new Array;
            l = f.getOxideComposition().concat(), b > S && (b = S), T += a * b / S;
            var m = a - a * b / S;
            ca += Math.max(m, 0), da += Math.max(T, 0);
            var n = 0, o = k.length;
            for (n; o > n; n++) {
                var p = k[n] * i;
                if (p > 0) {
                    var q = Elements.getElementByIndex(n), r = q.getThermodynamicData(State.SOLID()), s = r.getCp(b);
                    r = q.getThermodynamicData(State.LIQUID());
                    var t = r.getCp(S), u = t * S - s * b;
                    d += p * u
                }
            }
            var n = 0, o = l.length;
            for (n; o > n; n++) {
                var v = l[n] * j;
                if (v > 0) {
                    var q = Compounds.getCompoundByIndex(n), r = q.getThermodynamicData(State.SOLID()), s = r.getCp(b);
                    r = q.getThermodynamicData(State.LIQUID());
                    var t = r.getCp(S), u = t * S - s * b;
                    d += v * u
                }
            }
            if (T >= d) e = g, T -= d, addEnergy(-d, "melting all"), ha += d; else {
                var w = Furnace.Model.solid.getHeatingEnergyPerKelvin(), x = m / w;
                Furnace.Model.solid.changeTemperature(x), e = g * T / d, ha += T, ia += m, T = 0, addEnergy(-a, "melting")
            }
            Furnace.Model.solid.reduceMass(e / 1e3), Furnace.Model.steel.addMaterial(k, e * h), Furnace.Model.slag.addMaterial(l, e * (1 - h));
            var n = 0, o = k.length, y = new Array, z = new Array, A = new Array, B = 0;
            for (n; o > n; n++) {
                var p = k[n] * e * h, C = Elements.getElementByIndex(n), D = C.getRecoveryRate() / 100;
                if (p > 0 && 1 > D) {
                    y[n] = -(1 - D) * p / C.getMolecularMass();
                    var E = C.getOxide();
                    if (E) {
                        var F = Compounds.getIndex(E), G = Compounds.getCompoundByIndex(F).getMolecularMass();
                        z[F] = 0, "CO" != E ? z[F] = -y[n] / Compounds.getCompoundBySymbol(E).getNoCations() : A[F] = -y[n] / Compounds.getCompoundBySymbol(E).getNoCations();
                        var H = Compounds.getCompoundByIndex(F), r = H.getThermodynamicData(State.SOLID()),
                            I = 298 * r.getCp(298), r = H.getThermodynamicData(State.LIQUID()), J = r.getCp(S) * S,
                            K = (-r.getDHf() + I - J) * z[F] * G;
                        B += K
                    }
                }
            }
            Furnace.Model.steel.adjustComposition(y, "melting oxidation"), Furnace.Model.slag.adjustComposition(z, "melting oxidation"), Furnace.Model.gas.adjustComposition(A, "melting oxidation"), addEnergy(-B, "melting oxidation"), 0 == Furnace.Model.solid.solids_array[0].getMass() && Furnace.Model.solid.solids_array.shift();
            var L = 1e3 * Furnace.Model.solid.getTotalMass(), M = Furnace.Model.steel.getMass(), N = L / M, O = .2;
            N > O && (Furnace.Model.steel.setTemperature(S), Furnace.Model.slag.setTemperature(S))
        }, handleModelFactors = function (a) {
            R = determineFoamingSlag(), q = calcCoolingWaterTemp(a), Furnace.Model.steel.getMass() > C && (heatLosses = calcHeatLosses(a), U = heatLosses.total, ka += heatLosses.radiation, la += heatLosses.conduction, ma += heatLosses.water, na += heatLosses.offgas, oa += heatLosses.total, addEnergy(-U, "heat loss"))
        }, chemicalReactions = function (a) {
            for (var b = [Elements.AL.index, Elements.C.index, Elements.CR.index, Elements.FE.index, Elements.O.index, Elements.P.index, Elements.S.index, Elements.SI.index], c = [[.043, .091, .025, 0, -1.68, 0, .048, .056], [.042, .19, -.024, 0, -.34, .057, .09, .106], [0, -.118, .024, 0, -.143, -.004, -.02, .023], [0, 0, 0, 0, 0, 0, 0, 0], [-1, -.44, -.041, 0, -.2, -.147, -.133, -.131], [.037, .24, .083, 0, -.288, .122, .042, .118], [.054, .113, -.011, 0, -.27, .043, -.028, .065], [.059, .24, .015, 0, -.23, .11, .057, .11]], d = Furnace.Model.steel.getComposition().concat(), e = Furnace.Model.slag.getComposition().concat(), f = Furnace.Model.gas.getComposition().concat(), g = 0, h = 0; h < b.length; h++) for (var i = 0; i < b.length; i++) g += -.5 * c[h][i] * d[b[h]] * d[b[i]] * 100 * 100;
            g = Math.max(0, g);
            var j = new Array(b.length), k = 0, l = b.length;
            for (k; l > k; k++) {
                Elements.getElementByIndex(b[k]);
                j[k] = g;
                var h = 0, m = b.length;
                for (h; m > h; h++) j[k] += 100 * c[k][h] * d[b[h]]
            }
            var n = [Compounds.AL2O3, Compounds.CR2O3, Compounds.FEO, Compounds.SIO2, Compounds.CAO, Compounds.MGO, Compounds.MNO, Compounds.MOO3, Compounds.PBO, Compounds.TIO2, Compounds.V2O5],
                o = new Array(n.length), p = 0, k = 0, l = n.length;
            for (k; l > k; k++) o[k] = e[n[k].index] / n[k].getMolecularMass(), p += o[k];
            if (0 == p) return void console.log("** Sum of moles in slag equals 0 **");
            var q = new Array(n.length), k = 0, l = n.length;
            for (k; l > k; k++) q[k] = o[k] / p;
            var r = new Object, s = 2 * q[0] + 2 * q[1] + q[2] + q[3];
            0 != s ? (r.AL2O3 = 2 * q[0] / s, r.CR2O3 = 2 * q[1] / s, r.FEO = q[2] / s, r.SIO2 = q[3] / s) : r.AL2O3 = r.CR2O3 = r.FEO = r.SIO2 = 0;
            var t = .61 * r.AL2O3 + .7 * r.FEO + .48 * r.SIO2, u = new Object;
            u.AL = 100 * d[Elements.AL.index] * Math.exp(j[0]), u.C = 100 * d[Elements.C.index] * Math.exp(j[1]), u.CR = 100 * d[Elements.CR.index] * Math.exp(j[2]), u.FE = 100 * d[Elements.FE.index] * Math.exp(g), u.SI = 100 * d[Elements.SI.index] * Math.exp(j[7]), u.AL2O3 = Math.pow(r.AL2O3, 2), u.CR2O3 = Math.pow(r.CR2O3, 2), u.FEO = r.FEO, u.SIO2 = r.SIO2;
            var v = Furnace.Model.steel.getTemperature(), w = PhysicalConstants.GAS_CONSTANT(), x = new Object;
            x.AL2O3 = Math.exp(-(-1243950 + 395.79 * v) / (w * v)), x.CO = Math.exp(-(-21790 - 39.75 * v) / (w * v)), x.CR2O3 = Math.exp(-(-823545 + 360.79 * v) / (w * v)), x.FEO = Math.exp(-(-121090 + 52.5 * v) / (w * v)), x.SIO2 = Math.exp(-(-571935 + 225.28 * v) / (w * v));
            var y = 1, z = 2, A = 75e-6, B = .001, C = 4, D = .1, E = y, F = A, G = 0, H = 0,
                I = a * Lance.Model.oxygenFlow / 60, J = a * Lance.Model.carbonFlow / 60;
            if (I > 0 && (E = y * z, F = A * C, G = -2 * I * 101.325 / (Furnace.Model.steel.getTemperature() * PhysicalConstants.GAS_CONSTANT())), Lance.Model.carbonFlow > 0) {
                tempElement = Elements.getElementBySymbol("C");
                var K = .8 + Math.max(Math.min(0, 4 * (e[Compounds.FEO.index] - .3)), -.8);
                G = +(K * J / tempElement.getAtomicMass()), H = (1 - K) * J / tempElement.getAtomicMass(), u.C = 100
            }
            var L = Furnace.Model.steel.getMass(), M = Furnace.Model.slag.getMass(),
                N = Math.min(L, a * B * X * SteelData.STEEL_DENSITY_LIQUID()),
                O = Math.min(M, a * F * X * SteelData.SLAG_DENSITY_LIQUID()), P = new Object;
            P.AL_AL2O3 = Math.pow(u.AL2O3 / (u.AL * u.AL * x.AL2O3), 1 / 3), P.C_CO = 1 / (u.C * x.CO), P.CR_CR2O3 = Math.pow(u.CR2O3 / (u.CR * u.CR * x.CR2O3), 1 / 3), P.FE_FEO = u.FEO / x.FEO, P.SI_SIO2 = Math.sqrt(u.SIO2 / (u.SI * x.SIO2));
            for (k in P) P[k] = Math.min(Math.max(P[k], 0), 100);
            var Q = new Object, R = 0, S = 0;
            for (k in P) {
                var T = String(k).substring(0, String(k).indexOf("_")),
                    U = String(k).substring(String(k).indexOf("_") + 1);
                "FE_FEO" != k && (Q[k] = D * (P[k] - P.FE_FEO), tempCompound = Compounds.getCompoundBySymbol(U), Q[k] < 0 ? (tempElement = Elements.getElementBySymbol(T), Q[k] = -Math.min(-Q[k], .5 * (N * d[tempElement.index] / tempElement.getAtomicMass())), R += -Q[k] * tempCompound.getNoAnions()) : ("SI_SIO2" == k && (Q[k] = 0), Q[k] = Math.min(Q[k], .5 * (O * e[tempCompound.index] / tempCompound.getMolecularMass())), S += Q[k] * tempCompound.getNoAnions()))
            }
            tempElement = Elements.getElementBySymbol("Fe"), tempCompound = Compounds.getCompoundBySymbol("FeO");
            var V = 0;
            if (R - S > 0) if (V = .5 * O * e[tempCompound.index] / tempCompound.getMolecularMass(), R - S > V) {
                for (k in Q) Q[k] < 0 && (Q[k] = Q[k] * (V + S) / R);
                Q.FE_FEO = V
            } else Q.FE_FEO = R - S; else if (V = .5 * N * d[tempElement.index] / tempElement.getAtomicMass(), S - R > V) {
                for (k in Q) Q[k] > 0 && (Q[k] = Q[k] * (V + R) / S);
                Q.FE_FEO = -V
            } else Q.FE_FEO = -(S - R);
            Q.FE_FEO = Q.FE_FEO + G;
            var W = new Object, Y = new Object, Z = new Object;
            for (k in Q) {
                var T = String(k).substring(0, String(k).indexOf("_")),
                    U = String(k).substring(String(k).indexOf("_") + 1);
                "CO" != U ? (Y[U] = -Q[k], W[T] = Q[k]) : (Z[U] = -Q[k], W[T] = Q[k])
            }
            W.C = W.C + H;
            var $, _, aa = 1, ba = 0, ca = "", da = "", ea = "";
            for (k in P) (P[k] == 1 / 0 || isNaN(P[k]) || P[k] < 0) && (P[k] = 0), P[k] = Math.min(P[k], 1), $ = String(k).substring(String(k).indexOf("_") + 1), _ = String(k).substring(0, String(k).indexOf("_")), P[k] > 0 && P[k] < aa && (ca = $, da = _, ea = String(k), aa = P[k]), ba = Math.max(ba, P[k]);
            delete $, delete _;
            var fa = 20, ga = (22690 - 54640 * t) / v + 43.6 * t - 25.2, ha = Math.log(Math.exp(j[6])) / Math.LN10,
                ia = Math.log(aa > 0 ? aa : 1) / Math.LN10, ja = 1.375 - 935 / v + ga + ha - ia,
                ka = Math.pow(10, ja > 0 ? ja : 0);
            ka = Math.max(Math.min(fa, ka), 0);
            var la = d[Elements.S.index], ma = e[Compounds.S.index], na = (ma * O + la * N) / (O * ka + N),
                oa = na * ka;
            na = Math.max(Math.min(na, 1), 0), oa = Math.max(Math.min(oa, 1), 0), W.S = (na - la) * N / Elements.S.getAtomicMass(), Y.S = -W.S;
            var pa = 300, qa = 100 * e[Compounds.FEO.index], ra = 100 * e[Compounds.CAO.index],
                sa = 100 * e[Compounds.MGO.index], ta = Math.log(qa > 0 ? qa : 1) / Math.LN10,
                ua = 21740 / v + .071 * (ra + .3 * sa) + 2.5 * ta - 9.87, va = Math.pow(10, ua > 0 ? ua : 0),
                va = Math.min(pa, va), wa = d[Elements.P.index], xa = e[Compounds.P.index],
                ya = (xa * O + wa * N) / (O * va + N), za = ya * va;
            ya = Math.max(Math.min(ya, 1), 0), za = Math.max(Math.min(za, 1), 0), W.P = (ya - wa) * N / Elements.P.getAtomicMass(), Y.P = -W.P;
            var Aa = new Array(d.length), Ba = new Array(e.length), Ca = new Array(f.length);
            for (k in W) Aa[Elements.getIndex(k)] = W[k];
            for (k in Y) Ba[Compounds.getIndex(k)] = Y[k];
            Ca[Compounds.CO.index] = Z.CO, Furnace.Model.steel.adjustComposition(Aa), Furnace.Model.slag.adjustComposition(Ba), Furnace.Model.gas.adjustComposition(Ca), delete Aa, delete Ca, delete d, delete e, delete f;
            var k = 0, l = Ba.length, Da = 0, Ea = 0;
            for (k; l > k; k++) if (0 != Ba[k]) {
                var Fa = Compounds.getCompoundByIndex(k), Ga = Fa.getMolecularMass(),
                    Ha = Fa.getThermodynamicData(State.SOLID()), Ia = 298 * Ha.getCp(298),
                    Ha = Fa.getThermodynamicData(State.LIQUID()), Ja = Ha.getCp(v) * v;
                Da = (-Ha.getDHf() + Ia - Ja) * Ba[k] * Ga, Ea += Da
            }
            Da = -Compounds.CO.getThermodynamicData(State.GAS).getDHf() * Z.CO * Compounds.CO.getMolecularMass(), Ea += Da, addEnergy(Ea, "oxidation reaction"), delete Ba
        }, heating = function (b) {
            var c = Furnace.Model.steel.getEnergyPerKelvin(State.LIQUID()),
                d = Furnace.Model.slag.getEnergyPerKelvin(State.LIQUID()), e = b / (c + d);
            if ((Furnace.Model.steel.getTemperature() > S || isSolidPresent()) && a(".pilot").removeClass("pilot_on").addClass("pilot_off"), Furnace.Model.steel.getTemperature() + e > S || e > 0) Furnace.Model.steel.incrementTemperature(e), Furnace.Model.slag.incrementTemperature(e); else if (!isSolidPresent()) {
                a(".pilot").removeClass("pilot_off").addClass("pilot_on");
                var f = Furnace.Model.steel.getTemperature() + e - S;
                Furnace.Model.steel.incrementTemperature(f), Furnace.Model.slag.incrementTemperature(f);
                var g = Math.abs(f) * (c + d);
                addEnergy(g, "maintenance"), b -= g
            }
            ja += b, addEnergy(-b, "heating/cooling")
        }, addEnergy = function (a, b) {
            "ele" == b.substring(0, 3) || "maintenance" === b ? (ea += a, W += a) : "melting oxidation" === b ? fa += a : "oxidation reaction" === b && (ga += a), V += a
        }, determineFoamingSlag = function () {
            if (1e3 * Furnace.Model.solid.getTotalMass() < e && Furnace.Model.steel.getMass() > f && Furnace.Model.slag.getComposition()[Compounds.FEO.index] > g) {
                var a = getSlagBasicity();
                if (a > h && i > a && Lance.Model.carbonFlow > 0) return EafLog.storeMsg(Timer.getTime(), gt("eafFoamingStarted"), gt_eng("eafFoamingStarted")), !0
            }
            return !1
        }, calcCoolingWaterTemp = function (b) {
            var c = 0;
            if (Re.Model.get("currentPower") > 0) {
                var d = Math.sqrt(Re.getArcRadiation());
                c = 1e3 * Furnace.Model.solid.getTotalMass() < e ? R ? q + b * (d * l - q) / n : q + b * (d * k - q) / n : q + b * (d * j - q) / n
            } else c = q + b * (m - q) / n;
            return c >= o && !r ? (showAlert = "<h1>" + gt("eafPowerCutOff") + "</h1><br><p>" + gt("eafPower01") + "</p><p>" + gt("eafPower02") + "</p>", Re.powerOff(), Timer.Model.set("simRate", 1), a("#simulation_rate_control").sldr("value", 1), r = !0, Re.setPowerControlState(!r), EafLog.storeMsg(Timer.getTime(), gt("eafPowerCutOff"), gt_eng("eafPowerCutOff"))) : p >= c && r && (r = !1, Re.setPowerControlState(!r)), c
        }, getSlagBasicity = function () {
            var a = Furnace.Model.slag.getComposition()[Compounds.CAO.index],
                b = Furnace.Model.slag.getComposition()[Compounds.SIO2.index];
            return b > 0 ? a / b : 1
        }, calcHeatLosses = function (a) {
            var b = 1, c = 0;
            c = Furnace.Model.steel.getMass() < A ? s * Math.pow(Furnace.Model.steel.getTemperature(), 4) : 1e3 * Furnace.Model.solid.getTotalMass() > B ? t * Math.pow(Furnace.Model.steel.getTemperature(), 4) : u * Math.pow(Furnace.Model.steel.getTemperature(), 4), Re.Model.get("isRoofClosed") || (c = v * c), c *= PhysicalConstants.STEFAN_BOLTZMANN();
            var d = w * (Furnace.Model.steel.getTemperature() - 273), e = x * (q - m), f = (y + z) * b,
                g = c + d + e + f;
            return {radiation: c * a, conduction: d * a, water: e * a, offgas: f * a, total: g * a}
        }, carbonOxygenInjection = function (a) {
            var b = Compounds.CO.getThermodynamicData(State.GAS).getDHf(),
                c = a * (Lance.Model.oxygenFlow / 60) * 2 * b / 22.41;
            void 0 == c && isNaN(c) ? console.log("Something is wrong with the carbon injection") : addEnergy(c, "injection")
        }, isSlagDoorOpen = function () {
            return G == F
        }, startFurnaceRotation = function () {
            return K == H && Re.Model.isRoofClosed && Re.getAreElectrodesRaised() && Lance.getIsLanceRetracted() ? (L = J, d = requestAnimationFrame(moveFurnace), !0) : K != H || Re.Model.isRoofClosed && Re.getAreElectrodesRaised() && Lance.getIsLanceRetracted() ? void 0 : (EafView.displayUserMessage(gt("eafCouldNotTilt"), gt("eafNoTiltTxt01"), !0), !1)
        }, rotateFurnace = function (a) {
            K += L * a, 0 != L && (H > K ? (K = H, L = 0) : K >= I && (K = I, L = 0))
        }, moveFurnace = function () {
            a("#eaf_furnace").css({
                webkitTransform: "rotate(" + K + "deg)",
                transform: "rotate(" + K + "deg)"
            }), a("#eaf_content").css({
                webkitTransform: "rotate(-" + K + "deg)",
                transform: "rotate(-" + K + "deg)"
            }), a("#ram").css({
                webkitTransform: "rotate(" + 3.5 * K / I + "deg)",
                transform: "rotate(" + 3.5 * K / I + "deg)"
            }), a("#ram1").css({
                webkitTransform: "rotate(" + 4 * K / I + "deg)",
                transform: "rotate(" + 4 * K / I + "deg)",
                bottom: 65 + 10 * K / I
            }), I > K && (d = requestAnimationFrame(moveFurnace))
        }, pourSteel = function () {
            ua > 0 ? (ua = Math.max(ua - 6, 0), a("#tap_hole_open").css("bottom", ua)) : va > 0 ? (va -= 6, a("#teeming_steel_image").css("bottom", va)) : (wa = 60 - O / 1500, a("#ladle_steel_image").css("top", wa)), d = requestAnimationFrame(pourSteel)
        }, getTapFlow = function (a) {
            if (getSteelHeight() > N) {
                var b = Math.pow(2 * PhysicalConstants.GRAV_ACCEL() * getSteelHeight(), .2),
                    c = a * b * Z * SteelData.STEEL_DENSITY_LIQUID();
                return Furnace.Model.steel.removeMaterial(c), c
            }
        }, isFurnaceUpright = function () {
            return K == H
        }, requestAnalysis = function () {
            this.Model.analysisPending ? EafView.displayUserMessage(gt("ChemicalAnalysis"), gt("ss3dDialogF103Alert"), !0) : 0 == this.Model.steel.mass ? EafView.displayUserMessage(gt("ChemicalAnalysis"), gt("eafNeedLiquidSteel"), !0) : (EafLog.storeMsg(Timer.getTime(), gt("eafAnalysisRequested"), gt_eng("eafAnalysisRequested")), EafLog.addCost("analysis"), Q = Furnace.Model.steel.getComposition().concat(), this.Model.analysisPending = !0, this.Model.requestTime = Timer.getTime(), b = Timer.Model.totalSeconds + P / 1e3, a("#analysis_results_button").prop("disabled", !0))
        }, setLastBasketAdditionTime = function () {
            ba = Timer.getTime()
        }, getAvailableVolume = function () {
            return 1.05 * getFurnaceVolume() - Furnace.Model.steel.getVolume() - Furnace.Model.solid.getVolume()
        }, isSolidPresent = function () {
            return Furnace.Model.solid.get("solids_array").length > 0
        }, getSolidHeight = function () {
            return Furnace.Model.solid.getVolume() / X
        }, getSlagHeight = function () {
            var a = 1;
            return getIsSlagFoaming() && (a = 3), a * Furnace.Model.slag.getVolume() / X
        }, getSteelHeight = function () {
            return Furnace.Model.steel.getVolume() / X
        }, getSteelTemperature = function () {
            return Furnace.Model.steel.getTemperature()
        }, getSteelMass = function () {
            return Furnace.Model.steel.getMass()
        }, getSlagComposition = function () {
            return Furnace.Model.slag.get("composition")
        }, getIsDroppingScrap = function () {
            return $ > 0
        }, getCurrentBasket = function () {
            return Crane.Model.get("currentBasket")
        }, getFurnaceVolume = function () {
            return X * Y
        }, getTotalAddedElectricEnergy = function () {
            return ea
        }, getCO2Total = function () {
            return za
        }, getEnergyBalance = function () {
            return {
                availableEnergyElectricity: ea,
                availableEnergyMelting: fa,
                availableEnergyReactions: ga,
                requiredEnergyHeatingSolids: ia,
                requiredEnergyMeltingSolids: ha,
                requiredEnergyHeatingLiquid: ja,
                heatLoss_radiation: ka,
                heatLoss_conduction: la,
                heatLoss_water: ma,
                heatLoss_offgas: na,
                heatLoss_total: oa
            }
        }, moveSlagDoor = function () {
            Furnace.Model.slagDoorVelocity > 0 && G >= F || Furnace.Model.slagDoorVelocity < 0 && E >= G ? (cancelAnimationFrame(c), G > F && (G = F), E > G && (G = E), Furnace.Model.set("slagDoorVelocity", 0)) : (G += Furnace.Model.slagDoorVelocity, c = requestAnimationFrame(moveSlagDoor)), a("#slag_door").css("bottom", G)
        }, updateWCP = function () {
            var b = q - 273;
            if (qa >= b && ("none" == pa || "second" == pa)) pa = "first", a(".wcp_panel").removeClass("red orange").addClass("green"); else if (b > qa && ra >= b && ("first" == pa || "third" == pa)) {
                pa = "second";
                var c = Math.round(2 * Math.random() + 1);
                a(".wcp_panel").removeClass("red green").addClass("orange"), a(".wcp" + c).removeClass("orange").addClass("green")
            } else if (b > ra && sa >= b && ("second" == pa || "last" == pa)) {
                pa = "third";
                var d = Math.round(2 * Math.random() + 1);
                a(".wcp_panel").removeClass("red green").addClass("orange"), a(".wcp" + d).removeClass("orange").addClass("red")
            } else b > sa && "third" == pa && (pa = "last", a(".wcp_panel").removeClass("orange green").addClass("red"))
        }, FurnaceModel = M({
            solid: M(new SolidPhase),
            steel: M(new Phase("Steel", 0, 0, SteelData.STEEL_DENSITY_LIQUID())),
            slag: M(new Phase("Slag", 0, 0, SteelData.SLAG_DENSITY_LIQUID())),
            gas: M(new Phase("Gas", 0, 0, .023)),
            slagDoorVelocity: 0,
            analysisPending: void 0,
            requestTime: void 0,
            lastTimestamp: void 0,
            tapping: !1,
            msBottom: -58,
            scrapBottom: -110,
            slagHeight: 1,
            init: function () {
            }
        }), Furnace = {
            addEnergy: addEnergy,
            addBasket: addBasket,
            getSteelTemperature: getSteelTemperature,
            getSolidHeight: getSolidHeight,
            getSteelHeight: getSteelHeight,
            getIsDroppingScrap: getIsDroppingScrap,
            isFurnaceUpright: isFurnaceUpright,
            isSlagDoorOpen: isSlagDoorOpen,
            isSolidPresent: isSolidPresent,
            requestAnalysis: requestAnalysis,
            startFurnaceRotation: startFurnaceRotation,
            getTotalAddedElectricEnergy: getTotalAddedElectricEnergy,
            getEnergyBalance: getEnergyBalance,
            getAvailableVolume: getAvailableVolume,
            getCO2Total: getCO2Total,
            Model: FurnaceModel
        }, window.Furnace = Furnace, a(document).ready(function () {
            Timer.Model.on("tick", function (a, b, c, d) {
                update(d)
            }), Timer.Model.on("change", function (a, b) {
                b.simRate && (Furnace.Model.slagDoorVelocity > 0 ? Furnace.Model.slagDoorVelocity = +D / (1 / Timer.Model.simRate) : Furnace.Model.slagDoorVelocity < 0 && (Furnace.Model.slagDoorVelocity = -D / (1 / Timer.Model.simRate)))
            }), Furnace.Model.solid.on("change", function (b, c) {
                c.scrapVolume && (Furnace.Model.scrapBottom = -110 + 110 * c.scrapVolume.value / 40, a("#scrap").css("bottom", Furnace.Model.scrapBottom)), c.temperature && a("#heated_scrap_image").css("opacity", (c.temperature.value - 273) / 1e3)
            }), Furnace.Model.steel.on("change", function (b, c) {
                c.mass && (Furnace.Model.msBottom = -56 + 25e-5 * c.mass.value, a("#molten_steel").css("bottom", Furnace.Model.msBottom)), c.temperature && a(".liquid-steel-temperature .value").html(Furnace.getSteelHeight() > 0 && !(Furnace.Model.solid.getVolume() > 0) ? Furnace.Model.steel.getTemperature().toFixed(0) - 273 : "--")
            }), Furnace.Model.slag.on("change", function (b, c) {
                c.mass && (Furnace.Model.slagHeight = Math.max(1, .001 * c.mass.value), a("#slag_image").css("height", Furnace.Model.slagHeight))
            }), a(".slag_door_control").click(function (a) {
                0 == Furnace.Model.slagDoorVelocity ? (G == E ? Furnace.Model.set("slagDoorVelocity", +D / (1 / Timer.Model.simRate)) : G == F && Furnace.Model.set("slagDoorVelocity", -D / (1 / Timer.Model.simRate)), c = requestAnimationFrame(moveSlagDoor)) : Furnace.Model.slagDoorVelocity = -1 * Furnace.Model.slagDoorVelocity
            }), Lance.Model.on("change", function (b, c) {
                c.velocity && (0 != c.velocity.value ? a(".slag_door_control").prop("disabled", !0).parent().addClass("disabled") : Lance.getIsLanceRetracted() && a(".slag_door_control").prop("disabled", !1).parent().removeClass("disabled"))
            }), a(".tap_steel.button").click(function (b) {
                Furnace.getSteelHeight() < N || Furnace.startFurnaceRotation() && (a("#control-drawer").removeClass("opened"), Timer.Model.set("simRate", 16), a("#simulation_rate_control").sldr("value", 16), a(this).prop("disabled", !0), a(".roof_control").prop("disabled", !0).parent().addClass("disabled"), Crane.disableCraneControls())
            })
        })
    }(jQuery), function (a) {
    a(document).ready(function () {
        var b, c, d, e, f = new Array, g = .25, h = 0, i = 76, j = 266, k = i, l = 1, m = 35, n = 0, o = 14, p = 19,
            q = 124, r = -50, s = 1 / 32, t = 0, u = 0, v = !0, w = 1, x = .25, y = -20, z = !1, A = !0,
            B = 500 + 100 * Math.random(), C = 120, D = 0, E = Array(0, .625 * C, .75 * C, .875 * C, C), F = !1, G = 0,
            H = 0, I = function (b) {
                var c = 110 + p - Re.Model.ecTop - n, d = Furnace.Model.msBottom + 54;
                d > c && (Re.Model.ecTop += c - (d + 1), a("#electrodes_container").css("top", Re.Model.ecTop)), z && A && (B -= b, 0 >= B && clearElectrodeBreakage())
            }, J = function (b) {
                return void 0 == c && (c = Timer.Model.get("totalSeconds")), b >= 0 && 4 >= b && (F = !0, D = b, Re.Model.currentPower = E[D], b > 0 ? 0 == G && (G = requestAnimationFrame(electrodesGlow)) : (cancelAnimationFrame(G), G = 0, a(".electrode_glow").css("opacity", 0)), EafLog.storeMsg(Timer.getTime(), gt("eafPowerSetTo") + " " + Re.Model.currentPower + " MW", gt_eng("eafPowerSetTo") + " " + Re.Model.currentPower + " MW")), Re.Model.currentPower
            }, K = function () {
                D > 0 && (J(0), a("#power_switch").prop("checked", !1), EafLog.storeMsg(Timer.getTime(), gt("eafPowerTurnedOff"), gt_eng("eafPowerTurnedOff")))
            }, L = function () {
                return this.Model.get("currentPower") / C
            }, N = function () {
                var c = Timer.Model.get("totalSeconds"), d = Furnace.Model.solid.getCoarseFraction();
                if (t > 0 && w > c - u && d > x && y > b && !getAreElectrodesRaised()) {
                    var e = 1 / (1 + 1e3 * Math.exp(b / 2 + 5 * (1 - d)));
                    if (e > Math.random() && !z) {
                        EafView.displayUserMessage(gt("eafElectrodeBreakage"), gt("eafElectrodeBreakage02"), !0), t = 0, Timer.Model.set("simRate", 1), a("#simulation_rate_control").sldr("value", 1), EafLog.storeMsg(Timer.getTime(), gt("eafElectrodeBreakage"), gt_eng("eafElectrodeBreakage")), z = !0, A = !1, K(), setPowerControlState(!1), EafLog.addCost("electrode");
                        var g = Math.round(Math.random() * (f.length - 1));
                        O(g)
                    }
                }
                u = c
            }, O = function (b) {
                var c = a("#electrode" + (b + 1) + "_image"), d = a("#electrode_broken_piece");
                c.attr("src", "images/electrode_broken.png"), c.addClass("broken"), d.removeClass("out rotate"), d.css({
                    left: 460 + 42 * b,
                    top: Math.max(200, Math.min(270, Re.Model.ecTop + 160)),
                    opacity: 1
                }), d.addClass("rotate")
            };
        setElectrodesRaised = function (b) {
            1 == v && 0 == b ? (v = b, a("#power_switch").prop("disabled", !1).parent().removeClass("disabled"), a(".roof_control").prop("disabled", !0).parent().addClass("disabled")) : 0 == v && 1 == b && (v = b, K(), a("#power_switch").prop("disabled", !0).parent().addClass("disabled"), a(".roof_control").prop("disabled", !1).parent().removeClass("disabled"))
        }, getAreElectrodesRaised = function () {
            return v
        }, clearElectrodeBreakage = function () {
            z = !1, EafLog.storeMsg(Timer.getTime(), gt("eafElectrodeReplaced"), gt_eng("eafElectrodeReplaced")), B = 500 + 100 * Math.random();
            var b = a(".electrode_image.broken");
            b.attr("src", "images/electrode.png"), b.removeClass("broken out"), b.addClass("replaced"), a(".roof_control").prop("disabled", !1).parent().removeClass("disabled"), a("#eaf_plant").removeClass("left")
        }, setPowerControlState = function (b) {
            b ? a("#power_switch").prop("disabled", !1).parent().removeClass("disabled") : a("#power_switch").prop("disabled", !0).parent().addClass("disabled")
        }, updateRelativeBottom = function () {
            n = Math.min(f[0].relativeBottom, Math.min(f[1].relativeBottom, f[2].relativeBottom))
        }, electrodesGlow = function () {
            if (3 == H) {
                var b = .2 + .2 * Math.random();
                a(".electrode_glow").css("opacity", b), H = 0
            } else H++;
            G = requestAnimationFrame(electrodesGlow)
        }, moveRoof = function () {
            k += h, k > j ? k = j : i > k && (k = i), k == j || k == i ? (cancelAnimationFrame(d), h = 0, Re.Model.set("isRoofOpen", k == j), Re.Model.set("isRoofClosed", k == i), Re.Model.isRoofClosed ? (Furnace.isSolidPresent() || Furnace.Model.steel.getMass() > 0) && enableElectrodesControls() : (disableElectrodesControls(), Crane.enableCraneControls(), z && (a(".roof_control").prop("disabled", !0).parent().addClass("disabled"), a("#eaf_plant").addClass("left")))) : d = requestAnimationFrame(moveRoof), a("#roof").css("left", k)
        }, moveElectrode = function (b, c) {
            var d = f[b - 1];
            if (steelSurface = Furnace.Model.msBottom + 54, move = !1, relativePosition = 110 + p - Re.Model.ecTop + d.relativeBottom + c, scrapPosition = Furnace.Model.scrapBottom + 110, c > 0 && d.relativeBottom + c < m && (move = !0), 0 > c && Re.Model.ecTop - d.relativeBottom - c < q && (move = !0), 0 > c && relativePosition < steelSurface && (move = !1), 0 > c && relativePosition - scrapPosition < r && (move = !1), move) {
                d.bottom += c, a("#electrode" + b).css("bottom", d.bottom), d.relativeBottom += c, updateRelativeBottom();
                var e = Re.Model.ecTop + c - n;
                setElectrodesRaised(p >= e), 0 > c && N()
            }
        }, moveElectrodesGroup = function () {
            var c = 110 + p - Re.Model.ecTop + n, d = Furnace.Model.msBottom + 54, f = Furnace.Model.scrapBottom + 110;
            return Re.Model.ecTop += t, setElectrodesRaised(!1), b = c - f, 0 > t && Re.Model.ecTop - n <= p ? (setElectrodesRaised(!0), Re.setLastMovedDown(), Re.Model.ecTop <= o && (Re.Model.ecTop = o, t = 0)) : t > 0 && (Re.Model.downMoves++, 5 == Re.Model.downMoves && (Re.setLastMovedDown(), Re.Model.downMoves = 0), Re.Model.ecTop - n >= q ? (Re.Model.ecTop = q, t = 0) : r > b ? (Re.Model.ecTop -= r - b, t = 0) : d > c && (Re.Model.ecTop += c - d, t = 0)), 0 == t ? void cancelAnimationFrame(e) : (a("#electrodes_container").css("top", Re.Model.ecTop), void (e = requestAnimationFrame(moveElectrodesGroup)))
        }, enableElectrodesControls = function () {
            a(".single_electrode_control").prop("disabled", !1), a(".electrodes_control").prop("disabled", !1)
        }, disableElectrodesControls = function () {
            a(".single_electrode_control").prop("disabled", !0), a(".electrodes_control").prop("disabled", !0)
        }, ReModel = M({
            currentPower: 0,
            NUM_ELECTRODES: 3,
            isRoofClosed: !0,
            isRoofOpen: !1,
            isMoving: !1,
            lastTimestamp: void 0,
            cycleCounter: 0,
            ecTop: 15,
            downMoves: 0,
            init: function () {
                f[0] = M(new Electrode(1)), f[1] = M(new Electrode(2)), f[2] = M(new Electrode(3))
            }
        }), Re = {
            getArcRadiation: L,
            powerOff: K,
            updateRelativeBottom: updateRelativeBottom,
            setLastMovedDown: N,
            getAreElectrodesRaised: getAreElectrodesRaised,
            setPowerControlState: setPowerControlState,
            enableElectrodesControls: enableElectrodesControls,
            disableElectrodesControls: disableElectrodesControls,
            Model: ReModel
        }, Timer.Model.on("tick", function (a, b, c, d) {
            I(d), Re.Model.cycleCounter >= Math.pow(Math.log(Timer.Model.get("simRate")), 2) ? Re.Model.cycleCounter = 0 : Re.Model.cycleCounter++;
            for (var e = 0; e < f.length; e++) f[e].update(d)
        }), Timer.Model.on("change", function (a, b) {
            b.simRate && (h = h * (1 / b.simRate.oldValue) / (1 / b.simRate.value), t = t * (1 / b.simRate.oldValue) / (1 / b.simRate.value))
        }), a("#power_control").change(function () {
            !a("#power_switch").prop("disabled") && a("#power_switch").prop("checked") && J(a(this).val())
        }), a("#power_switch").click(function () {
            J(a("#power_switch").prop("checked") ? a("#power_control").val() : 0)
        }), a(".roof_control").change(function (a) {
            0 == h ? (k == i ? (h = +g / (1 / Timer.Model.simRate), Re.Model.set("isRoofClosed", !1), Re.disableElectrodesControls()) : k == j && (Crane.disableCraneControls(), h = -g / (1 / Timer.Model.simRate), Re.Model.set("isRoofOpen", !1)), d = requestAnimationFrame(moveRoof)) : h = -1 * h
        }), a(".single_electrode_control").on("mousedown touchstart", function (a) {
            a.preventDefault();
            var b = String(this.id).substring(9, String(this.id).indexOf("_")),
                c = String(this.id).substring(String(this.id).indexOf("_") + 1), d = "up" == c ? +l : -l;
            return 0 > d && z ? void a.preventDefault() : void moveElectrode(b, d)
        }), a(".electrodes_control").on("mousedown touchstart", function (b) {
            if (b.preventDefault(), "up" == String(this.id).substring(String(this.id).indexOf("_") + 1)) t = -s / (1 / Timer.Model.simRate), a(".single_electrode_control.up").addClass("hover"); else {
                if (z) return;
                t = s / (1 / Timer.Model.simRate), a(".single_electrode_control.down").addClass("hover")
            }
            e = requestAnimationFrame(moveElectrodesGroup)
        }), a(".electrodes_control").on("mouseup touchend", function (b) {
            b.preventDefault(), t = 0, a(".single_electrode_control").removeClass("hover"), cancelAnimationFrame(e)
        }), a(".electrode_image").click(function (b) {
            a(this).hasClass("broken") && Re.Model.isRoofOpen && (a(this).css("top", ""), a(this).addClass("out"), a("#electrode_broken_piece").addClass("out"), a("#electrode_broken_piece").css("top", -50), A = !0)
        }), window.Re = Re
    })
}(jQuery), function (a) {
    a(document).ready(function () {
        var b, c, d = .3125, e = new Array, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 20, m = -500, n = 0, o = 0,
            p = 105, q = -140, r = function () {
                var a = new Array;
                a.push(new Array(30, -500, 0)), a.push(new Array(30, -200, 0)), a.push(new Array(50, -229, 0)), a.push(new Array(50, -456, 1)), a.push(new Array(500, -456, 1)), a.push(a[3].concat()), a.push(new Array(50, -229, 1)), a.push(a[1].concat()), a.push(a[0].concat()), a.push(new Array(20, -500, 0)), e.push(a), a = new Array, a.push(new Array(130, -500, 0)), a.push(new Array(130, -200, 0)), a.push(new Array(150, -229, 0)), a.push(new Array(150, -456, 1)), a.push(new Array(500, -456, 1)), a.push(a[3].concat()), a.push(new Array(150, -229, 1)), a.push(a[1].concat()), a.push(a[0].concat()), a.push(new Array(20, -500, 0)), e.push(a), a = new Array, a.push(new Array(230, -500, 0)), a.push(new Array(230, -200, 0)), a.push(new Array(250, -229, 0)), a.push(new Array(250, -456, 1)), a.push(new Array(500, -456, 1)), a.push(a[3].concat()), a.push(new Array(250, -229, 1)), a.push(a[1].concat()), a.push(a[0].concat()), a.push(new Array(20, -500, 0)), e.push(a)
            }, s = function () {
                var c = a("#crane"), j = a("#basket" + f), k = a("#basket" + f + "_handle"), p = e[f - 1][g][2];
                if (l == e[f - 1][g][0] ? h = 0 : Math.max(e[f - 1][g][0], l) - Math.min(e[f - 1][g][0], l) < Math.abs(h) && (h = e[f - 1][g][0] - l), m == e[f - 1][g][1] ? i = 0 : Math.max(e[f - 1][g][1], m) - Math.min(e[f - 1][g][1], m) < Math.abs(i) && (i = e[f - 1][g][1] - m), 0 == h && 0 == i) {
                    if (9 == g) return f = 0, g = 0, a("#plant_wrapper").removeClass("show"), a("#graphs").removeClass("shrink"), void (Re.Model.isRoofOpen && u());
                    if (4 == g && Eaf.Model.scrapBasketArray[f - 1].contentsArray.length > 0) return a("#scrap_falling").removeClass("invisible"), a("#basket" + f + "_left_hatch").addClass("open"), a("#basket" + f + "_right_hatch").addClass("open"), a("#heated_scrap_image").css("opacity", 0), void t();
                    g++;
                    var q = e[f - 1][g][0] - e[f - 1][g - 1][0];
                    return h = 0 == q ? q : d / (1 / Timer.Model.simRate) * (q / Math.abs(q)), q = e[f - 1][g][1] - e[f - 1][g - 1][1], i = 0 == q ? q : d / (1 / Timer.Model.simRate) * (q / Math.abs(q)), void (b = requestAnimationFrame(s))
                }
                5 == g && a(".roof_control").prop("disabled") && Re.getAreElectrodesRaised() && 280 > n && (a(".roof_control").prop("disabled", !1).parent().removeClass("disabled"), a("#control-drawer").addClass("opened")), l += h, m += i, c.css({
                    left: l,
                    top: m
                }), 1 == p && (n += h, o += i, j.css({left: n, top: o}), k.css({
                    left: n + 53,
                    top: o + 15
                })), b = requestAnimationFrame(s)
            }, t = function () {
                if (!(127 > p)) {
                    a("#scrap_falling").addClass("invisible initial").removeAttr("style"), a("#basket" + f + "_left_hatch, #basket" + f + "_right_hatch").removeClass("open"), Furnace.addBasket(Eaf.Model.scrapBasketArray[f - 1].contentsArray, 273), a(".make-additions").removeAttr("disabled");
                    for (var b = 0, d = gt("eafScrapBasketAdditions"), e = gt_eng("eafScrapBasketAdditions"), g = 0; g < Eaf.Model.scrapBasketArray[f - 1].contentsArray.length; g++) {
                        var h = Eaf.Model.scrapBasketArray[f - 1].contentsArray[g];
                        b += h.rawMaterial.unitCost * h.mass, d += " " + gt(h.rawMaterial.name) + ": " + h.mass + "t;", e += " " + gt_eng(h.rawMaterial.name) + ": " + h.mass + "t;", EafLog.Model.auditData.rawMaterials[h.rawMaterial.name].qty += h.mass
                    }
                    return EafLog.storeMsg(Timer.getTime(), d.substr(0, d.length - 1), e.substr(0, e.length - 1)), EafLog.addCost("scrap", b), delete b, Eaf.Model.scrapBasketArray[f - 1].contentsArray = [], void s()
                }
                q += 2, a("#scrap_falling").css("top", q), p += 2, a("#basket" + f + "_scrap").css("top", p), Furnace.Model.scrapBottom += 1.8, a("#scrap").css("bottom", Furnace.Model.scrapBottom), c = requestAnimationFrame(t)
            }, u = function () {
                a(".crane_control").each(function (b) {
                    var c = Eaf.Model.scrapBasketArray[b].getContentsVolume();
                    return c > 0 && c <= Furnace.getAvailableVolume() ? (a(this).prop("disabled", !1), !1) : void 0
                })
            }, v = function () {
                a(".crane_control").prop("disabled", !0)
            };
        CraneModel = M({
            init: function () {
                r()
            }
        }), Crane = {
            enableCraneControls: u,
            disableCraneControls: v,
            Model: CraneModel
        }, window.Crane = Crane, Timer.Model.on("change", function (a, b) {
            b.simRate && (h = h * (1 / b.simRate.oldValue) / (1 / b.simRate.value), i = i * (1 / b.simRate.oldValue) / (1 / b.simRate.value), j = j * (1 / b.simRate.oldValue) / (1 / b.simRate.value), k = k * (1 / b.simRate.oldValue) / (1 / b.simRate.value))
        }), a(".crane_control").click(function () {
            v(), a(".roof_control").prop("disabled", !0).parent().addClass("disabled"), a("#control-drawer").removeClass("opened"), a("#plant_wrapper").addClass("show"), a("#graphs").addClass("shrink"), f = parseInt(String(this.id).substring(6, 7)), n = parseFloat(parseFloat(a("#basket" + f).css("left")).toFixed(1)), o = parseFloat(parseFloat(a("#basket" + f).css("top")).toFixed(1)), p = parseFloat(a("#basket" + f + "_scrap").css("top")), g = 0;
            var c = e[f - 1][0][0] - parseFloat(parseFloat(a("#crane").css("left")).toFixed(1));
            h = 0 == c ? c : d / (1 / Timer.Model.simRate) * (c / Math.abs(c)), c = e[f - 1][0][1] - parseFloat(parseFloat(a("#crane").css("top")).toFixed(1)), i = 0 == c ? c : d / (1 / Timer.Model.simRate) * (c / Math.abs(c)), b = requestAnimationFrame(s)
        }), a("#plant_wrapper").on("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function () {
            a("#plant_wrapper").hasClass("show") ? a("#graphs").addClass("hidden") : a("#graphs").removeClass("hidden")
        })
    })
}(jQuery), function (a) {
    a(document).ready(function () {
        var b, c,
            d = [Elements.C, Elements.SI, Elements.MN, Elements.P, Elements.S, Elements.CR, Elements.MO, Elements.NI, Elements.NB, Elements.CU, Elements.TI, Elements.AL, Elements.V],
            e = [Compounds.AL2O3, Compounds.CAO, Compounds.CR2O3, Compounds.FEO, Compounds.MGO, Compounds.MNO, Compounds.SIO2, Compounds.P, Compounds.S],
            f = !0, g = function (a) {
                var b, c, d = new ChemicalComposition, e = new ChemicalComposition;
                b = new ChemicalComposition(Elements.FE), b.addData(Elements.C, .005), b.addData(Elements.SI, .002), b.addData(Elements.P, 5e-4), b.addData(Elements.S, 4e-4), b.addData(Elements.CR, .0015), b.addData(Elements.MO, 6e-4), b.addData(Elements.NI, .0015), b.addData(Elements.CU, .0025), b.addData(Elements.SN, 15e-5), b.addData(Elements.MN, .008), c = new ChemicalComposition(Compounds.SIO2), c.addData(Compounds.AL2O3, .15), a.push(new RawMaterial("eafScrapType01", RawMaterialType.BASKET(), RawMaterialForm.COARSE_SCRAP(), .85, 160, b, c, .986)), EafLog.Model.auditData.rawMaterials.eafScrapType01 = {
                    name: gt_eng("eafScrapType01"),
                    qty: 0
                }, b = new ChemicalComposition(Elements.FE), b.addData(Elements.C, .0035), b.addData(Elements.CR, .0025), b.addData(Elements.CU, .005), b.addData(Elements.MO, 6e-4), b.addData(Elements.NI, .0018), b.addData(Elements.P, 4e-4), b.addData(Elements.S, 4e-4), b.addData(Elements.SI, .0015), b.addData(Elements.SN, 25e-5), b.addData(Elements.MN, .008), c = new ChemicalComposition(Compounds.SIO2), c.addData(Compounds.AL2O3, .15), a.push(new RawMaterial("eafScrapType02", RawMaterialType.BASKET(), RawMaterialForm.COARSE_SCRAP(), .75, 140, b, c, .986)), EafLog.Model.auditData.rawMaterials.eafScrapType02 = {
                    name: gt_eng("eafScrapType02"),
                    qty: 0
                }, b = new ChemicalComposition(Elements.FE), b.addData(Elements.C, .0017), b.addData(Elements.CE, 3e-5), b.addData(Elements.CR, .0026), b.addData(Elements.CU, .001), b.addData(Elements.MN, .0031), b.addData(Elements.MO, .0014), b.addData(Elements.NB, 1e-5), b.addData(Elements.NI, .0015), b.addData(Elements.P, 13e-5), b.addData(Elements.S, 14e-6), b.addData(Elements.SI, 4e-4), b.addData(Elements.SN, 1e-5), b.addData(Elements.TI, 15e-5), b.addData(Elements.V, 5e-5), b.addData(Elements.W, 9e-5), c = new ChemicalComposition(Compounds.SIO2), c.addData(Compounds.AL2O3, .15), a.push(new RawMaterial("eafScrapType03", RawMaterialType.BASKET(), RawMaterialForm.COARSE_SCRAP(), 3, 240, b, c, .986)), EafLog.Model.auditData.rawMaterials.eafScrapType03 = {
                    name: gt_eng("eafScrapType03"),
                    qty: 0
                }, b = new ChemicalComposition(Elements.FE), b.addData(Elements.C, .0025), b.addData(Elements.SI, .0025), b.addData(Elements.MN, .065), b.addData(Elements.P, 3e-4), b.addData(Elements.S, 35e-5), b.addData(Elements.CR, .0012), b.addData(Elements.MO, 5e-4), b.addData(Elements.NI, .0015), b.addData(Elements.CU, .002), b.addData(Elements.SN, 15e-5), c = new ChemicalComposition(Compounds.SIO2), c.addData(Compounds.AL2O3, .15), a.push(new RawMaterial("eafScrapType04", RawMaterialType.BASKET(), RawMaterialForm.COARSE_SCRAP(), 2, 290, b, c, .986)), EafLog.Model.auditData.rawMaterials.eafScrapType04 = {
                    name: gt_eng("eafScrapType04"),
                    qty: 0
                }, b = new ChemicalComposition(Elements.FE), b.addData(Elements.C, 15e-5), b.addData(Elements.CO, 3e-4), b.addData(Elements.CR, .1832), b.addData(Elements.CU, 4e-4), b.addData(Elements.MN, .0164), b.addData(Elements.MO, .013), b.addData(Elements.N, .0016), b.addData(Elements.NB, 1e-4), b.addData(Elements.NI, .0808), b.addData(Elements.P, 14e-5), b.addData(Elements.S, 2e-5), b.addData(Elements.SI, .0033), b.addData(Elements.TI, 4e-5), b.addData(Elements.V, 1e-4), a.push(new RawMaterial("eafScrapType05", RawMaterialType.BASKET(), RawMaterialForm.COARSE_SCRAP(), 3, 330, b, d, 1)), b = new ChemicalComposition(Elements.FE), b.addData(Elements.C, 8e-4), b.addData(Elements.CR, 8e-4), b.addData(Elements.CU, 8e-4), b.addData(Elements.MN, .007), b.addData(Elements.NI, 5e-4), b.addData(Elements.P, 1e-4), b.addData(Elements.S, 1e-4), b.addData(Elements.SI, .0011), b.addData(Elements.TI, 1e-5), b.addData(Elements.MO, 3e-4), b.addData(Elements.SN, 8e-5), b.addData(Elements.AL, 2e-4), c = new ChemicalComposition(Compounds.SIO2), c.addData(Compounds.AL2O3, .15), a.push(new RawMaterial("eafScrapType06", RawMaterialType.BASKET(), RawMaterialForm.FINE_SCRAP(), 1.2, 180, b, c, .986)), EafLog.Model.auditData.rawMaterials.eafScrapType06 = {
                    name: gt_eng("eafScrapType06"),
                    qty: 0
                }, b = new ChemicalComposition(Elements.FE), b.addData(Elements.C, .002), b.addData(Elements.CR, .0012),b.addData(Elements.CU, .003),b.addData(Elements.MN, .0012),b.addData(Elements.NI, .0015),b.addData(Elements.P, 3e-4),b.addData(Elements.S, 3e-4),b.addData(Elements.SI, .0018),b.addData(Elements.SN, 2e-4),b.addData(Elements.TI, 14e-6),b.addData(Elements.MO, 4e-4),a.push(new RawMaterial("eafScrapType07", RawMaterialType.BASKET(), RawMaterialForm.FINE_SCRAP(), 1.2, 170, b, d, 1)),EafLog.Model.auditData.rawMaterials.eafScrapType07 = {
                    name: gt_eng("eafScrapType07"),
                    qty: 0
                },b = new ChemicalComposition(Elements.FE),b.addData(Elements.C, .024),b.addData(Elements.P, .001),b.addData(Elements.S, 1e-4),b.addData(Elements.TI, 2e-4),b.addData(Elements.NB, 3e-4),b.addData(Elements.V, 2e-4),b.addData(Elements.CU, 5e-5),c = new ChemicalComposition(Compounds.FEO),c.addData(Compounds.AL2O3, .1571),c.addData(Compounds.CAO, .1525),c.addData(Compounds.MGO, .0163),c.addData(Compounds.SIO2, .2179),a.push(new RawMaterial("eafScrapType08", RawMaterialType.BASKET(), RawMaterialForm.FINE_SCRAP(), 1.65, 220, b, c, .92)),EafLog.Model.auditData.rawMaterials.eafScrapType08 = {
                    name: gt_eng("eafScrapType08"),
                    qty: 0
                },b = new ChemicalComposition(Elements.FE),b.addData(Elements.C, .003),b.addData(Elements.CR, .0015),b.addData(Elements.CU, .002),b.addData(Elements.MO, 5e-4),b.addData(Elements.NI, .0018),b.addData(Elements.P, 3e-4),b.addData(Elements.S, 3e-4),b.addData(Elements.SI, .002),b.addData(Elements.SN, 15e-5),b.addData(Elements.MN, .005),b.addData(Elements.AL, 2e-4),c = new ChemicalComposition(Compounds.SIO2),c.addData(Compounds.AL2O3, .15),a.push(new RawMaterial("eafScrapType09", RawMaterialType.BASKET(), RawMaterialForm.VERY_FINE_SCRAP(), 1.5, 200, b, c, .986)),EafLog.Model.auditData.rawMaterials.eafScrapType09 = {
                    name: gt_eng("eafScrapType09"),
                    qty: 0
                },b = new ChemicalComposition(Elements.FE),b.addData(Elements.C, 8e-4),b.addData(Elements.CR, 8e-4),b.addData(Elements.CU, 6e-4),b.addData(Elements.MO, 2e-4),b.addData(Elements.NI, 6e-4),b.addData(Elements.P, 1e-4),b.addData(Elements.S, 1e-4),b.addData(Elements.SI, .0015),b.addData(Elements.SN, 5e-5),b.addData(Elements.MN, .007),c = new ChemicalComposition(Compounds.SIO2),c.addData(Compounds.AL2O3, .15),a.push(new RawMaterial("eafScrapType10", RawMaterialType.BASKET(), RawMaterialForm.VERY_FINE_SCRAP(), 1.5, 210, b, c, .986)),EafLog.Model.auditData.rawMaterials.eafScrapType10 = {
                    name: gt_eng("eafScrapType10"),
                    qty: 0
                },b = new ChemicalComposition(Elements.SI),b.addData(Elements.AL, 24e-5),b.addData(Elements.C, 8e-5),b.addData(Elements.CA, 14e-5),b.addData(Elements.P, 3e-5),b.addData(Elements.TI, 14e-5),b.addData(Elements.FE, .24337),a.push(new RawMaterial("ss3dAdditive7", RawMaterialType.MAJOR_ADDITION(), RawMaterialForm.PEBBLES(), 2.5, 840, b, d, 1)),EafLog.Model.auditData.additions.ss3dAdditive7 = {
                    name: gt_eng("ss3dAdditive7"),
                    qty: 0
                },b = new ChemicalComposition(Elements.SI),b.addData(Elements.AL, .0123),b.addData(Elements.C, 8e-4),b.addData(Elements.P, 14e-5),b.addData(Elements.S, 2e-5),b.addData(Elements.TI, 5e-4),b.addData(Elements.FE, .38324),a.push(new RawMaterial("ss3dAdditive6", RawMaterialType.MAJOR_ADDITION(), RawMaterialForm.PEBBLES(), 2.5, 770, b, d, 1)),EafLog.Model.auditData.additions.ss3dAdditive6 = {
                    name: gt_eng("ss3dAdditive6"),
                    qty: 0
                },b = new ChemicalComposition(Elements.CR),b.addData(Elements.C, .0182),b.addData(Elements.P, 14e-5),b.addData(Elements.S, 15e-5),b.addData(Elements.SI, .2533),b.addData(Elements.FE, .34591),a.push(new RawMaterial("eafAdditive01", RawMaterialType.MAJOR_ADDITION(), RawMaterialForm.PEBBLES(), 3.5, 940, b, d, 1)),EafLog.Model.auditData.additions.eafAdditive01 = {
                    name: gt_eng("eafAdditive01"),
                    qty: 0
                },b = new ChemicalComposition(Elements.SI),b.addData(Elements.C, .3),a.push(new RawMaterial("eafAdditive02", RawMaterialType.MAJOR_ADDITION(), RawMaterialForm.PEBBLES(), 1.5, 610, b, d, 1)),EafLog.Model.auditData.additions.eafAdditive02 = {
                    name: gt_eng("eafAdditive02"),
                    qty: 0
                },b = new ChemicalComposition(Elements.CR),b.addData(Elements.C, .0782),b.addData(Elements.P, 21e-5),b.addData(Elements.S, 51e-5),b.addData(Elements.SI, .0023),b.addData(Elements.TI, 92e-6),b.addData(Elements.FE, .217588),a.push(new RawMaterial("eafAdditive03", RawMaterialType.MAJOR_ADDITION(), RawMaterialForm.PEBBLES(), 3.5, 590, b, d, 1)),EafLog.Model.auditData.additions.eafAdditive03 = {
                    name: gt_eng("eafAdditive03"),
                    qty: 0
                },b = new ChemicalComposition(Elements.CR),b.addData(Elements.C, .0812),b.addData(Elements.P, 17e-5),b.addData(Elements.S, 24e-5),b.addData(Elements.SI, .0034),b.addData(Elements.FE, .21579),a.push(new RawMaterial("eafAdditive04", RawMaterialType.MAJOR_ADDITION(), RawMaterialForm.PEBBLES(), 3.5, 660, b, d, 1)),EafLog.Model.auditData.additions.eafAdditive04 = {
                    name: gt_eng("eafAdditive04"),
                    qty: 0
                },b = new ChemicalComposition(Elements.MO),b.addData(Elements.C, 44e-5),b.addData(Elements.CU, .00221),b.addData(Elements.P, 44e-5),b.addData(Elements.S, 92e-5),b.addData(Elements.SI, .0014),b.addData(Elements.FE, .37439),a.push(new RawMaterial("ss3dAdditive13", RawMaterialType.MAJOR_ADDITION(), RawMaterialForm.PEBBLES(), 6, 16800, b, d, 1)),EafLog.Model.auditData.additions.ss3dAdditive13 = {
                    name: gt_eng("ss3dAdditive13"),
                    qty: 0
                },b = new ChemicalComposition(Elements.V),b.addData(Elements.AL, .0123),b.addData(Elements.C, .0025),b.addData(Elements.P, 31e-5),b.addData(Elements.S, 18e-5),b.addData(Elements.SI, .0072),b.addData(Elements.FE, .18931),a.push(new RawMaterial("ss3dAdditive15", RawMaterialType.MAJOR_ADDITION(), RawMaterialForm.PEBBLES(), 3.5, 8400, b, d, 1)),EafLog.Model.auditData.additions.ss3dAdditive15 = {
                    name: gt_eng("ss3dAdditive15"),
                    qty: 0
                },b = new ChemicalComposition(Elements.AL),b.addData(Elements.CU, 3e-4),b.addData(Elements.FE, .0082),a.push(new RawMaterial("ss3dAdditive11", RawMaterialType.MAJOR_ADDITION(), RawMaterialForm.PEBBLES(), 2.4, 1400, b, d, 1)),EafLog.Model.auditData.additions.ss3dAdditive11 = {
                    name: gt_eng("ss3dAdditive11"),
                    qty: 0
                },b = new ChemicalComposition(Elements.C),b.addData(Elements.S, 11e-5),b.addData(Elements.FE, 89e-5),a.push(new RawMaterial("Carbon", RawMaterialType.MAJOR_ADDITION(), RawMaterialForm.PEBBLES(), 1, 280, b, d, 1)),EafLog.Model.auditData.additions.Carbon = {
                    name: gt_eng("Carbon"),
                    qty: 0
                },b = new ChemicalComposition(Elements.FE),b.addData(Elements.CA, .0014),b.addData(Elements.CR, .2003),b.addData(Elements.MN, .0444),b.addData(Elements.NI, .112),b.addData(Elements.P, 19e-5),b.addData(Elements.S, 1e-5),b.addData(Elements.SI, .0091),b.addData(Elements.TI, 3e-5),c = new ChemicalComposition(Compounds.FEO),c.addData(Compounds.CAO, .43),c.addData(Compounds.MGO, .02),c.addData(Compounds.MNO, .05),c.addData(Compounds.P, 19e-5),c.addData(Compounds.S, 1e-5),a.push(new RawMaterial("eafAdditive05", RawMaterialType.BASKET(), RawMaterialForm.POWDER(), .9, -120, b, c, .2)),EafLog.Model.auditData.rawMaterials.eafAdditive05 = {
                    name: gt_eng("eafAdditive05"),
                    qty: 0
                },b = new ChemicalComposition(Elements.FE),b.addData(Elements.CR, .0025),b.addData(Elements.MO, .001),b.addData(Elements.P, 35e-5),b.addData(Elements.PB, .00157),b.addData(Elements.S, .008),b.addData(Elements.C, .005),b.addData(Elements.SI, .006),b.addData(Elements.NI, .0025),b.addData(Elements.CU, .0035),b.addData(Elements.SN, 2e-4),b.addData(Elements.MN, .006),c = new ChemicalComposition(Compounds.FEO),c.addData(Compounds.AL2O3, .03436),c.addData(Compounds.CAO, .1031),c.addData(Compounds.MGO, .0722),c.addData(Compounds.MNO, .0355),c.addData(Compounds.SIO2, .1096),c.addData(Compounds.P, 3e-6),c.addData(Compounds.S, 113e-7),a.push(new RawMaterial("eafAdditive06", RawMaterialType.BASKET(), RawMaterialForm.VERY_FINE_SCRAP(), 1, 110, b, c, .8)),EafLog.Model.auditData.rawMaterials.eafAdditive06 = {
                    name: gt_eng("eafAdditive06"),
                    qty: 0
                },b = new ChemicalComposition(Elements.FE),b.addData(Elements.C, .0065),b.addData(Elements.CR, .002),b.addData(Elements.CU, 6e-4),b.addData(Elements.MN, .0061),b.addData(Elements.MO, .001),b.addData(Elements.NI, .0025),b.addData(Elements.P, 19e-5),b.addData(Elements.S, 2e-5),b.addData(Elements.SI, .004),b.addData(Elements.V, 5e-4),c = new ChemicalComposition(Compounds.FEO),c.addData(Compounds.P, 19e-5),c.addData(Compounds.S, 2e-5),a.push(new RawMaterial("eafAdditive07", RawMaterialType.BASKET(), RawMaterialForm.POWDER(), 1.6, 0, b, c, .1)),c = new ChemicalComposition(Compounds.FEO),c.addData(Compounds.AL2O3, .003),c.addData(Compounds.CAO, .005),c.addData(Compounds.MGO, .001),c.addData(Compounds.P, 1e-5),a.push(new RawMaterial("eafAdditive08", RawMaterialType.BASKET(), RawMaterialForm.POWDER(), 1.8, 140, e, c, 0)),EafLog.Model.auditData.additions.eafAdditive08 = {
                    name: gt_eng("eafAdditive08"),
                    qty: 0
                },c = new ChemicalComposition(Compounds.CAF2),c.addData(Compounds.CAO, .2),c.addData(Compounds.MGO, .2),c.addData(Compounds.SIO2, .2),c.addData(Compounds.P, 1e-5),c.addData(Compounds.S, 6e-4),a.push(new RawMaterial("eafAdditive09", RawMaterialType.SLAG, RawMaterialForm.POWDER(), 1, 180, e, c, 0)),EafLog.Model.auditData.additions.eafAdditive09 = {
                    name: gt_eng("eafAdditive09"),
                    qty: 0
                },c = new ChemicalComposition(Compounds.CAO),c.addData(Compounds.MGO, .385),c.addData(Compounds.SIO2, .02),c.addData(Compounds.P, 5e-5),c.addData(Compounds.S, .0015),a.push(new RawMaterial("eafAdditive10", RawMaterialType.SLAG, RawMaterialForm.POWDER(), 1, 120, e, c, 0)),EafLog.Model.auditData.additions.eafAdditive10 = {
                    name: gt_eng("eafAdditive10"),
                    qty: 0
                },c = new ChemicalComposition(Compounds.CAO),c.addData(Compounds.AL2O3, .012),c.addData(Compounds.MGO, .018),c.addData(Compounds.SIO2, .021),c.addData(Compounds.P, 1e-4),c.addData(Compounds.S, 1e-4),a.push(new RawMaterial("lime", RawMaterialType.SLAG, RawMaterialForm.POWDER(), 1, 120, e, c, 0)),EafLog.Model.auditData.additions.lime = {
                    name: gt_eng("lime"),
                    qty: 0
                },b = new ChemicalComposition(Elements.FE),b.addData(Elements.MN, .765),b.addData(Elements.C, .067),b.addData(Elements.SI, .01),b.addData(Elements.S, 3e-4),b.addData(Elements.P, .003),a.push(new RawMaterial("ss3dAdditive2", RawMaterialType.MAJOR_ADDITION(), RawMaterialForm.PEBBLES(), 4, 350, b, d, 1)),EafLog.Model.auditData.additions.ss3dAdditive2 = {
                    name: gt_eng("ss3dAdditive2"),
                    qty: 0
                },b = new ChemicalComposition(Elements.FE),b.addData(Elements.MN, .815),b.addData(Elements.C, .0085),b.addData(Elements.SI, .005),b.addData(Elements.S, .001),b.addData(Elements.P, .0025),a.push(new RawMaterial("ss3dAdditive3", RawMaterialType.MAJOR_ADDITION(), RawMaterialForm.PEBBLES(), 4, 600, b, d, 1)),EafLog.Model.auditData.additions.ss3dAdditive3 = {
                    name: gt_eng("ss3dAdditive3"),
                    qty: 0
                }
            }, h = function (a) {
                switch (a) {
                    case"student":
                        return gt("UniversityStudent");
                    case"worker":
                        return gt("SteelIndustryTechnical")
                }
            }, j = function (a) {
                switch (a) {
                    case"student":
                        return gt_eng("UniversityStudent");
                    case"worker":
                        return gt_eng("SteelIndustryTechnical")
                }
            }, k = function (a, b) {
                var c, d, e, f;
                c = new ChemicalComposition(Elements.FE), c.addData(Elements.C, .001), c.addData(Elements.SI, .001), c.addData(Elements.MN, .01), c.addData(Elements.P, 0), c.addData(Elements.S, 0), c.addData(Elements.CR, 0), c.addData(Elements.B, 0), c.addData(Elements.CA, 0), c.addData(Elements.CU, 0), c.addData(Elements.NI, 0), c.addData(Elements.NB, 0), c.addData(Elements.TI, 0), c.addData(Elements.V, 0), c.addData(Elements.MO, 0), c.addData(Elements.CA, 0), c.addData(Elements.N, 0), d = new ChemicalComposition(Elements.FE), d.addData(Elements.C, .0012), d.addData(Elements.SI, .003), d.addData(Elements.MN, .015), d.addData(Elements.P, 2e-4), d.addData(Elements.S, 3e-4), d.addData(Elements.CR, .001), d.addData(Elements.B, 5e-6), d.addData(Elements.CA, 1e-5), d.addData(Elements.CU, .0015), d.addData(Elements.NI, .0015), d.addData(Elements.NB, 5e-4), d.addData(Elements.TI, 1e-4), d.addData(Elements.V, 1e-4), d.addData(Elements.MO, 4e-4), d.addData(Elements.CA, 0), d.addData(Elements.N, 5e-5), a.push(new SteelGrade(0, "CON", gt("ccConstructionSteel"), gt_eng("ccConstructionSteel"), c, d, 80, 1630, 1660, 2e4)), b.push(new SteelGrade(0, "CON", gt("ccConstructionSteel"), gt_eng("ccConstructionSteel"), c, d, 80, 1630, 1660, 2e4)), c = new ChemicalComposition(Elements.FE), c.addData(Elements.C, 5e-4), c.addData(Elements.SI, 0), c.addData(Elements.MN, .0065), c.addData(Elements.P, 0), c.addData(Elements.S, 0), c.addData(Elements.CR, 0), c.addData(Elements.B, 0), c.addData(Elements.CA, 0), c.addData(Elements.CU, 0), c.addData(Elements.NI, 0), c.addData(Elements.NB, 0), c.addData(Elements.TI, 0), c.addData(Elements.V, 0), c.addData(Elements.MO, 0), c.addData(Elements.N, 0), d = new ChemicalComposition(Elements.FE), d.addData(Elements.C, .001), d.addData(Elements.SI, .001), d.addData(Elements.MN, .0085), d.addData(Elements.P, 6e-4), d.addData(Elements.S, 2e-4), d.addData(Elements.CR, 5e-4), d.addData(Elements.B, 5e-5), d.addData(Elements.CA, 1e-5), d.addData(Elements.CU, 8e-4), d.addData(Elements.NI, 8e-4), d.addData(Elements.NB, 3e-4), d.addData(Elements.TI, 35e-5), d.addData(Elements.V, 0), d.addData(Elements.MO, 1e-4), d.addData(Elements.N, 4e-5), a.push(new SteelGrade(1, "ULC", gt("ccUltralowCarbonSteel"), gt_eng("ccUltralowCarbonSteel"), c, d, 80, 1665, 1695, 2e4)), b.push(new SteelGrade(1, "ULC", gt("ccUltralowCarbonSteel"), gt_eng("ccUltralowCarbonSteel"), c, d, 80, 1665, 1695, 2e4)), c = new ChemicalComposition(Elements.FE), c.addData(Elements.C, 4e-4), c.addData(Elements.SI, .001), c.addData(Elements.MN, .009), c.addData(Elements.P, 0), c.addData(Elements.S, 0), c.addData(Elements.CR, 0), c.addData(Elements.B, 0), c.addData(Elements.CA, 0), c.addData(Elements.CU, 0), c.addData(Elements.NI, 0), c.addData(Elements.NB, 0), c.addData(Elements.TI, 0), c.addData(Elements.V, 0), c.addData(Elements.MO, 0), c.addData(Elements.N, 0), d = new ChemicalComposition(Elements.FE), d.addData(Elements.C, 6e-4), d.addData(Elements.SI, .003), d.addData(Elements.MN, .011), d.addData(Elements.P, 65e-6), d.addData(Elements.S, 1e-4), d.addData(Elements.CR, 6e-4), d.addData(Elements.B, 5e-5), d.addData(Elements.CA, 5e-5), d.addData(Elements.CU, 6e-4), d.addData(Elements.NI, 5e-4), d.addData(Elements.NB, 18e-5), d.addData(Elements.TI, 1e-4), d.addData(Elements.V, 1e-4), d.addData(Elements.MO, 1e-4),d.addData(Elements.N, 45e-6),a.push(new SteelGrade(2, "LPS", gt("ccLinepipeSteel"), gt_eng("ccLinepipeSteel"), c, d, 90, 1655, 1685, 2e4)),b.push(new SteelGrade(2, "LPS", gt("ccLinepipeSteel"), gt_eng("ccLinepipeSteel"), c, d, 90, 1655, 1685, 2e4)),c = new ChemicalComposition(Elements.FE),c.addData(Elements.C, .0105),c.addData(Elements.SI, .001),c.addData(Elements.MN, .0015),c.addData(Elements.P, 0),c.addData(Elements.S, 0),c.addData(Elements.CR, .01),c.addData(Elements.CU, 0),c.addData(Elements.NI, 0),c.addData(Elements.NB, 0),c.addData(Elements.MO, 0),c.addData(Elements.AL, 0),c.addData(Elements.TI, 0),c.addData(Elements.V, 0),d = new ChemicalComposition(Elements.FE),d.addData(Elements.C, .0115),d.addData(Elements.SI, .0015),d.addData(Elements.MN, .0025),d.addData(Elements.P, 25e-5),d.addData(Elements.S, .001),d.addData(Elements.CR, .0135),d.addData(Elements.CU, .0015),d.addData(Elements.NI, .001),d.addData(Elements.NB, 1e-4),d.addData(Elements.MO, .001),d.addData(Elements.AL, 35e-6),d.addData(Elements.TI, 25e-5),d.addData(Elements.V, 6e-4),e = new ChemicalComposition(Elements.FE),e.addData(Elements.C, .0105),e.addData(Elements.SI, .001),e.addData(Elements.MN, .0015),e.addData(Elements.P, 0),e.addData(Elements.S, 0),e.addData(Elements.CR, .01),e.addData(Elements.CU, 0),e.addData(Elements.NI, 0),e.addData(Elements.NB, 0),e.addData(Elements.MO, 0),e.addData(Elements.AL, 0),e.addData(Elements.TI, 0),e.addData(Elements.V, 0),f = new ChemicalComposition(Elements.FE),f.addData(Elements.C, .0115),f.addData(Elements.SI, .0015),f.addData(Elements.MN, .0025),f.addData(Elements.P, 25e-5),f.addData(Elements.S, .001),f.addData(Elements.CR, .0135),f.addData(Elements.CU, .0015),f.addData(Elements.NI, .001),f.addData(Elements.NB, 1e-4),f.addData(Elements.MO, .001),f.addData(Elements.AL, 3e-5),f.addData(Elements.TI, 25e-5),f.addData(Elements.V, 6e-4),a.push(new SteelGrade(3, "ENG", gt("ccEngineeringSteel"), gt_eng("ccEngineeringSteel"), c, d, 80, 1630, 1660, 2e4)),b.push(new SteelGrade(3, "ENG", gt("ccEngineeringSteel"), gt_eng("ccEngineeringSteel"), e, f, 80, 1630, 1660, 2e4))
            }, l = function () {
                Highcharts.setOptions({
                    chart: {
                        animation: !1,
                        resetZoomButton: {
                            theme: {
                                fill: "white",
                                stroke: "silver",
                                r: 0,
                                states: {hover: {fill: "#41739D", style: {color: "white"}}}
                            }
                        }
                    },
                    plotOptions: {
                        spline: {marker: {enabled: !1}},
                        series: {marker: {states: {hover: {radius: 4}}}, states: {hover: {halo: {size: 8}}}}
                    },
                    credits: {enabled: !1},
                    legend: {align: "right", layout: "vertical", verticalAlign: "middle", itemStyle: {paddingBottom: 20}},
                    yAxis: {gridLineDashStyle: "Dash", minorTickInterval: "auto", minorTickLength: 0}
                }), s.Model.graphs.steelCompositionGraph = new Highcharts.Chart({
                    chart: {
                        type: "spline",
                        renderTo: "steel_composition_graph",
                        zoomType: "x"
                    },
                    legend: {itemStyle: {paddingBottom: 10}},
                    title: {text: null},
                    tooltip: {shared: !0, valueDecimals: 2},
                    series: [{name: "Si", id: "Si", data: [0]}, {name: "C", id: "C", data: [0]}, {
                        name: "Cr",
                        id: "Cr",
                        data: [0]
                    }, {name: "Al", id: "Al", data: [0]}, {name: "P", id: "P", yAxis: 1, data: [0]}, {
                        name: "S",
                        id: "S",
                        yAxis: 1,
                        data: [0]
                    }],
                    xAxis: {title: {text: "T[min]"}, min: 0, minRange: 10},
                    yAxis: [{title: {text: "[Wt%] Si C Cr Al"}, max: 2, min: 0}, {
                        title: {text: "[Wt%] S P"},
                        max: .05,
                        min: 0
                    }]
                }), s.Model.graphs.slagCompositionGraph = new Highcharts.Chart({
                    chart: {
                        type: "spline",
                        renderTo: "slag_composition_graph",
                        zoomType: "x"
                    },
                    legend: {itemStyle: {paddingBottom: 15}},
                    title: {text: null},
                    tooltip: {shared: !0, valueDecimals: 2},
                    series: [{name: "SiO2", id: "SiO2", data: [0]}, {name: "FeO", id: "FeO", data: [0]}, {
                        name: "CaO",
                        id: "CaO",
                        data: [0]
                    }, {name: "MgO", id: "MgO", data: [0]}, {
                        name: gt("basicity"),
                        id: "Basicity",
                        data: [0],
                        yAxis: 1,
                        color: Highcharts.getOptions().colors[4]
                    }],
                    xAxis: {title: {text: "T[min]"}, min: 0, minRange: 10},
                    yAxis: [{
                        title: {text: "Wt%", offset: 35},
                        max: 100,
                        min: 0,
                        offset: -10
                    }, {
                        title: {text: gt("basicity"), offset: 35, style: {color: Highcharts.getOptions().colors[4]}},
                        labels: {style: {color: Highcharts.getOptions().colors[4]}},
                        max: 10,
                        min: 0,
                        offset: 25
                    }]
                }), s.Model.graphs.powerTimeGraph = new Highcharts.Chart({
                    chart: {
                        type: "spline",
                        renderTo: "power_time_graph",
                        zoomType: "x"
                    },
                    title: {text: null},
                    tooltip: {shared: !0, valueDecimals: 2},
                    series: [{name: gt("Power"), id: "power", data: [0]}, {
                        name: gt("Temperature"),
                        id: "temperature",
                        data: [0],
                        yAxis: 1
                    }],
                    xAxis: {title: {text: "T[min]"}, min: 0, minRange: 10},
                    yAxis: [{
                        title: {text: gt("Power") + " [MW]"},
                        max: 120,
                        min: 0
                    }, {title: {text: gt("Temperature") + " [\xbaC]"}, min: 0, max: 1800, tickInterval: 450}]
                })
            }, m = function () {
                l();
                var b = this.getUserLevelNameEnglish(this.Model.selectedUserLevel);
                this.Model.selectedUserLevel = this.getUserLevelName(this.Model.selectedUserLevel), EafLog.storeMsg(Timer.getTime(), gt("eafSelectedLevel") + ": " + this.Model.selectedUserLevel, gt_eng("eafSelectedLevel") + ": " + b), EafLog.storeMsg(Timer.getTime(), gt("autoFinal2") + ": " + this.Model.targetSteelGrade.name, gt_eng("autoFinal2") + ": " + this.Model.targetSteelGrade.nameEnglish);
                for (var c = 0; c < this.Model.scrapBasketArray.length; c++) a("#basket" + (c + 1) + "_scrap").css("top", 127 - 127 * this.Model.scrapBasketArray[c].getContentsVolume() / this.Model.scrapBasketArray[c].TOTAL_BASKET_CAPACITY);
                Timer.start(), Challenge.start({costBreakdown: EafLog.getCostBreakdown()})
            }, n = function (e, f) {
                var g = d, h = "", j = "", k = !0;
                for (i = 0; i < g.length; i++) {
                    tempCurrent = parseFloat(e[g[i].index]), tempMin = s.Model.targetSteelGrade.minimumComposition.getFraction(g[i].symbol), -1 == tempMin && (tempMin = 0), tempMax = s.Model.targetSteelGrade.maximumComposition.getFraction(g[i].symbol), -1 == tempMax && (tempMax = 1);
                    var l = tempCurrent >= tempMin && tempCurrent <= tempMax, m = l ? "check" : "times";
                    k = k && l, j += g[i].symbol + ": " + (100 * tempCurrent).toFixed(5) + "\n", h += "<tr><td>" + g[i].symbol + (g[i].isReducable ? "*" : "") + "</td>", h += tempCurrent > 0 ? "<td>" + (100 * tempCurrent).toFixed(5) + "</td>" : "<td></td>", h += tempMin > 0 || tempMax < 1 ? '<td><span class="fa fa-' + m + '-circle fa-2x"></span></td>' : "<td></td>", h += tempMin > 0 ? "<td>" + (100 * tempMin).toFixed(4) + "</td>" : "<td></td>", h += tempMax < 1 ? "<td>" + (100 * tempMax).toFixed(4) + "</td></tr>" : "<td></td></tr>"
                }
                a("#analysis_results_body tbody").html(h), f ? (c = k, b = j, a("#analysis_results_body tfoot").html(""), a("#analysis_results_title").html(gt("eaf_FinSteelComp") + " / wt%"), a("#analysis_message").html(""), a("#analysis_results_button").css("display", "none")) : a("#analysis_results_body tfoot").html("<tr class=analysis_results_table_time><td colspan=5>" + gt("AnalysisTime") + ": " + Furnace.Model.requestTime + "</td></tr>")
            }, o = function (b) {
                var c = 0, d = 0, g = e, h = "", j = "fa-check-circle";
                for (i = 0; i < g.length; i++) {
                    var k = parseFloat(100 * b[g[i].index]).toFixed(4), l = "", m = "", n = "";
                    "MgO" === g[i].symbol && (l = "check", m = 8, n = 12, (m > k || k > n) && (l = "times", f = !1)), "FeO" === g[i].symbol && (l = "check", m = 10, n = 50, (m > k || k > n) && (l = "times", f = !1)), "times" === l && (j = "fa-times-circle"), "SiO2" === g[i].symbol && (c = k), "CaO" === g[i].symbol && (d = k), h += "<tr><td>" + g[i].symbol + "</td>", h += "<td>" + k + "</td>", h += "" !== l ? '<td><span class="fa fa-' + l + '-circle fa-2x"></span></td>' : "<td></td>", h += "<td>" + m + "</td>", h += "<td>" + n + "</td></tr>"
                }
                basicity = d / c || 0, m = 1.5, n = 2.5, basicity < m || basicity > n ? (l = "times", f = !1, j = "fa-times-circle") : l = "check", h += "<tr><td>" + gt("basicity") + "</td>", h += "<td>" + basicity.toFixed(4) + "</td>", h += "" !== l ? '<td><span class="fa fa-' + l + '-circle fa-2x"></span></td>' : "<td></td>", h += "<td>" + m + "</td>", h += "<td>" + n + "</td></tr>", a("#slag_composition_table tbody").html(h), a(document.getElementById("final_results_slag_img")).addClass(j)
            }, p = function () {
                var b = 0;
                n(EafLog.Model.finalSteelComposition, !0), o(EafLog.Model.finalSlagComposition);
                var d = this.Model.targetSteelGrade.maximumTime, e = d, g = Math.floor(d / 60);
                d = Math.floor(d % 60), a("#final_results_target_time").html(g + "H:" + d + "M");
                var h = Timer.Model.totalSeconds;
                d = Math.floor(h / 60), EafLog.Model.auditData.duration = d, e -= d, g = Math.floor(d / 60), d = "0" + Math.floor(d % 60), d = d.substr(d.length - 2, 2), a("#final_results_actual_time").html(g + "H:" + d + "M"), 0 > e && (a("#final_results_time_img").removeClass("fa-check-circle").addClass("fa-times-circle "), b++), c || (a("#final_results_composition_img").removeClass("fa-check-circle").addClass("fa-times-circle "), b++), f || (a("#final_results_slag_img").removeClass("fa-check-circle").addClass("fa-times-circle "), b++), a("#final_results_target_temperature").html(this.Model.targetSteelGrade.minimumTemperature + "-" + this.Model.targetSteelGrade.maximumTemperature + " &deg;C"), finalSteelTemperature = Math.round(Furnace.Model.steel.getTemperature() - 273), a("#final_results_actual_temperature").html(finalSteelTemperature + " &deg;C"), (finalSteelTemperature > this.Model.targetSteelGrade.maximumTemperature || finalSteelTemperature < this.Model.targetSteelGrade.minimumTemperature) && (a("#final_results_temperature_img").removeClass("fa-check-circle").addClass("fa-times-circle "), b++);
                var i = EafLog.getTotalCost(), j = EafLog.Model.finalSteelMass, k = Math.round(100 * i / (j / 1e3)) / 100,
                    l = Furnace.getTotalAddedElectricEnergy() / 36e5;
                EafLog.Model.auditData.totalCost = i;
                var m = Furnace.getCO2Total();
                a("#final_results_target_CO2").html("0-" + this.Model.targetSteelGrade.maxCO2 + " Kg CO<sub>2</sub>"), a("#final_results_CO2").html(m.toFixed(2) + " Kg CO<sub>2</sub>"), m > this.Model.targetSteelGrade.maxCO2 && (a("#final_results_CO2_img").removeClass("fa-check-circle").addClass("fa-times-circle "), b++), a("#final_results_actual_energy").html(Math.round(l) + " kWh<br>($" + Math.round(l / (j / 1e3)) + " kWh/t)");
                var p = (j / 1e3).toFixed(0);
                a("#final_results_target_mass").html("80-110 " + gt("tonnes")), document.getElementById("final_results_actual_mass").innerHTML = p + " " + gt("tonnes"), (p > 110 || 80 > p) && (a("#final_results_mass_img").removeClass("fa-check-circle").addClass("fa-times-circle "), b++);
                var r = EafLog.getPowerCost(), s = EafLog.Model.scrapCost, t = EafLog.Model.additionsCost,
                    u = EafLog.getConsumablesCost();
                a("#final_results_power_cost").html("$" + Math.round(r)), a("#final_results_scrap_cost").html("$" + Math.round(s)), a("#final_results_additions_cost").html("$" + Math.round(t)), a("#final_results_other_cost").html("$" + Math.round(u)), a("#final_results_total_cost").html("$" + Math.round(i) + "<br>($" + k.toFixed(2) + "/t)"), q(0), costBreakdown = "Power: $" + r + "\nScrap: $" + s + "\nAdditions: $" + t + "\nConsumables: $" + u, EafLog.Model.auditData.steelMass = j, EafLog.Model.auditData.steelComposition = EafLog.Model.finalSteelComposition, EafLog.Model.auditData.slagMass = EafLog.Model.finalSlagMass, EafLog.Model.auditData.slagComposition = EafLog.Model.finalSlagComposition, EafLog.Model.auditData.tappingTemperature = finalSteelTemperature, EafLog.Model.auditData.totalEnergy = Furnace.getTotalAddedElectricEnergy(), EafLog.Model.auditData.energyBalance = Furnace.getEnergyBalance(), EafLog.Model.auditData.emissions = Furnace.getCO2Total(), Challenge.finish(EafLog.getCostBreakdown(), k, EafLog.getAuditData(), Boolean(0 == b)), Page.gotoView("final_results")
            }, q = function (b) {
                for (var c = [], d = 0, e = 0, f = 0, g = a("td.results_total_mass span.value"), h = a("td.results_total_volume span.value"), i = a("td.results_total_cost span.value"), j = a("td.results_cost_per_tonne span.value"), k = new Array(Elements.getElementArrayCount()), l = 0, m = 0; m < k.length; m++) k[m] = 0;
                if (a("table.results_materials").find("span.value").html("0"), a("table.results_composition").find("td.value").html("0.000"), 0 == b) for (var m = 0; m < s.Model.scrapBasketArray.length; m++) c = c.concat(s.Model.scrapBasketContentsSummary[m]); else c = s.Model.scrapBasketContentsSummary[b - 1];
                for (var m = 0; m < c.length; m++) {
                    var n = c[m].mass, o = c[m].mass / c[m].rawMaterial.bulkDensity,
                        p = c[m].mass * c[m].rawMaterial.unitCost,
                        q = a("table.results_materials tr." + c[m].rawMaterial.name + " td.mass span.value"),
                        r = a("table.results_materials tr." + c[m].rawMaterial.name + " td.volume span.value"),
                        t = a("table.results_materials tr." + c[m].rawMaterial.name + " td.cost span.value");
                    d += n, e += o, f += p, q.html(parseFloat(q.html()) + n), r.html(Math.round(parseFloat(r.html()) + o)), t.html(parseFloat(t.html()) + p);
                    var u = c[m].rawMaterial.metalFraction, v = n * u, w = c[m].rawMaterial.metalComposition_array;
                    l += v;
                    for (var x = 0; x < w.length; x++) k[x] += v * w[x]
                }
                g.html(d), h.html(Math.round(e)), i.html(f), j.html(Math.round(f / d));
                for (var m = 0; m < k.length; m++) l > 0 ? k[m] *= 100 / l : k[m] = 0;
                for (var m = 0; m < s.Model.displayElements_array.length; m++) {
                    var y = s.Model.displayElements_array[m].index,
                        z = s.Model.displayElements_array[m].symbol.toLowerCase();
                    a(".composition_" + z + "_result").html(parseFloat(k[y]).toFixed(3))
                }
            }, r = M({
                rawMaterialsArray: [],
                steelGradesArrayStudent: [],
                steelGradesArrayIndustry: [],
                scrapBasketArray: [],
                scrapBasketContentsSummary: [],
                graphs: new Object,
                targetSteelGrade: null,
                selectedUserLevel: null,
                displayElements_array: [Elements.C, Elements.SI, Elements.MN, Elements.P, Elements.S, Elements.CR, Elements.MO, Elements.NI, Elements.NB, Elements.CU, Elements.TI, Elements.AL, Elements.V],
                init: function () {
                    g(this.rawMaterialsArray), k(this.steelGradesArrayStudent, this.steelGradesArrayIndustry), this.targetSteelGrade = this.steelGradesArrayStudent[1], this.scrapBasketArray.push(M(new ScrapBasket(1))), this.scrapBasketArray.push(M(new ScrapBasket(2))), this.scrapBasketArray.push(M(new ScrapBasket(3))), this.scrapBasketArray[0].nextBasket = this.scrapBasketArray[1], this.scrapBasketArray[1].nextBasket = this.scrapBasketArray[2]
                }
            }), s = {
                simulationStart: m,
                getUserLevelName: h,
                getUserLevelNameEnglish: j,
                displayFinalResults: p,
                executeSteelCompositionAnalysis: n,
                Model: r
            };
        window.Eaf = s, a(".open-analysis-results").on("click", function (a) {
            EafView.displayAnalysisResults(), a.preventDefault()
        }), a(".take-sample").on("click", function (a) {
            Furnace.requestAnalysis(), a.preventDefault()
        }), a("section#final_results div.tabber a.button").click(function (b) {
            var c = a(this).attr("class"), d = c.substr(c.indexOf("results_contents_"), 19);
            a("section#final_results div.tabber a.button").removeClass("hover"), a("." + d).addClass("hover"), q(parseInt(d.slice(-1)))
        }), a("a[href='#additional_info']").click(function (a) {
            setTimeout(function () {
                s.Model.graphs.steelCompositionGraph.reflow(), s.Model.graphs.slagCompositionGraph.reflow(), s.Model.graphs.powerTimeGraph.reflow()
            }, 10)
        }), Timer.Model.on("change", function (a, b) {
            b.minutes && EafLog.storeLoggedValues(Math.floor(Timer.Model.totalSeconds / 60), Re.Model.currentPower, Math.round(Furnace.Model.steel.getTemperature() - 273), Furnace.Model.steel.getComposition().concat(), Furnace.Model.slag.getComposition().concat(), Math.round(Furnace.Model.steel.getTemperature() - 273), Furnace.Model.steel.getMass(), Furnace.Model.solid.getTotalMass(), getEnergyBalance())
        })
    })
}(jQuery), function (a) {
    "use strict";
    a(document).ready(function () {
        function b(a, b, c) {
            var d;
            return function () {
                var e = this, f = arguments, g = function () {
                    d = null, c || a.apply(e, f)
                }, h = c && !d;
                clearTimeout(d), d = setTimeout(g, b), h && a.apply(e, f)
            }
        }

        a("a[href='#step1']").prop("disabled", !0), a("a[href='#step1']").addClass("disabled"), a("a[href='#step2']").prop("disabled", !0), a("a[href='#step2']").addClass("disabled"), a("a[href='#step4']").prop("disabled", !0), a("a[href='#step4']").addClass("disabled"), a("a[href='#step5']").prop("disabled", !0), a("a[href='#step5']").addClass("disabled"), a("#scrap_yard_basket1").addClass("selected"), a("#scrap_yard_basket2").addClass("enabled");
        var c = a(".scrap_total_mass .value"), d = a(".scrap_total_cost .value"), e = a(".scrap_total_volume .value"),
            f = a(".scrap_cost_per_tonne .value"), g = 90, h = 100, i = new Array, j = !1, k = !1, l = 2.5, m = !1,
            n = !0, o = !1, p = function (b) {
                var c;
                switch (b) {
                    case"car":
                        c = 1;
                        break;
                    case"pipe":
                        c = 2;
                        break;
                    case"gear":
                        c = 3;
                        break;
                    default:
                        c = 0
                }
                a("#target_steel_grade").val(b), a("#step2 input[value=" + b + "]").prop("checked", !0), "UniversityStudent" === Eaf.Model.selectedUserLevel ? Eaf.Model.targetSteelGrade = Eaf.Model.steelGradesArrayStudent[c] : Eaf.Model.targetSteelGrade = Eaf.Model.steelGradesArrayIndustry[c], a("#step2").find(".description")[0].innerHTML = Eaf.Model.targetSteelGrade.description, a("dd.selected-steel-grade").html(gt(Eaf.Model.targetSteelGrade.name)), a("dd.temperature-required").html(Eaf.Model.targetSteelGrade.minimumTemperature + "-" + Eaf.Model.targetSteelGrade.maximumTemperature + "&deg;C"), a("div.objectives div.temperature span.value").html(Eaf.Model.targetSteelGrade.minimumTemperature + "-" + Eaf.Model.targetSteelGrade.maximumTemperature + "&deg;C"), a("dd.maximum-time").html(Math.floor(Eaf.Model.targetSteelGrade.maximumTime / 60) + "h " + Eaf.Model.targetSteelGrade.maximumTime % 60 + "m"), a("dd.maximum-emissions").html(Eaf.Model.targetSteelGrade.maxCO2 + " kg CO<sub>2</sub>"), a("div.objectives div.time span.value").html(Math.floor(Eaf.Model.targetSteelGrade.maximumTime / 60) + "h " + Eaf.Model.targetSteelGrade.maximumTime % 60 + "m"), q()
            }, q = function () {
                for (var b = Eaf.Model.targetSteelGrade.minimumComposition.componentArray, c = Eaf.Model.targetSteelGrade.maximumComposition.componentArray, d = 0; d < Math.max(b.length, c.length); d++) a(".composition_" + b[d].component.symbol.toLowerCase() + "_min").html((100 * b[d].fraction).toFixed(8).replace(/(\.[0-9]*?)0+$/, "$1").replace(/\.$/, "")), a(".composition_" + c[d].component.symbol.toLowerCase() + "_max").html(c[d].fraction > 0 ? (100 * c[d].fraction).toFixed(8).replace(/(\.[0-9]*?)0+$/, "$1").replace(/\.$/, "") : "");
                r()
            }, r = b(function () {
                var b = 0, j = 0, k = 0, l = 0, m = 0, n = new Array(Elements.getElementArrayCount()),
                    p = new Array(Compounds.getCompoundArrayCount());
                i = new Array, a(".scrap_mass").each(function () {
                    var c = parseInt(a(this).val());
                    0 > c && (c = 0, a(this).spnr("value", 0));
                    var d = a(this).attr("class"), e = parseInt(d.substr(d.indexOf(" rm") + 3, 2)),
                        f = a(this).attr("id").substr(0, a(this).attr("id").length - 5), g = Eaf.Model.rawMaterialsArray[e],
                        h = g.unitCost * c, k = Math.round(c / g.bulkDensity);
                    a("." + f + "_cost .value").html(h), a("." + f + "_volume .value").html(k), i.push(new RawMaterialAmount(g, c)), b += h, j += k
                });
                for (var q = 0; q < n.length; q++) n[q] = 0;
                for (var q = 0; q < p.length; q++) p[q] = 0;
                for (var q = 0; q < i.length; q++) {
                    var r = i[q].rawMaterial.metalFraction, s = i[q].mass * r, t = i[q].mass * (1 - r);
                    l += s, m += t;
                    for (var u = i[q].rawMaterial.metalComposition_array, v = 0; v < u.length; v++) n[v] += s * u[v];
                    u = i[q].rawMaterial.oxideComposition_array;
                    for (var v = 0; v < u.length; v++) p[v] += t * u[v]
                }
                for (var q = 0; q < n.length; q++) l > 0 ? n[q] *= 100 / l : n[q] = 0;
                for (var q = 0; q < Eaf.Model.displayElements_array.length; q++) {
                    var w = Eaf.Model.displayElements_array[q].index,
                        x = Eaf.Model.displayElements_array[q].symbol.toLowerCase(), y = parseFloat(n[w].toFixed(3)),
                        z = 100 * Eaf.Model.targetSteelGrade.minimumComposition.getFraction(x),
                        A = 100 * Eaf.Model.targetSteelGrade.maximumComposition.getFraction(x);
                    -100 == z && (z = 0), -100 == A && (A = 1), a(".composition_" + x + "_result").html(y.toFixed(3));
                    var B = y >= z && A >= y ? "check" : "times";
                    a(".composition_" + x + "_status").html('<span class="fa fa-' + B + '-circle fa-2x"></span>'), "times" == B ? z > y ? (a(".composition_" + x + "_action").removeClass("remove_material").addClass("add_material"), "c" === x && (o = !1)) : (a(".composition_" + x + "_action").removeClass("add_material").addClass("remove_material"), "c" === x && (o = !0)) : (a(".composition_" + x + "_action").removeClass("remove_material add_material"), "c" === x && (o = !1))
                }
                for (var q = 0; q < p.length; q++) p[q] *= 100 / m, isNaN(p[q]) && (p[q] = 0);
                var C = l > 0 ? b / l : 0;
                k = Math.round(l + m), c.html(k), d.html(Math.round(b)), e.html(Math.round(j)), f.html(Math.round(C));
                var D = k > g, E = j > h;
                D ? a(".scrap_total_mass").css("background-color", "red") : a(".scrap_total_mass").css("background-color", "inherit"), E ? a(".scrap_total_volume").css("background-color", "red") : a(".scrap_total_volume").css("background-color", "inherit"), !D && !E && l > 0 ? (a("a[href='#step4']").prop("disabled", !1), a("a[href='#step4']").removeClass("disabled")) : (a("a[href='#step4']").prop("disabled", !0), a("a[href='#step4']").addClass("disabled"))
            }, 150), s = b(function () {
                var b = a("div.scrap_yard_bin.main.selected .mass .value"),
                    c = a("div.scrap_yard_bin.main.selected .volume .value"),
                    d = a("div.scrap_yard_bin.main.selected .bin_image_wrapper .image"),
                    e = a("div.scrap_yard_basket.selected").siblings(".mass"),
                    f = a("div.scrap_yard_basket.selected").siblings(".volume"),
                    g = a("div.scrap_yard_basket.selected").siblings(".volume_limit"),
                    h = parseInt(a("div.scrap_yard_basket.selected").attr("id").replace("scrap_yard_basket", "")),
                    j = a("div.scrap_yard_bin.main.selected").attr("class"),
                    k = parseInt(j.substr(j.indexOf(" rm") + 3, 1)), o = i[k], p = Eaf.Model.scrapBasketArray[h - 1],
                    q = a("#transfer_mass").spnr("value");
                o.mass - q < 0 && (q = o.mass, a("#transfer_mass").spnr("value", o.mass));
                var r = q / o.rawMaterial.bulkDensity, s = Math.round(p.getContentsMass() + q),
                    t = Math.round(p.getContentsVolume() + r);
                b.html(o.mass - q), c.html(Math.round((o.mass - q) / o.rawMaterial.bulkDensity)), o.mass - q > 0 ? d.css("width", 20 + Math.round((o.mass - q) / o.rawMaterial.bulkDensity)) : d.css("width", 0);
                var u = Math.round(1e3 * (p.getContentsMass() + q) / SteelData.STEEL_DENSITY_LIQUID());
                if (1 == h) {
                    Eaf.Model.scrapBasketArray[1].unusableVolume = u, Eaf.Model.scrapBasketArray[2].unusableVolume = u;
                    var v = a("#scrap_yard_basket2").siblings(".volume_limit"),
                        w = a("#scrap_yard_basket3").siblings(".volume_limit");
                    v.children(".value").html(p.TOTAL_BASKET_CAPACITY - u), v.css("top", -11 + u * l), w.children(".value").html(p.TOTAL_BASKET_CAPACITY - u), w.css("top", -11 + u * l), n = 30 > t ? !0 : !1
                } else if (2 == h) {
                    Eaf.Model.scrapBasketArray[2].unusableVolume = Eaf.Model.scrapBasketArray[1].unusableVolume + u;
                    var w = a("#scrap_yard_basket3").siblings(".volume_limit");
                    w.children(".value").html(p.TOTAL_BASKET_CAPACITY - Eaf.Model.scrapBasketArray[2].unusableVolume), w.css("top", -11 + Eaf.Model.scrapBasketArray[2].unusableVolume * l)
                }
                if (e.children(".value").html(s), f.children(".value").html(t), t > p.TOTAL_BASKET_CAPACITY - p.unusableVolume) {
                    f.css("background-color", "red"), m = !0;
                    var x = parseFloat(g.css("top")) + 15;
                    e.css("top", x), f.css("top", x)
                } else f.css("background-color", "inherit"), m = !1, e.css("top", 100 - t * l), f.css("top", 100 - t * l);
                a("div.scrap_yard_basket.basket_content.selected :last-child").css("height", r * l);
                var y = 0, z = 0;
                a.each(Eaf.Model.scrapBasketArray, function (a, b) {
                    y += b.getContentsCost(), z += b.getContentsMass()
                }), y += q * o.rawMaterial.unitCost, z += q, a("#scrap_yard_total_cost").html(y), a("#scrap_yard_total_mass").html(z), z > 0 && !m ? (a("a[href='#step5']").prop("disabled", !1), a("a[href='#step5']").removeClass("disabled")) : (a("a[href='#step5']").prop("disabled", !0), a("a[href='#step5']").addClass("disabled"))
            }, 150), t = function () {
                var b = a("#transfer_mass").spnr("value");
                if (0 != b) {
                    var c = parseInt(a("div.scrap_yard_basket.selected").attr("id").replace("scrap_yard_basket", "")),
                        d = Eaf.Model.scrapBasketArray[c - 1], e = a("div.scrap_yard_bin.main.selected"),
                        f = e.attr("class"), g = parseInt(f.substr(f.indexOf(" rm") + 3, 1)), h = i[g];
                    h.addMass(-b), 0 == h.mass && e.removeClass("enabled"), d.confirmAddition(h.rawMaterial, b)
                }
            }, u = function (b) {
                for (var c = [], d = 0, e = 0, f = 0, g = a("td.summary_total_mass span.value"), h = a("td.summary_total_volume span.value"), i = a("td.summary_total_cost span.value"), j = a("td.summary_cost_per_tonne span.value"), k = new Array(Elements.getElementArrayCount()), l = 0, m = 0; m < k.length; m++) k[m] = 0;
                if (a("table.summary_materials").find("span.value").html("0"), a("table.summary_composition").find("td.result").html("0.000"), 0 == b) for (var m = 0; m < Eaf.Model.scrapBasketArray.length; m++) c = c.concat(Eaf.Model.scrapBasketArray[m].contentsArray); else c = Eaf.Model.scrapBasketArray[b - 1].contentsArray;
                for (var m = 0; m < c.length; m++) {
                    var n = c[m].mass, o = c[m].mass / c[m].rawMaterial.bulkDensity,
                        p = c[m].mass * c[m].rawMaterial.unitCost,
                        q = a("table.summary_materials tr." + c[m].rawMaterial.name + " td.mass span.value"),
                        r = a("table.summary_materials tr." + c[m].rawMaterial.name + " td.volume span.value"),
                        s = a("table.summary_materials tr." + c[m].rawMaterial.name + " td.cost span.value");
                    d += n, e += o, f += p, q.html(parseFloat(q.html()) + n), r.html(Math.round(parseFloat(r.html()) + o)), s.html(parseFloat(s.html()) + p);
                    var t = c[m].rawMaterial.metalFraction, u = n * t, v = c[m].rawMaterial.metalComposition_array;
                    l += u;
                    for (var w = 0; w < v.length; w++) k[w] += u * v[w]
                }
                g.html(d), h.html(Math.round(e)), i.html(f), j.html(Math.round(f / d));
                for (var m = 0; m < k.length; m++) l > 0 ? k[m] *= 100 / l : k[m] = 0;
                for (var m = 0; m < Eaf.Model.displayElements_array.length; m++) {
                    var x = Eaf.Model.displayElements_array[m].index,
                        y = Eaf.Model.displayElements_array[m].symbol.toLowerCase(), z = parseFloat(k[x].toFixed(3)),
                        A = 100 * Eaf.Model.targetSteelGrade.minimumComposition.getFraction(y),
                        B = 100 * Eaf.Model.targetSteelGrade.maximumComposition.getFraction(y);
                    -100 == A && (A = 0), -100 == B && (B = 1);
                    var C = z >= A && B >= z ? "check" : "times";
                    a(".composition_" + y + "_summary.result").html(z.toFixed(3)), a(".composition_" + y + "_summary.status").html('<span class="fa fa-' + C + '-circle fa-2x"></span>'), "times" == C ? A > z ? a(".composition_" + y + "_summary.action").removeClass("remove_material").addClass("add_material") : a(".composition_" + y + "_summary.action").removeClass("add_material").addClass("remove_material") : a(".composition_" + y + "_summary.action").removeClass("remove_material add_material")
                }
            };
        document.getElementById("target_steel_grade");
        a("#step1").on("change", function (b) {
            var c = b.target, d = a(this).find(".description")[0];
            switch (c.value) {
                case"student":
                    d.innerHTML = gt("ss3dStudentDescrip"), a("dd.selected-user-level").html(gt("UniversityStudent"));
                    break;
                case"worker":
                    d.innerHTML = gt("ss3dTechnicalDescrip"), a("dd.selected-user-level").html(gt("SteelIndustryTechnical"))
            }
            Eaf.Model.selectedUserLevel = c.value
        }), a("#step2 input").on("change", function (a) {
            p(a.target.value)
        }), a("a[href='#step3']").click(function (a) {
            p("gear")
        }), a(".raw-materials .clearform").on("click", function (b) {
            a(".scrap_mass").each(function () {
                a(this).val(0)
            }), r(), b.preventDefault()
        }), a(".raw-materials table").on("spnrspin", ".spinner", r).on("spnrstop", ".spinner", r), a("a[href='#step4']").click(function (b) {
            if (a("#step4").hasClass("active") || a(this).prop("disabled") || j) return void b.preventDefault();
            j || (j = !0, a("a[href='#step1']").prop("disabled", !0), a("a[href='#step1']").addClass("disabled"), a("a[href='#step2']").prop("disabled", !0), a("a[href='#step2']").addClass("disabled"), a("a[href='#step3']").prop("disabled", !0), a("a[href='#step3']").addClass("disabled"));
            var c = 0, d = !1;
            a(".scrap_mass").each(function () {
                var b = a(this).attr("id").replace("scrap_", "").replace("mass", "image"),
                    e = b.replace("image", "bin"),
                    f = Math.round(parseInt(a(this).val()) / i[c].rawMaterial.bulkDensity);
                if (a("#" + e + ".main .mass .value").html(a(this).val()), a("#" + e + ".main .volume .value").html(f), a("#" + e).parent().children(".scrap_yard_bin").removeClass("selected"), a(this).val() > 0) {
                    if (a("#" + b).css("width", 20 + 1.2 * f), a("#" + e).parent().children(".scrap_yard_bin").addClass("enabled"), !d) {
                        a("#" + e).parent().children(".scrap_yard_bin").addClass("selected"), d = !0, a("#transfer_mass").spnr("value", 0), a("#transfer_mass").spnr("option", "max", parseInt(a(this).val()));
                        var g = a("div.scrap_yard_bin.side_wall.selected").attr("class"),
                            h = g.indexOf("bg_primary") > 0 ? 11 : 13, j = g.substr(g.indexOf("bg_"), h);
                        a("div.scrap_yard_basket.basket_content.selected").append("<div class='" + j + "'></div>")
                    }
                } else a("#" + b).css("width", 0), a("#" + e).parent().children(".scrap_yard_bin").removeClass("enabled");
                c++
            })
        }), a("div.scrap_yard_bin.main").on("click", function (b) {
            if (!a(this).hasClass("selected") && a(this).hasClass("enabled")) {
                a("#transfer_mass").spnr("value") > 0 ? (t(), a("#transfer_mass").spnr("value", 0)) : a("div.scrap_yard_basket.basket_content.selected :last-child").remove(), a("div.scrap_yard_bin").removeClass("selected"), a(this).parent().children(".scrap_yard_bin").addClass("selected"), a("#transfer_mass").spnr("option", "max", parseInt(a("#" + a(this).attr("id") + " .mass .value").html()));
                var c = a("div.scrap_yard_bin.side_wall.selected").attr("class"),
                    d = c.indexOf("bg_primary") > 0 ? 11 : 13, e = c.substr(c.indexOf("bg_"), d);
                a("div.scrap_yard_basket.basket_content.selected").append("<div class='" + e + "'></div>")
            }
        }), a("div.scrap_yard_basket.main").on("click", function (b) {
            if (!(a(this).hasClass("selected") || m || n) && a(this).hasClass("enabled")) {
                a("#transfer_mass").spnr("value") > 0 ? (t(), a("#transfer_mass").spnr("value", 0)) : a("div.scrap_yard_basket.basket_content.selected :last-child").remove();
                var c = a(this).attr("id"), d = parseInt(c.substr(c.length - 1, 1));
                a(this).removeClass("enabled").children(".scrap_yard_basket").removeClass("enabled"), a(this).addClass("selected").children(".scrap_yard_basket").addClass("selected"), 2 == d && (a("#scrap_yard_basket" + (d - 1)).removeClass("selected").children(".scrap_yard_basket").removeClass("selected"), a("#scrap_yard_basket" + (d + 1)).addClass("enabled").children(".scrap_yard_basket").addClass("enabled")), 3 == d && a("#scrap_yard_basket" + (d - 1)).removeClass("selected").children(".scrap_yard_basket").removeClass("selected");
                var e = a("div.scrap_yard_bin.side_wall.selected").attr("class"),
                    f = e.indexOf("bg_primary") > 0 ? 11 : 13, g = e.substr(e.indexOf("bg_"), f);
                a("div.scrap_yard_basket.basket_content.selected").append("<div class='" + g + "'></div>");
                var h = 0, i = a("div.scrap_yard_bin.main.selected");
                i && (h = parseInt(a("div.scrap_yard_bin.main.selected .mass .value").html()), 0 == h && (i.removeClass("enabled"), a(a("div.scrap_yard_bin.main.enabled")[0]).trigger("click"), h = parseInt(a("div.scrap_yard_bin.main.selected .mass .value").html()))), a("#transfer_mass").spnr("option", "max", h)
            }
        }), a("#transfer_mass").on("spnrspin", s).on("spnrstop", s), a("a[href='#step5']").click(function (b) {
            return a(this).prop("disabled") || k ? void b.preventDefault() : (k = !0, t(), a("a[href='#step4']").prop("disabled", !0), a("a[href='#step4']").addClass("disabled"), void u(0))
        }), a("section#options div.tabber a.button").click(function (b) {
            var c = a(this).attr("class"), d = c.substr(c.indexOf("summary_contents_"), 18);
            a("section#options div.tabber a.button").removeClass("hover"), a("." + d).addClass("hover"), u(parseInt(d.slice(-1)))
        }), a("div.restart_simulator a").click(function (b) {
            a("dd.step5").removeClass("active"), a("dd.step5 div.content").removeClass("active"), a("dd.step1").addClass("active"), a("dd.step1 div.content").addClass("active"), a("a[href='#step1']").prop("disabled", !1), a("a[href='#step1']").removeClass("disabled"), a("a[href='#step2']").prop("disabled", !1), a("a[href='#step2']").removeClass("disabled"), a("a[href='#step3']").prop("disabled", !1), a("a[href='#step3']").removeClass("disabled"), a("a[href='#step4']").prop("disabled", !0), a("a[href='#step4']").addClass("disabled"), a("a[href='#step5']").prop("disabled", !0), a("a[href='#step5']").addClass("disabled"), j = !1, k = !1, a("#student_radio").trigger("click"), Eaf.Model.selectedUserLevel = "UniversityStudent", a("#beam_grade").trigger("click"), a(".raw-materials table").find(".spinner").spnr("value", 0), r(), a("div.scrap_yard_basket.basket_content").empty(), a("#transfer_mass").spnr("value", 0), a("#scrap_yard_basket1").removeClass("enabled").addClass("selected"), a(a("#scrap_yard_basket1").children(".scrap_yard_basket")).removeClass("enabled").addClass("selected"), a("#scrap_yard_basket2").removeClass("selected").addClass("enabled"), a(a("#scrap_yard_basket2").children(".scrap_yard_basket")).removeClass("selected").addClass("enabled"), a("#scrap_yard_basket3").removeClass("enabled selected"), a(a("#scrap_yard_basket3").children(".scrap_yard_basket")).removeClass("enabled selected");
            for (var c = 0; c < Eaf.Model.scrapBasketArray.length; c++) Eaf.Model.scrapBasketArray[c].contentsArray = [];
            s(), b.preventDefault()
        })
    })
}(jQuery), function (a) {
    var b = a("#additions"), c = a(".spinner.materials_additions"), d = a(".make-additions");
    refreshAdditionsTotals = function () {
        var b = 0, d = 0;
        c.each(function () {
            var c = parseFloat(a("#" + a(this).attr("id").replace("mass", "unit_cost") + " .value").html()),
                e = parseInt(a(this).val());
            0 > e && (e = 0, a(this).spnr("value", 0));
            var f = e * c / 1e3;
            a("#" + a(this).attr("id").replace("mass", "cost") + " .value").html(f.toFixed(2)), b += e, d += f
        }), a("#additions_total_mass .value").html(b), a("#additions_total_cost .value").html(d.toFixed(2)), b > 0 ? a("#additions_order_button").prop("disabled", !1) : a("#additions_order_button").prop("disabled", !0)
    }, clearAdditionsForm = function () {
        c.each(function () {
            a(this).spnr("value", 0)
        }), refreshAdditionsTotals()
    }, orderAdditions = function () {
        var b = new Array, d = gt("Additions") + ": ", e = gt_eng("Additions") + ": ", f = 0;
        c.each(function () {
            var c = parseInt(a(this).val());
            if (c > 0) {
                var g = a(this).attr("class"), h = parseInt(g.substr(g.indexOf(" rm") + 3, 2)),
                    i = Eaf.Model.rawMaterialsArray[h];
                b.push(new RawMaterialAmount(i, c / 1e3)), d += gt(i.name) + ": " + c + " kg; ", e += gt_eng(i.name) + ": " + c + " kg; ", EafLog.Model.auditData.additions[i.getName()].qty += c, f += c * i.unitCost / 1e3
            }
        }), d = d.slice(0, -2), e = e.slice(0, -2), f > 0 && (EafLog.storeMsg(Timer.getTime(), d, e), EafLog.addCost("additions", f), a("#material_addition.initial").removeClass("animate"), a("#material_addition.initial").addClass("animate"), Furnace.addBasket(b, 273))
    }, d.on("click", function (a) {
        return Re.Model.isRoofOpen ? (EafView.displayUserMessage(gt("eafRoofOpened"), gt("eafCloseRoof"), !0), void a.preventDefault()) : void b.foundation("reveal", "open")
    }), b.find(".clearform").on("click", function (a) {
        clearAdditionsForm(), a.preventDefault()
    }), b.find(".spinner").on("spnrspin", refreshAdditionsTotals).on("spnrstop", refreshAdditionsTotals), b.find("#additions_order_button").on("click", function (b) {
        orderAdditions(), clearAdditionsForm(), 0 === Re.Model.get("currentPower") ? EafView.displayUserMessage(gt("Additions"), gt("eaf_elecOn"), !0) : a("#popup").foundation("reveal", "close"), b.preventDefault()
    })
}(jQuery), function (a) {
    "use strict";
    a(document).ready(function () {
        a("#analysis_results_button").prop("disabled", !0);
        var b = a("#popup"), c = function (a, c, d) {
            d || b.addClass("to-final-results"), b.find(".popup-title")[0].innerHTML = a, b.find(".popup-body")[0].innerHTML = c, b.foundation("reveal", "open")
        }, d = function () {
            var b = "", c = !1;
            Furnace.Model.analysisPending ? (a("#analysis_results_body tbody").html(""), a("#analysis_results_body tfoot").html(""), b = gt("ss3dDialogF103Alert"), c = !0) : 0 == Furnace.Model.steel.mass ? (b = gt("eafNeedLiquidSteel"), c = !0) : void 0 != Furnace.Model.requestTime && (b = gt("eaf_RecentAnalysis"), c = !1), a("#analysis_message").html(b), a("#analysis_results_button").prop("disabled", c), a("#analysis_results").foundation("reveal", "open")
        }, e = M({
            init: function () {
            }
        }), f = {displayUserMessage: c, displayAnalysisResults: d, Model: e};
        window.EafView = f, b.on("closed", function () {
            b.hasClass("to-final-results") && (displayFinalResults(), b.removeClass("to-final-results"))
        })
    })
}(jQuery), function (a) {
    "use strict";
    a("button").on("mouseout", function () {
        this.blur()
    }), a(document).ready(function () {
        var b = Pager();
        b.on("goneto.page", function (b, c) {
            switch (c) {
                case"options":
                    a("a[href='#step3']").click();
                    break;
                case"simulator":
                    a(".drawer").removeClass("open");
                    for (var d = 0; d < Highcharts.charts.length; d++) Highcharts.charts[d].reflow();
                    for (var d = 0; d < Eaf.Model.scrapBasketArray.length; d++) {
                        for (var e = [], f = 0; f < Eaf.Model.scrapBasketArray[d].contentsArray.length; f++) {
                            var g = Eaf.Model.scrapBasketArray[d].contentsArray[f];
                            e.push(new RawMaterialAmount(g.rawMaterial, g.mass))
                        }
                        Eaf.Model.scrapBasketContentsSummary.push(e)
                    }
                    break;
                case"final_results":
                    a("#steel_composition_graph").appendTo(a(".steel-results")).css("height", 250), a("#slag_composition_graph").appendTo(a(".slag-results")).css("height", 250), a("#power_time_graph").appendTo(a(".power-time-results")).css("height", 250)
            }
        }).on("goto.page", function (a, b) {
            switch (b.next) {
                case"simulator":
                    Eaf.simulationStart()
            }
        }), window.Page = b, a(".spinner").spnr(), a(".slider").sldr(), a(document).foundation(), a(".info").infoTool()
    })
}(jQuery);