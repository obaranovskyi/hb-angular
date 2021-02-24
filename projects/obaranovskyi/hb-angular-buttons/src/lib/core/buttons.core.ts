import { flowRight } from 'lodash';

import { asCss } from './styles.core';


const btnStyle = (
  background: string,
  color: string
): string => `
  background: ${background};
  color: ${color};
  border: 2px solid ${background};
  outline-color: ${background};
`;

export const btnAsCss = flowRight(asCss, btnStyle);
