import React from 'react'
import { useSelector } from 'react-redux'
import type  { RootState } from '../../redux/store'
import ThemesItem from './ThemesItem'

const ThemesPage = ():JSX.Element => {
  const themes = useSelector((store: RootState)=>store.themes.themes )


  return (
    <div>
      {themes.map((theme)=> (
        <ThemesItem  key={theme.id} theme={theme}/>
      ))}
    </div>
  )
}

export default ThemesPage