let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};

for(CarType in statistics) {
    if( CarType[0] == 'r' || (statistics[CarType] % 2 == 1)) {
        console.log(statistics[CarType]);
    }
}