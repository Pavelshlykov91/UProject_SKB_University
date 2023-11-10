/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import type { Interview, InterviewComment, InterviewId } from './type';

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


// export const fetchReactions = async ():Promise<InterviewReaction[]> => {
//   const res = await (await fetch('/api/reactions')).json();
  
//   return res
// }



// export const fetchReactionschange = async (reaction: InterviewReaction): Promise<InterviewReaction
// > => {
//   const res = await fetch(`/api/reactions/${reaction.id}`, {
//     method: 'PUT',
//     headers: {
//       'Content-type': 'application/json',
//     },
//     body: JSON.stringify(reaction),
//   });

//   return res.json();
// };

export const fetchDeleteInterview = async (id: InterviewId): Promise<{ id: number }> => {
  const res = await fetch(`/api/interviews/${id}`, {
    method: 'DELETE',
  });
  return res.json();
};
