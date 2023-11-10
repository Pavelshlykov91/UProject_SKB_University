import React, {useState} from 'react'
import { Event } from './reducers/type'
import LKDeleteModal from './LKDeleteModal'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'

export default function LKEventItem({el}:{el:Event}): JSX.Element  {
  const user = useSelector((store:RootState)=> store.auth.user)
  const [modal, setModal]=useState(false)

  return (
    <div><div>{el.name}</div>
    <div>{el.theme}</div>
    <div>Дата проведения: {el.data}, {el.time}</div>
    <div>{el.address}</div>
    {user?.role==='преподаватель' &&<button onClick={() => setModal(true)}>Удалить</button>}
    {modal && <LKDeleteModal id={el.id} modal={modal} setModal={setModal}/>}</div>
  )
}
