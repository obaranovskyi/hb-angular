import { btnAsCss } from '../core';
import { ColorsEnum } from '../enums/colors.enum';
import { KeyValue } from '../types';


export enum ButtonTypeEnum {
  Primary = 'primary',
  Secondary = 'secondary',
  Success = 'success',
  Danger = 'danger',
  Warning = 'warning',
  Info = 'info',
  Light = 'light',
  Dark = 'dark'
}

export namespace ButtonTypeEnum {
  const buttonStylesMap = new Map<ButtonTypeEnum, KeyValue>([
    [ButtonTypeEnum.Primary, btnAsCss(ColorsEnum.Blue, 'white' )],
    [ButtonTypeEnum.Secondary, btnAsCss(ColorsEnum.Gray, 'white' )],
    [ButtonTypeEnum.Success, btnAsCss(ColorsEnum.Green, 'white' )],
    [ButtonTypeEnum.Danger, btnAsCss(ColorsEnum.Red, 'white' )],
    [ButtonTypeEnum.Warning, btnAsCss(ColorsEnum.Orange, 'black' )],
    [ButtonTypeEnum.Info, btnAsCss(ColorsEnum.Turkish, 'white' )],
    [ButtonTypeEnum.Light, btnAsCss(ColorsEnum.White, 'black' ) ],
    [ButtonTypeEnum.Dark, btnAsCss(ColorsEnum.Black, 'white') ]
  ]);

  export function styles(buttonType: ButtonTypeEnum): KeyValue {
    return buttonStylesMap.get(buttonType) ?? {};
  }
}
