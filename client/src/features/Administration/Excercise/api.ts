/* eslint-disable import/prefer-default-export */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import type { Exercise, ExerciseId } from "../type";
import type {ExerciseMaterial} from "./type";


export const ExerciseMaterialFetch = async (id:ExerciseId): Promise<ExerciseMaterial[]> => {
    const res = await fetch(`/api/administration/exercisematerial/${id}`);
    if (res.status >= 400) {
      throw new Error(res.statusText);
    }
    const data = await res.json()

    return data
  };

  // export const fetchExerciseAdd = async ({exercise}:{exercise:Exercise}): Promise<Exercise> => {
  //   const res = await fetch(`/api/administration/addexercise`, {
  //     method: 'POST',
  //     headers: {
  //       'Content-type': 'application/json',
  //     },
  //     body: JSON.stringify({exercise}),
  //   })
  //   if (res.status >= 400) {
  //     throw new Error(res.statusText);
  //   }
  //   const data = await res.json()

  //   return data
  // }

  export const fetchExerciseAdd = async ({ exercise }: { exercise: Exercise }): Promise<Exercise> => {
    const res = await fetch('/api/administration/addexercise', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ exercise }),
    });
    if (res.status >= 400) {
      throw new Error(res.statusText);
    }
    const data = await res.json();
  
    return data;
  };