import React from 'react';
import TextButton from '../../UI/textButton/textButton';
import { copy_to_clipboard } from '../../utilities/utilities';
import './gradient-box.scss';

const gradient_box = (props) => {
    let inlineStyle;

    if (props.colors)
        inlineStyle = `linear-gradient(45deg, #${props.colors[0]} 0%, #fad0c4 99%, #${props.colors[1]} 100%)`;

    const copyStyle = () => {
        copy_to_clipboard(inlineStyle);
    }

    return (
        <div className='box'>
            <div className='top' >
                <p> {props.name} </p>
                <p> {props.id} </p>
            </div>

            <img
                alt=''
                src={null}
                style={{ backgroundImage: inlineStyle }}
                className='gradientDisplay' />

            <div className='bottom' >
                <p> {`#${props.colors[0]} --> #${props.colors[1]}`} </p>
                <TextButton onClick={copyStyle} > Copy CSS </TextButton>
            </div>
        </div>
    );
};

export default gradient_box;