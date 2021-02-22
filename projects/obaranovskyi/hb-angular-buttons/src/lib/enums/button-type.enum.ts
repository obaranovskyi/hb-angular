import { darkBtnStyle, lightBtnStyle } from '../constants/button-styles.constants';
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
    [ButtonTypeEnum.Primary, { color: 'white', backgroundColor: 'black' }],
    [ButtonTypeEnum.Secondary, { color: 'white', backgroundColor: 'black' }],
    [ButtonTypeEnum.Success, { color: 'white', backgroundColor: 'black' }],
    [ButtonTypeEnum.Danger, { color: 'white', backgroundColor: 'black' }],
    [ButtonTypeEnum.Warning, { color: 'white', backgroundColor: 'black' }],
    [ButtonTypeEnum.Info, { color: 'white', backgroundColor: 'black' }],
    [ButtonTypeEnum.Light, lightBtnStyle ],
    [ButtonTypeEnum.Dark, darkBtnStyle ]
  ]);

  export function styles(buttonType: ButtonTypeEnum): KeyValue {
    return buttonStylesMap.get(buttonType) ?? {};
  }
}
