import {initStore} from './store';

const configureStore = () => {

    const actions = () => {
        /* SET_GRADIENTS: (curState, payload) => { } */
    }
    
    initStore(actions, {
        gradients: [
            {id: '001', name: 'Warm Flame', colors: ['ff9a9e', 'fad0c4'] },
            {id: '002', name: 'Night Fade', colors: ['a18cd1', 'fbc2eb'] },
            {id: '003', name: 'Spring Warmth', colors: ['fad0c4', 'ffd1ff'] },
            {id: '004', name: 'Juicy Peach', colors: ['ffecd2', 'fcb69f'] },
            {id: '005', name: 'Lady Lips', colors: ['ff9a9e', 'fecfef'] },
            {id: '006', name: 'Sunny Morning', colors: ['f6d365', 'fda085'] },
        ]
    });
};

export default configureStore;