import { ButtonStyleModel } from '../models/button-style.model';


export enum ButtonTypeEnum {
  Primary = 1,
  Secondary = 2,
  Success = 3,
  Danger = 4,
  Warning = 5,
  Info = 6,
  Light = 7,
  Dark = 8
}

export namespace ButtonTypeEnum {
  const buttonStylesMap = new Map<ButtonTypeEnum, ButtonStyleModel>([
    [ButtonTypeEnum.Primary, { color: 'white', backgroundColor: 'black' }],
    [ButtonTypeEnum.Secondary, { color: 'white', backgroundColor: 'black' }],
    [ButtonTypeEnum.Success, { color: 'white', backgroundColor: 'black' }],
    [ButtonTypeEnum.Danger, { color: 'white', backgroundColor: 'black' }],
    [ButtonTypeEnum.Warning, { color: 'white', backgroundColor: 'black' }],
    [ButtonTypeEnum.Info, { color: 'white', backgroundColor: 'black' }],
    [ButtonTypeEnum.Light, { color: 'dark', backgroundColor: 'white' }],
    [ButtonTypeEnum.Dark, { color: 'white', backgroundColor: 'black' }]
  ]);

  export function styles(buttonType: ButtonTypeEnum): ButtonStyleModel {
    return buttonStylesMap.get(buttonType) as ButtonStyleModel;
  }
}
