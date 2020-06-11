import React from 'react';
import Theme from "../src/Theme";
import { addDecorator } from '@storybook/react';

addDecorator(s => <><Theme />{s()}</>);