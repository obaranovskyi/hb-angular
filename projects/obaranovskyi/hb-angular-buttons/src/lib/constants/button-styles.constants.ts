import {KeyValue} from '../types';
import {asCss} from '../core/styles.core';

export const commonBtnStyle: KeyValue = asCss(`
  padding: 10px 15px;
  font-size: 14px;
`);

export const darkBtnStyle: KeyValue = asCss(`
  background: black;
  color: white;
`);

export const lightBtnStyle: KeyValue = asCss(`
  background: white;
  color: black;
`);
