import React from 'react';
import {Accordion, AccordionDetails, AccordionSummary, Container, Typography} from "@mui/material";


type  dataType= {count: number}
const Lesson14 = () => {
    const axios = {
        _fake (url: string, data: dataType) {
        return new Promise((resolve) => {
            setTimeout(() => {
                let responseData: any = {text: `${url} love you`}

                if (url === 'tusur') {
                    responseData = {
                        requestedCount: data.count,
                        message: 'we will prepare students for you'
                    }}
                else if (url === 'google') {
                    console.log(12)
                    responseData = {
                        vacancies: 12
                    }
                } else if (url === 'microsoft') {
                    responseData = {
                        vacancies: 5
                    }
                }
                resolve({
                    request: {},
                    status: 200,
                    headers: {},
                    config: {},
                    data: responseData,
                })

            }, 500)
        })
    },
        _post(url: string, data: dataType) {return this._fake(url, data)},
        _get(url: string, data: dataType) {return this._fake(url, data)}
    }
    const findUserInDB = (userID: number) => {
        const users = [
            {name: 'Svetlana', id: 1},
            {name: 'Ivan', id: 2},
            {name: 'Artem', id: 3}]


        return new Promise((res, rej) => {
            setTimeout(() => {
                let user = users.find(el => el.id === userID)
                if (user) {
                    return res(user.name)
                } else {
                    return rej('Some Error')
                }

            }, 500)
        })
    }
    let result = findUserInDB(1)
    result.then((user) => console.log(user))

    let resultFakeAxios = axios._fake('google', {count: 2})
    resultFakeAxios.then((result: any) => console.log(result.data))

    return (
        <Container maxWidth="sm" style={{padding: '20px'}}>
            <Accordion>
                <AccordionSummary>
                    <Typography>JS_#14 native JS (Promises) </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    123
                </AccordionDetails>
            </Accordion>
        </Container>
    );
};

export default Lesson14;