import React from 'react';
import {Accordion, AccordionDetails, AccordionSummary, Container, Typography} from "@mui/material";


// 1. Функция sum принимает параметром целые положительные
// числа (неопределённое кол-во) и возвращает их сумму (rest).

export function sum(...nums: Array<number>): number {
    return nums.reduce((prev, curr) => prev + curr)
}

// 2. Функция getTriangleType принимает три параметра:
// длины сторон треугольника.
// Функция должна возвращать:
//  - "10", если треугольник равносторонний,
//  - "01", если треугольник равнобедренный,
//  - "11", если треугольник обычный,
//  - "00", если такого треугольника не существует.

export function getTriangleType(a: number,b: number,c: number): string {
    if (!(a < b + c && b < a + c && c < a + b)) {return '00'}

    if (a === b && a === c) {
        return '10'
    }

    else if (a/2 === b/2 || a/2 === c/2 || b/2 === c/2) {
        return '01'
    }

    else return '11'
}

// 3. Функция getSum принимает параметром целое число и возвращает
// сумму цифр этого числа

export function getSum(number: number): number{
    const numbersArr = number.toString().split('')
    return numbersArr.map(e => Number(e)).reduce((prev, curr) => prev + curr)
}

// 4. Функция isEvenIndexSumGreater принимает  параметром массив чисел.
// Если сумма чисел с чётными ИНДЕКСАМИ!!! (0 как чётный индекс) больше
// суммы чисел с нечётными ИНДЕКСАМИ!!!, то функция возвращает true.
// В противном случае - false.

export const isEvenIndexSumGreater = (arr: Array<number>): boolean => {
    let evenSum = 0
    let unEvenSum = 0
    arr.forEach((currentValue, index) => {
        index % 2 === 0 ? evenSum += currentValue : unEvenSum += currentValue
    })
    return evenSum > unEvenSum
}

// 5. Функция getSquarePositiveIntegers принимает параметром массив чисел и возвращает новый массив.
// Новый массив состоит из квадратов целых положительных чисел, которые являются элементами исходного массива.
// Исходный массив не мутирует.


export function getSquarePositiveIntegers(array: Array<number>): Array<number> {
    return [...array.filter(e => e > 0 && e % 2 === 0).map(e => e*e)]
}

// 6. Функция принимает параметром целое не отрицательное число N и возвращает сумму всех чисел от 0 до N включительно
// Без перебора
export function sumFirstNumbers(N: number): number {
    if (N === 0) return 0
    let sum = 0;
    for (let i = 0; i < N+1; i++) {
        sum += i
    }
    return sum
}

// 7. Функция-банкомат принимает параметром целое натуральное число (сумму).
// Возвращает массив с наименьшим количеством купюр, которыми можно выдать эту
// сумму. Доступны банкноты следующих номиналов:
// const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1].
// Считаем, что количество банкнот каждого номинала не ограничено

export function getBanknoteList(amountOfMoney: number): Array<number> {
    const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1]
    let cash = 0
    let newArr = []
    for (let i = 0; i <= amountOfMoney; i++) {
        while (cash + banknotes[i] <= amountOfMoney) {
            cash += banknotes[i]
            newArr.push(banknotes[i])
        }
    }
    return newArr
}

const LessonEight = () => {

    return (
        <Container maxWidth="sm" style={{padding: '20px'}}>
            <Accordion>
                <AccordionSummary>
                    <Typography>JS_#08 native JS </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    123
                </AccordionDetails>
            </Accordion>
        </Container>
    );
};

export default LessonEight;


