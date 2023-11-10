import type { Forum, ForumAnswer, ForumID } from './type';

export const fetchForums = async (): Promise<Forum[]> => {
  const res = await fetch('/api/forums');
  if (res.status >= 400) {
    throw new Error(res.statusText);
  }
  return res.json();
};

export const fetchForumsAdd = async (forum:Forum):Promise<Forum> => {
const res = await fetch('/api/forums', {
  method:'POST',
  headers: {
    'Content-type':'application/json'
  },
  body: JSON.stringify(forum)
})
return res.json()

}
export const fetchForumDelete = async (id:ForumID):Promise<{message:string; id:number}> => {
  const res = await fetch(`/api/forums/${id}`, {
    method: 'DELETE',
  })
  return res.json()
}
export const fetchForumUpdate = async (forum: Forum): Promise<Forum> => {
  const res = await fetch(`/api/forums/${forum.id}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      title: forum.title,
      content: forum.content,
    }),
  });
  return res.json();
};

export const fetchComments = async ():Promise<ForumAnswer[]> => {
  const res = await fetch('/api/comments')
  if(res.status >= 400) {
    throw new Error(res.statusText)
  }
  return res.json()
}