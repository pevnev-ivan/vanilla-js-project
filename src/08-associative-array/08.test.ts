type UsersType = {
    [key: string]: { id: number, name: string }
}

let users: UsersType

beforeEach(() => {
    users = {
        '1592': {id: 123, name: 'Ivan'},
        '251252': {id: 251252, name: 'Svetlana'},
        '151292': {id: 151292, name: 'Derek'},
        '231252': {id: 231252, name: 'John'},
    }
})

test('should select corresponding user from obj', () => {

    users['1592'].name = 'Ekaterina'

    expect(users['1592']).toEqual({id: 123, name: 'Ekaterina'})

})

test('should delete corresponding user from obj', () => {

    delete users['1592']

    expect(users['1592']).toEqual(undefined)

})
