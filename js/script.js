$(function(){

    function Phone(brand, price, color, ram, storage, screen, processor) {
        this.brand = brand;
        //by using this, the "brand" property of the object we create will assume the value of the brand argument
        this.price = price;
        this.color = color;
        this.ram = ram;
        this.storageCapacity = storage;
        this.screen = screen;
        this.processor = processor;
    }

    Phone.prototype.printInfo = function() {
        console.log("The phone brand is " + this.brand + ", color is " + this.color + ", the price is " + 
        + this.price + "£, the RAM is " + this.ram + "GB, the storage capacity is " + this.storageCapacity +
        + "GB, the screen is " + this.screen + " and the processor is " + this.processor + ".");
    }
    
    Phone.prototype.calling = function() {
        console.log("Phone is calling..")
    }

    var samsungGalaxyS6 = new Phone("Samsung", 174, "silver", 3, 32, 5.1,"Octa Core");
    var iPhone6S = new Phone("Apple", 261.9, "black", 2, 128, 4.7, "Dual Core");
    var onePlusOne = new Phone("One Plus", 662.49, "red", 6, 256, 6.2, "Octa Core");


    samsungGalaxyS6.printInfo();
    iPhone6S.printInfo();
    onePlusOne.printInfo();

    samsungGalaxyS6.calling();

});