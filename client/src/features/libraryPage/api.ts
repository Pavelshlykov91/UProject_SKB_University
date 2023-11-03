import type { Materials } from './type'

export const fethMaterials = async ():Promise<Materials[]> => {
  const res = await fetch('/api/materials')
  if (res.status >= 400){
    console.log(res)
    throw new Error(res.statusText)
  }
return res.json()
}