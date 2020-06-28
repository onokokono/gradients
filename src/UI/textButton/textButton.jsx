import React, { useState } from 'react';
import { throttle } from '../../utilities/utilities';
import './textButton.scss';

const TextButton = (props) => {

    const [displayText, setDisplayText] = useState('Copy CSS');

    const onCopyHandler = () => {


        props.onClick();
        setDisplayText('Copied!');
        setTimeout(() => {
            setDisplayText('Copy CSS');
        }, 1000)
    };

    return (
        <button onClick={throttle(onCopyHandler, 2000)} >
            <p className={displayText === 'Copied!' ? 'copied' : 'notCopied'}> {displayText} </p>
        </button>
    );

};

export default TextButton;