import { ElementRef, Renderer2 } from '@angular/core';
import { KeyValue } from '../types';


export const asCss = (value: string): KeyValue => {
  const lines = value.split('\n');
  const props = {};

  return lines.reduce((styleConf: KeyValue, line: string) => {
    if (!line) {
      return styleConf;
    }

    let [styleKey, styleValue] = line.replace(';', '').split(':');

    styleKey = styleKey.trim();
    styleValue = styleValue.trim();

    return {
      ...styleConf,
      [styleKey]: styleValue
    };
  }, {});
};

export const applyStyles = (elementRef: ElementRef, renderer: Renderer2, styles: KeyValue): void => {
    Object.keys(styles).forEach((key: string) => {
      renderer.setStyle(
        elementRef.nativeElement,
        key,
        styles[key]
      );
    });
};
