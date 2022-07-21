import {StudentType} from "../02/02";
import {addSkill, makeActive} from "./03";

let student: StudentType

beforeEach(() => {
    student = {
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
})

test('New skills for student should be added', () => {
    addSkill(student, 'PHP')
    expect(student.technologies[3].id).toBe(4)
    expect(student.technologies[3].title).toBe('PHP')
})

test('Student should be made active', () => {
    expect(student.isActive).toBe(false)
    makeActive(student)
    expect(student.isActive).toBe(true)
})


