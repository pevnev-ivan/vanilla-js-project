import React from 'react';
import s from './block.module.css'
import {Accordion, AccordionDetails, AccordionSummary, Container, Typography} from "@mui/material";
import Block from "./Block";

const Css29_09 = () => {
    let names = ['ФИО | текст ограниченный высотой блока', 'ФИО | текст ограниченный высотой блока (большой)', 'ФИО | текст неограниченный высотой блока']
    let lorem = '';
    for (let i = 0; i < 300; i++) {
        lorem += 'Lorem ipsum '
    }

    let source = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Solid_white.svg/1024px-Solid_white.svg.png'

    return (
        <Container maxWidth="sm" style={{padding: '20px'}}>
            <Accordion>
                <AccordionSummary>
                    <Typography><h3>CSS 29-09-22 </h3></Typography>
                </AccordionSummary>
                <AccordionDetails>

                    <div style={{display: 'flex', flexDirection: 'column', gap: '5rem'}}>
                        <Block name={names[0]} text={lorem} imgSource={source} blockSize={"small"}/>
                        <Block name={names[1]} text={lorem} imgSource={source} blockSize={"medium"}/>
                        <Block name={names[2]} text={lorem} imgSource={source} blockSize={"big"}/>
                    </div>

                </AccordionDetails>
            </Accordion>
        </Container>


    );
};

export default Css29_09;