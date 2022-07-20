export type AddressType = {
    streetTitle: string
    city: string
    countryTitle: string
}

export type TechnologiesType = {
    id: number
    title: string
}

export type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: AddressType
    technologies: Array<TechnologiesType>
}

export type StreetType = {
    title: string
}

export type HouseAddressType = {
    number: number
    street: StreetType
}

export type HouseType = {
    buildAt: number
    repaired: boolean
    address: HouseAddressType
}

export type GovernmentBuildingsType = {
    type: 'HOSPITAL' | 'FIRE-STATION'
    budget: number
    staffCount: number
    address: HouseAddressType
}

export type CityType = {
    title: string
    houses: Array<HouseType>
    governmentBuildings: Array<GovernmentBuildingsType>
    citizenNumber: number
}

export const student: StudentType = {
    id: 1,
    name: 'Alex',
    age: 19,
    isActive: false,
    address: {
        streetTitle: 'Pavlova 28',
        city: 'Minsk',
        countryTitle: 'Belarus',
    },
    technologies: [
        {
            id: 1,
            title: 'HTML'
        },
        {
            id: 2,
            title: 'React'
        },
        {
            id: 3,
            title: 'TypeScript'
        }
    ]
}
