class Car{
    constructor(carname,model,year){
        this.carname=carname;
        this.module=model;
        this.year=year
    }
    carAge(){
        let date=new Date();
        return date.getFullYear()-this.year;
    
    }
}

var myCar=new Car("Seat","Leon","2005")
console.log(myCar.carname,myCar.model,myCar.year);
console.log("car age is" ,myCar.carAge);