class Vehicle {
    model = 2015;
    type = 'car'

    //sinifin baslangic degerlerini beliremek icin kullanilir
    constructor(model) {
        this.model = model
    }

    //method / function
    getType = () => {
        return this.type
    }

    getModel() {
        return this.model
    }

    toString
}

//INSTANCE / ENSTANTANE
const v1 = new Vehicle(2010)
const v2 = new Vehicle(1990)

v1.getModel()
v2.getModel()
