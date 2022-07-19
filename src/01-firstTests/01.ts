export function sum(a: number, b: number) {
    return a + b;
}

export function multiply(a: number, b: number) {
    return a * b;
}

export function splitIntoWords(str: string) {
    return str.split(' ')
        .filter(word => word !== '')
        .map(str => str.replace('!', ''));
}

