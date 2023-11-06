import { User } from "../../features/auth/type";
import { Interview,  InterviewComment,  InterviewId } from "./type";

export const fetchInterviews = async ():Promise<Interview[]> => {
  const res = await(await fetch ('/api/interviews')).json()
  
  return res
}

export const fetchInterviewscomm = async (id:InterviewId):Promise<InterviewComment[]> => {
  
  const res = await(await fetch (`/api/interviews/${id}`)).json()
  return res
}

export const fetchInterviewscommAdd = async ({ content, interview_id, User}:{ content:string, interview_id:string, User:User}): Promise<InterviewComment> => {  
  const res = await fetch(`/api/interviews/${interview_id}`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({ content, interview_id, User}),
  });
  
  return res.json();
};


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