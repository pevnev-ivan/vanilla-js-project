import {GovernmentBuildingsType, HouseType, student, StudentType} from "../02/02";

export const addSkill = (student: StudentType, skill: string) => {
    const newId = student.technologies.length + 1
    student.technologies.push(
        {
            id: newId,
            title: skill
        }
    )
}

export const makeActive = (student: StudentType) => {
    student.isActive = true
}

export const addMoneyToBudget = (building: GovernmentBuildingsType, value: number) => {
    building.budget += value;
}

export const repairHouse = (house: HouseType) => {
    house.repaired = true
}

export const toFireStaff = (building: GovernmentBuildingsType, value: number) => {
    building.staffCount -= value;
}

export const toHireStaff = (building: GovernmentBuildingsType, value: number) => {
    building.staffCount += value;
}

// addSkill(student, 'PHP') Почему не мутируется объект?

console.log(student.technologies.length)