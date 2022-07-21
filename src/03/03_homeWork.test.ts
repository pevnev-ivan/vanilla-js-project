import {CityType} from "../02/02";
import {addMoneyToBudget, repairHouse, toFireStaff, toHireStaff} from "./03";

let city: CityType;

beforeEach(() => {
    city = {
        title: 'Moscow',
        houses: [
            {
                buildAt: 2021,
                repaired: false,
                address: {
                    number: 29,
                    street: {
                        title: 'Pushkina'
                    }
                }
            },
            {
                buildAt: 2008,
                repaired: true,
                address: {
                    number: 121,
                    street: {
                        title: 'Lenina'
                    }
                }
            },
            {
                buildAt: 1964,
                repaired: false,
                address: {
                    number: 31,
                    street: {
                        title: 'Osipenko'
                    }
                }
            },


        ],
        governmentBuildings: [
            {
                type: "HOSPITAL",
                budget: 123124,
                staffCount: 121,
                address: {
                    number: 241,
                    street: {
                        title: 'Osipenko'
                    }
                }
            },
            {
                type: "FIRE-STATION",
                budget: 829318,
                staffCount: 23,
                address: {
                    number: 123,
                    street: {
                        title: 'Lenina'
                    }
                }
            }
        ],

        citizenNumber: 100000

    }
})

// 01. создайте в отдельном файле функциюб чтобы тесты прошли

test("Budget should be for changed fot HOSPITAL", () => {
    addMoneyToBudget(city.governmentBuildings[0], 100000);
    expect(city.governmentBuildings[0].budget).toBe(123124 + 100000);
});


// 01. Тест должен пройти


test("Budget should be changed for FIRE-STATION", () => {
    addMoneyToBudget(city.governmentBuildings[1], -100000);

    expect(city.governmentBuildings[1].budget).toBe(829318 - 100000);
});


// 01. создайте в том же файле еще одну функцию, чтобы тесты прошли


test("House should be repaired", () => {
    repairHouse(city.houses[1]);
    expect(city.houses[1].repaired).toBeTruthy();
});


// 01. создайте в том же файле еще одну функцию, чтобы тесты прошли


test("Staff should be fired", () => {
    toFireStaff(city.governmentBuildings[0], 20);

    expect(city.governmentBuildings[0].staffCount).toBe(121 - 20);
});


// 01. создайте в том же файле еще одну функцию, чтобы тесты прошли


test("Staff should be hired", () => {
    toHireStaff(city.governmentBuildings[0], 20);

    expect(city.governmentBuildings[0].staffCount).toBe(121 + 20);
});