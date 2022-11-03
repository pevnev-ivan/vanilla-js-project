import React from 'react';
import s from "./block.module.css";

type propsType = {
    name: string
    text: string
    imgSource: string
    blockSize: 'small' | 'medium' | 'big'

}

const Block = (props: propsType) => {

    let postContainerStyle = `${s.post_container}`
    let postBodyStyle = `${s.post_body__container}`
    let avatarStyle = `${s.post_avatar}`
    let postBodyName = `${s.post_body__name}`
    let postBodyText = `${s.post_body__text}`


    if (props.blockSize === 'medium') {
        postContainerStyle = `${s.post_container + ' ' + s.post_container__big}`
        avatarStyle = `${s.post_avatar + ' ' + s.post_avatar__top}`
        postBodyStyle = `${s.post_body__container + ' ' + s.post_body__container__big}`

    } else if (props.blockSize === 'big') {
         postContainerStyle = `${s.post_container + ' ' + s.post_container__infinite}`
         postBodyStyle = `${s.post_body__container + ' ' + s.post_body__container__infinite}`
         avatarStyle = `${s.post_avatar + ' ' + s.post_avatar__bottom}`
         postBodyName = `${s.post_body__name + ' ' + s.post_body__name___cut}`
         postBodyText = `${s.post_body__text + ' ' + s.post_body__text___infinite}`
    }

    return (
        <div style={{display: 'flex', flexDirection: 'column', gap: '5rem'}}>

            <div className={postContainerStyle}>
                <img className={avatarStyle}
                     src={props.imgSource}
                     alt="profilePic"/>

                <div className={postBodyStyle}>
                    <span className={postBodyName}>{props.name}</span>
                    <p className={postBodyText}>{props.text}</p>
                </div>
            </div>
        </div>
    );
};

export default Block;