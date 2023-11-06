import React from 'react'
import type { Theme } from './type'

const ThemesItem = ({theme}:{theme: Theme}):JSX.Element => {
  return (
    <div>
      <h2>{theme.name}</h2>
    </div>
  )
}

export default ThemesItem