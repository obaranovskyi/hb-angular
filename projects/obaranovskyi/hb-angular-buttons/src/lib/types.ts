import { ElementRef, Renderer2 } from '@angular/core';

export type KeyValue = { [key: string]: string };

export type ApplyStyleFn = (keyValue: KeyValue) => void;
