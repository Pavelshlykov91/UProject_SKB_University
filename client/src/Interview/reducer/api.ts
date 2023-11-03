import { Interview } from "./type";

export const fetchInterviews = async ():Promise<Interview[]> => {
  const res = await(await fetch ('/api/InterviewPage')).json()
  return res
}