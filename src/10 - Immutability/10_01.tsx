import React from 'react';

export type UserType = {
    name: string
    age: number
    address: { title: string }
}

export type LaptopType = {
    title: string
}

export type UserWithLaptopType = UserType & { laptop: LaptopType }

export type UserWithBooksType = UserType & { books: Array<string> }

export type UserWithCompaniesType = {
    companies: Array<{ id: number, title: string }>
}

export type HugeUserType = UserWithLaptopType & UserWithBooksType & UserWithCompaniesType

export type CompaniesType = {
    [name: string]: Array<{id: number, title: string}>
}

export function upgradeUserLaptop(user: UserWithLaptopType & UserWithBooksType, laptop: string) {
    return (
        {
            ...user,
            laptop: {
                ...user.laptop,
                title: laptop
            }
        }
    )
}

export function changeCity(user: UserWithLaptopType & UserWithBooksType, destination: string) {
    let anotherUser = {...user, address: {...user.address, title: destination}}
    return anotherUser
}

export function addNewBooksToUser(user: UserWithLaptopType & UserWithBooksType, books: Array<string>) {
    return ({...user, books: [...user.books, ...books]})
}

export function changeBookForUser(user: UserWithLaptopType & UserWithBooksType, initialBook: string, newBook: string) {
    return ({...user, books: user.books.map(e => e === initialBook ? e = newBook : e)})
}

export function deleteBookForUser(user: UserWithLaptopType & UserWithBooksType, initialBook: string) {
    return ({...user, books: user.books.filter(e => e !== initialBook)})
}

export function changeCompanyForUser(user: HugeUserType, oldCompany: string, newCompany: string) {
    return ({...user, companies: user.companies.map(e => e.title === oldCompany ? {...e, title: newCompany} : e)})
}

export function changeCompanyForUserAssociative(companies: CompaniesType, userName: string, companyID: number, companyTitle: string) {
    return ({...companies, [userName]: companies[userName].map(e => e.id === companyID ? {...e, title: companyTitle} : e)})
} //Не меняет