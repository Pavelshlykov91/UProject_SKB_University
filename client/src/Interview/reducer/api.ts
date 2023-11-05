import { Interview, InterviewID } from "./type";

export const fetchInterviews = async ():Promise<Interview[]> => {
  const res = await(await fetch ('/api/interviews')).json()
  return res
}

export const fetchInterviewItem = async (id:InterviewID):Promise<Interview[]> => {
  const res = await(await fetch (`/api/interviews/${id}`)).json()
  return res
}

export const fetchInterviewAdd = async (interview:Interview): Promise<Interview> => {  
  const res = await fetch('/api/interviews', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(interview),
  });
  
  return res.json();
};