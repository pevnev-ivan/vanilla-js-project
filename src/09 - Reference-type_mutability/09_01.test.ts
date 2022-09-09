function IncreaseAge(u: any) {
    u.age++
}

test('big reference type', () => {

    let user = {
        name: 'Ivan',
        age: 22,
        address: {
            title: 'Minsk'
        }
    }

    IncreaseAge(user)
    expect(user.age).toBe(23)

    const anotherUser = user
    expect(anotherUser.age).toBe(23)

    //---------//

    let addr = user.address
    let userSecond = {
        name: 'Natasha',
        age: 30,
        address: addr
    }

    userSecond.address.title = 'Paris'

    expect(anotherUser.address.title).toBe('Paris')
    expect(anotherUser.address.title).toBe('Paris')
    expect(anotherUser.address).toBe(user.address)

})

test('array reference test', () => {

    let users = [
        {
            name: 'Ivan',
            age: 22,
        },
        {
            name: 'Alex',
            age: 25
        },
    ]

    let admins = users
    admins.push({name: 'Hacker', age: 15})

    expect(users['2']).toEqual({name: 'Hacker', age: 15})

})

test('value type test', () => {

    let userCount = 100;
    let adminsCount = userCount

    adminsCount++

    expect(adminsCount).toEqual(101)
    expect(userCount).toEqual(100)

})

test('array reference type test', () => {

    const address = {
        title: 'Minsk'
    }

    let user = {
        name: 'Ivan',
        age: 22,
        address: {
            title: address
        }
    }

    let user2 = {
        name: 'Ivan',
        age: 22,
        address: {
            title: address
        }
    }

    const users = [
        user,
        user2,
        {
            name: 'Misha',
            age: 32,
            address: {
                title: address
            }
        }]

    const admins = [user, user2]

    admins[0].name = 'Petr'

    expect(users[0].name).toBe('Petr')
})

test('sort array test', () => {
    const letter = ['c', 'd', 'b', 'g', 'f']
    const sortedLetter = letter.sort()

    expect(letter).toEqual( [ 'b', 'c', 'd', 'f', 'g' ])
    expect(sortedLetter).toEqual( [ 'b', 'c', 'd', 'f', 'g' ])
})
