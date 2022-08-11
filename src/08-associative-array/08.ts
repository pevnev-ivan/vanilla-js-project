export type UsersType = {
    [key: string]: {id: number, name: string}
}

export const users: UsersType = {
    '1592': {id: 123, name: 'Ivan'},
    '251252': {id: 251252, name: 'Svetlana'},
    '151292': {id: 151292, name: 'Derek'},
    '231252': {id: 231252, name: 'John'},
}

let user = {id: 15125, name: 'Bred'}
users[user.id] = user
delete users[user.id]
users[user.id].name = 'Vitya'