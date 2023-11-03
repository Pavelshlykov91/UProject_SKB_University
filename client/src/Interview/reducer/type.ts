export type Interview = {
id: number
title: string,
content: string,
url: string 
}

export type InterviewID = Interview ['id'] 

export type InterviewState = {
  interviews: Interview[];
  error: string | null,
  loading: boolean  
}
