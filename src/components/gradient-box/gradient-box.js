import React from 'react';
import './gradient-box.scss';

const gradient_box = (props) => {

    return (
        <div className='box'>
            <div className='top' >
                <p> {props.name} </p>
                <p> {props.id} </p>
            </div>

            <img
                alt=''
                style={{ backgroundImage: `linear-gradient(45deg, #${props.colors[0]} 0%, #fad0c4 99%, #${props.colors[1]} 100%)` }}
                className='gradientDisplay' />

            <div className='bottom' >
                <p> {`#${props.colors[0]} --> #${props.colors[1]}`} </p>
                <p> Copy CSS </p>
            </div>
        </div>
    );
};

export default gradient_box;