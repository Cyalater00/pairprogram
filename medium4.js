// Create a car object with the items: Make, Model, Year, Milage, and Color. Then create 3 methods in the object; A driveToWork method, driveAroundTheWorld method, and runErrands method. Each of these methods should affect the car’s mileage adding to it each time and console logging the old mileage and the new mileage.


let car = {
    make: "Ford",
    model: "Raptor",
    color: "Orange",
    mileage: 3000,
    isWorking: true,
    driveToWork: () => {
        alert(` Old Mileage: ${car.mileage}`);
        console.log(car.mileage);
        car.mileage = car.mileage + 8;
        alert(` New Mileage: ${car.mileage}`);
    },
    driveAroundTheWorld: () => {
        alert(`Old Mileage: ${car.mileage}`);
        car.mileage += 24000;
        alert(`New Mileage: ${car.mileage}`);
        alert(`TGhe car needs a tune-up`);
        isWorking = false;
    },
    getTuneUp: () => {
        alert(`Car is ready to go!`);
        isWorking = true;
    },
    honk: ()=> {
        alert("BEEP BEEP!")
    },
};
let race = () => {
    alert("SKUUUUUUUURRRT!");
    isWorking = false;
    alert("Car needs a tune-up");
}