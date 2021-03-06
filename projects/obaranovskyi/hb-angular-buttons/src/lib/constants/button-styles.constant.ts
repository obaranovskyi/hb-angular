import { flowRight } from 'lodash';

import { KeyValue } from '../types';
import { asCss } from '../core';


export const commonBtnStyle: KeyValue = asCss(`
  padding: 10px 15px;
  font-size: 14px;
  border-radius: 5px;
  opacity: .9;
  cursor: pointer;
`);
