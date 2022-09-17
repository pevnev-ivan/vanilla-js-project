import React from 'react';
import {Accordion, AccordionDetails, AccordionSummary, Container, Typography} from "@mui/material";

const LessonSix = () => {

    const students: Array<StudentsType> = [
        {
            name: 'Helen',
            age: 20,
            isMarried: false,
            scores: 110
        },
        {
            name: 'Adam',
            age: 23,
            isMarried: true,
            scores: 56
        },
        {
            name: 'Alex',
            age: 18,
            isMarried: false,
            scores: 125
        },
        {
            name: 'Felix',
            age: 30,
            isMarried: true,
            scores: 156
        },
        {
            name: 'Sam',
            age: 19,
            isMarried: false,
            scores: 45
        },
    ]

    const user2 = {
        name: 'Bob',
        age: 23,
        friends: ['Alex', 'Nick', 'John']
    }

    let user2copy = {...user2}
    let user3copy = {...user2, friends: [...user2.friends]}

    let sortedByName = [...students]
    sortedByName.sort((a, b) => a.name.charCodeAt(0) - b.name.charCodeAt(0))

    let filteredByScore = [...students]
    filteredByScore = filteredByScore.filter(e => e.scores < 100)

    let splicedBestStudents = [...students]
    splicedBestStudents = splicedBestStudents.sort((a, b) => a.scores - b.scores).reverse().splice(0, 3)
    console.log(splicedBestStudents)

    type StudentsType = {
        name: string
        age: number
        isMarried: boolean
        scores: number;
        friends?: Array<string>
    }

    function AddFriends (students:Array<StudentsType>) {

        return(students.map(e => e ? {...e, friends: students.map(e => e.name).filter(n => n!== e.name)} : e ))
    }
    let addFr = AddFriends(students)
    console.log(AddFriends(students))




    return (
        <Container maxWidth="sm" style={{padding: '20px'}}>
            <Accordion>
                <AccordionSummary>
                    <Typography><h3>JS_#06 native JS </h3></Typography>
                </AccordionSummary>
                <AccordionDetails>

                    If false - object links are different <br/><br/>
                    Shallow copy test: {user2copy === user2 ? 'true' : 'false'} <br/>
                    Shallow copy test (obj inside): {user2copy.friends === user2.friends ? 'true' : 'false'} <br/><br/>

                    Deep copy test: {user3copy === user2 ? 'true' : 'false'}<br/>
                    Deep copy test(obj inside): {user3copy.friends === user2.friends ? 'true' : 'false'}<br/>

                    Initial array: {students.map(e => e.name + ' ')}<br/>
                    Sorted + copied array: {sortedByName.map(e => e.name + ' ')}<br/>
                    100+ scores students: {filteredByScore.map(e => e.scores + ' ')}<br/>
                    Best 3 student after splice fn: {splicedBestStudents.map(e => e.name + ':' + e.scores + ' ')}<br/>
                    Add friends fn test: {addFr[0].friends.map(e => e + ' ')}

                </AccordionDetails>
            </Accordion>
        </Container>
    );
};

export default LessonSix;