import { KeyValue } from '../types';
import { asCss } from '../core/styles.core';
import { flowRight } from 'lodash';


export const btnStyle = (
  color: string,
  background: string
): string => `
  background: ${color};
  color: ${background};
`;

export const commonBtnStyle: KeyValue = asCss(`
  padding: 10px 15px;
  font-size: 14px;
`);

export const lightBtnStyle: KeyValue = flowRight(asCss, btnStyle)('white', 'black');
export const darkBtnStyle: KeyValue = flowRight(asCss, btnStyle)('black', 'white');

