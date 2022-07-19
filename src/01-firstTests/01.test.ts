import {multiply, splitIntoWords, sum} from "./01";

//data
let a: number;
let b: number;
let c: number;

beforeEach(() => {
    a = 1;
    b = 2;
    c = 3;
})

test('Sum should be correct', () => {
    // data
    a = 100

    //action
    const result1 = sum(a, b)
    const result2 = sum(a, c)

    //expect result
    expect(result1).toBe(102);
    expect(result2).toBe(103);
})

test('Multiply should be correct', () => {
    //action
    const result1 = multiply(b, c)
    const result2 = multiply(c, a)

    //expect result
    expect(result1).toBe(6);
    expect(result2).toBe(3);
})

test('Split into words function should be correct', () => {

    let str = 'Hello          World!'
    let result = splitIntoWords(str)

    expect(result.length).toBe(2);
    expect(result[0]).toBe('Hello');
    expect(result[1]).toBe('World');

    str = 'Lorem ipsum dolores!'
    result = splitIntoWords(str)

    expect(result.length).toBe(3);
    expect(result[0]).toBe('Lorem');
    expect(result[1]).toBe('ipsum');
    expect(result[2]).toBe('dolores');


})