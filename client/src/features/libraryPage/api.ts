import type { Material } from './type'

export const fetchMaterials = async ():Promise<Material[]> => {
  const res = await fetch('/api/materials')
  if (res.status >= 400){
    throw new Error(res.statusText)
  }
return res.json()
}

export const fetchMaterialsAdd = async (material:Material):Promise<Material> => {
  const res = await fetch('/api/materials', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(material)
  })
  return res.json()
}