import type { Material, MaterialAdd, MaterialContent, MaterialID, Theme } from './type';

export const fetchMaterials = async (): Promise<Material[]> => {
  const res = await fetch('/api/materials');
  if (res.status >= 400) {
    throw new Error(res.statusText);
  }
  return res.json();
};

export const fetchMaterialsAdd = async (material: MaterialAdd): Promise<Material> => {
  const res = await fetch('/api/materials', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(material),
  });
  return res.json();
};

export const fetchMaterialsDelete = async (
  id: MaterialID,
): Promise<{ message: string; id: number }> => {
  const res = await fetch(`/api/materials/${id}`, {
    method: 'DELETE',
  });
  return res.json();
};

export const fetchMaterialsUpdate = async (material: MaterialContent): Promise<Material> => {
  const res = await fetch(`/api/materials/${material.id}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      name: material.name,
      author: material.author,
      content: material.content,
      url: material.url,
    }),
  });
  return res.json();
};

export const fetchThemes = async (): Promise<Theme[]> => {
  const res = await fetch('/api/themes');
  if (res.status >= 400) {
    throw new Error(res.statusText);
  }
  return res.json();
};
