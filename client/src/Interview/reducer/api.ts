import type { Interview, InterviewComment, InterviewId, InterviewReactions } from './type';

export const fetchInterviews = async (): Promise<Interview[]> => {
  const res = await (await fetch('/api/interviews')).json();

  return res;
};

export const fetchInterviewscomm = async (id: InterviewId): Promise<InterviewComment[]> => {
  const res = await (await fetch(`/api/interviews/${id}`)).json();
  return res;
};

export const fetchInterviewscommAdd = async ({
  content,
  interview_id,
}: {
  content: string;
  interview_id: number | string;
}): Promise<InterviewComment> => {
  const res = await fetch(`/api/interviews/${interview_id}`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({ content, interview_id }),
  });

  return res.json();
};

export const fetchInterviewAdd = async (interview: Interview): Promise<Interview> => {
  const res = await fetch('/api/interviews', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(interview),
  });

  return res.json();
};
export const fetchInterviewUpd = async (interview: Interview): Promise<Interview> => {
  const res = await fetch(`/api/interviews/${interview.id}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(interview),
  });

  return res.json();
};


export const fetchReactions = async ():Promise<InterviewReactions[]> => {
  console.log('kkkkk');
  
  const res = await (await fetch('/api/reactions')).json();
  console.log(771717177, res);
  
  return res.json();
}