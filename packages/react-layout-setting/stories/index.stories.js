import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import ReactLayoutSetting from '../src/index.js';
import '../src/index.css'

storiesOf('React Layout Setting', module)
    .add('Hover to active td', () => <ReactLayoutSetting callback={(row, col) => {
        console.log(row, col)
        action(`${row}${col}`)
    }}/>);
