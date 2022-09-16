import React from 'react';
import {Accordion, AccordionDetails, AccordionSummary, Container, Paper, Typography} from "@mui/material";

//1. Sort - mutable method
//2. Sort - returns link to reference array

const students = [
    {
        name: 'Bob',
        age: 23,
        IsMarried: true,
        scores: 52
    },
    {
        name: 'Alex',
        age: 32,
        IsMarried: false,
        scores: 23
    },
    {
        name: 'Misha',
        age: 12,
        IsMarried: false,
        scores: 75
    },
    {
        name: 'Nikita',
        age: 52,
        IsMarried: true,
        scores: 42
    },
    {
        name: 'Vasya',
        age: 32,
        IsMarried: true,
        scores: 51
    },
]
const LessonFive = () => {

    const names = ['Bob', 'Alex', 'Nick', 'Johan']
    const array = [101, 100, 99, 10000, -123, 2521, 0, 1, ' 19', null, undefined]
    const numbers = [101, 100, 99, 10000, -123, 2521, 0, 1]

    const compareFunc = (a: any, b: any) => { // сортировка по возрастанию
        return a < b ? -1 : 1
    }

    const nums = [11, 24, 12, 25, 46, 47, 82, 53, 9, 1, 5, 3, 2]

    const bubbleSort = (array: Array<number>) => {

        for (let j = 0; j < array.length - 1; j++) {
            let isSorted = true
            for (let i = 0; i < array.length - 1 - j; i++) {
                if (array[i] > array[i + 1]) {
                    isSorted = false;
                    [array[i + 1], array[i]] = [array[i], array[i + 1]]
                }
            }
            if(isSorted)break
        }

        return array.map(e => e + ' ')
    }

    return (

        <div >
            <Container maxWidth="sm" style={{padding: '20px'}} >
                <Accordion>
                    <AccordionSummary>
                        <Typography><h3>JS_#05 2022-08-18 </h3></Typography>
                    </AccordionSummary>
                    <AccordionDetails>


            <div>Sort function:</div>

            Initial array : {names.map(e => e + ' ')} <br/>
            Sorted array : {names.sort().map(e => e + ' ')} <br/> <br/>

            <div>
                Initial array : {array.map(e => e + ' ')} <br/>
                Sorted array : {array.sort().map(e => e + ' ')} <br/>
                Sorted array with func : {numbers.sort(compareFunc).map(e => e + ' ')} <br/>
                Sorted array with func + reverse : {numbers.sort(compareFunc).reverse().map(e => e + ' ')} <br/><br/>
            </div>

            <div>
                scores sort: {students.sort((a, b) => a.scores - b.scores).map(e => e.name + '(' + e.scores + ') ')}
                <br/>
                names
                sort: {students.sort((a, b) => a.name.localeCompare(b.name)).map(e => e.name + '(' + e.scores + ') ')}
                <br/>
            </div>

            {/*// bubble sort*/}
            <div>

                Initial array: {nums.map(e => e + ' ')} <br/>
                My bubble sort: {bubbleSort(nums)}
            </div>


                    </AccordionDetails>
                </Accordion>
            </Container>
        </div>
    );
};

export default LessonFive;