import React from 'react';
import './gradient-container.scss';
import { useStore } from '../../hooks/store';

import GradientBox from '../../components/gradient-box/gradient-box';

const Gradient_container = (props) => {

    const state = useStore()[0];

    const gradientBoxes = state.gradients.map(element => <GradientBox key={element.id} id={element.id} name={element.name} colors={element.colors} />)

    return (
        <div className='container' >
            {gradientBoxes}
        </div>
    );

};

export default Gradient_container;