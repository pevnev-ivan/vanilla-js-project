import {CityType, student} from "./02";

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

test('Students should have at least 3 technologies', () => {
    expect(student.technologies[0].title.length > 0).toBe(true)
    expect(student.technologies[1].title.length > 0).toBe(true)
    expect(student.technologies[2].title.length > 0).toBe(true)
})

test('City must have 3 houses', () => {
    expect(city.houses.length).toBe(3)

    expect(city.houses[0].address.street.title).toBe('Pushkina')
    expect(city.houses[0].address.number).toBe(29)
    expect(city.houses[0].repaired).toBe(false)
    expect(city.houses[0].buildAt).toBe(2021)

    expect(city.houses[1].address.street.title).toBe('Lenina')
    expect(city.houses[1].address.number).toBe(121)
    expect(city.houses[1].repaired).toBe(true)
    expect(city.houses[1].buildAt).toBe(2008)

    expect(city.houses[2].address.street.title).toBe('Osipenko')
    expect(city.houses[2].address.number).toBe(31)
    expect(city.houses[2].repaired).toBe(false)
    expect(city.houses[2].buildAt).toBe(1964)
})

test('City should contain hospital and fire station', () => {
    expect(city.governmentBuildings.length).toBe(2)

    expect(city.governmentBuildings[0].address.street.title).toBe('Osipenko')
    expect(city.governmentBuildings[0].address.number).toBe(241)
    expect(city.governmentBuildings[0].budget).toBe(123124)
    expect(city.governmentBuildings[0].type).toBe('HOSPITAL')
    expect(city.governmentBuildings[0].staffCount).toBe(121)

    expect(city.governmentBuildings[1].address.street.title).toBe('Lenina')
    expect(city.governmentBuildings[1].address.number).toBe(123)
    expect(city.governmentBuildings[1].budget).toBe(829318)
    expect(city.governmentBuildings[1].type).toBe('FIRE-STATION')
    expect(city.governmentBuildings[1].staffCount).toBe(23)
})