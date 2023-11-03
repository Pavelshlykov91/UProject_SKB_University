import type { Materials } from '../type'

export type MaterialsState =  {
  materials: []
}

export type ThemesState = {
  themes: []
}

export type Action = {type: 'materials/load', payload: Materials[]}
