import {
    addNewBooksToUser, changeCompanyForUser, changeBookForUser,
    changeCity, deleteBookForUser, HugeUserType,
    upgradeUserLaptop,
    UserType,
    UserWithBooksType,
    UserWithLaptopType, changeCompanyForUserAssociative, CompaniesType
} from "./10_01";


test('reference type test', () => {

    function increaseAge(user: UserType) {
        return {...user, age: user.age * 2}
    }

    let user: UserType = {
        name: 'Ivan',
        age: 32,
        address: {
            title: 'Moscow'
        }
    }

    increaseAge(user)
    let anotherUser = increaseAge(user)
    expect(user.age).toBe(32)
    expect(anotherUser.age).toBe(64)

    expect(user.address).toBe(anotherUser.address)
})

test('change address and laptop', () => {

    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Ivan',
        age: 32,
        address: {
            title: 'Moscow'
        },
        laptop: {
            title: 'Asus',
        },
        books: ['css', 'react', 'c++', 'redux']
    }

    let anotherUser = changeCity(user, 'Minsk')

    expect(user.address).not.toBe(anotherUser.address)
    expect(user.address.title).toBe('Moscow')
    expect(anotherUser.address.title).toBe('Minsk')

    anotherUser = upgradeUserLaptop(user, 'MacBook')

    expect(user.laptop).not.toBe(anotherUser.laptop)
    expect(user.laptop.title).toBe('Asus')
    expect(anotherUser.laptop.title).toBe('MacBook')

    expect(anotherUser.books).toBe(user.books)

})

test('add new books to user', () => {

    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Ivan',
        age: 32,
        address: {
            title: 'Moscow'
        },
        laptop: {
            title: 'Asus',
        },
        books: ['css', 'react', 'c++', 'redux']
    }

    let anotherUser = addNewBooksToUser(user, ['Война и Мир', 'Евгений Онегин', 'Превращение'])

    expect(anotherUser.books).toStrictEqual(['css', 'react', 'c++', 'redux', 'Война и Мир', 'Евгений Онегин', 'Превращение'])
    expect(user.books).toStrictEqual(['css', 'react', 'c++', 'redux'])
    expect(user.books).not.toBe(anotherUser.books)
})

test('change book for user', () => {

    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Ivan',
        age: 32,
        address: {
            title: 'Moscow'
        },
        laptop: {
            title: 'Asus',
        },
        books: ['css', 'react', 'c++', 'redux']
    }

    let anotherUser = changeBookForUser(user, 'react', 'Angular')

    expect(anotherUser.books).toStrictEqual(['css', 'Angular', 'c++', 'redux'])
    expect(user.books).not.toBe(['css', 'react', 'c++', 'redux'])
    expect(anotherUser.books).not.toBe(user.books)

})

test('remove book for user', () => {

    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Ivan',
        age: 32,
        address: {
            title: 'Moscow'
        },
        laptop: {
            title: 'Asus',
        },
        books: ['css', 'react', 'c++', 'redux']
    }

    let anotherUser = deleteBookForUser(user, 'react')

    expect(anotherUser.books).toStrictEqual(['css', 'c++', 'redux'])
    expect(user.books).not.toBe(['css', 'react', 'c++', 'redux'])
    expect(anotherUser.books).not.toBe(user.books)

})

test('update company for user', () => {

    let user: HugeUserType = {
        name: 'Ivan',
        age: 32,
        address: {
            title: 'Moscow'
        },
        laptop: {
            title: 'Asus',
        },
        books: ['css', 'react', 'c++', 'redux'],
        companies: [{id: 1, title: 'Apple'}, {id: 2, title: 'FaceBook'}, {id: 3, title: 'Epam'}]
    }

    let anotherUser = changeCompanyForUser(user, 'Apple', 'DNS')

    expect(anotherUser.companies).not.toBe(user.companies)
    console.log(anotherUser.companies)
    expect(anotherUser.companies[0]).not.toBe(user.companies[0])
    expect(anotherUser.companies[0]).not.toBe('DNS')
    expect(user.companies[0]).not.toBe('Apple')

})

test('update company (associative array)', () => {

    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Ivan',
        age: 32,
        address: {
            title: 'Moscow'
        },
        laptop: {
            title: 'Asus',
        },
        books: ['css', 'react', 'c++', 'redux'],
    }

    let companies: CompaniesType =
        {
            'Ivan':
                [
                    {id: 1, title: 'Apple'},
                    {id: 2, title: 'FaceBook'},
                    {id: 3, title: 'Epam'}
                ],
            'Alex':
                [
                    {id: 1, title: 'Samsung'},
                ]
        }
    changeCompanyForUserAssociative(companies, 'Alex', 1, 'SberBank')
    console.log(companies)
    expect(companies['Alex'][0].title).toBe('SberBank')

})



