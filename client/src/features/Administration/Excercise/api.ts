/* eslint-disable import/prefer-default-export */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import type { ExerciseId } from "../type";
import type {ExerciseMaterial} from "./type";


export const ExerciseMaterialFetch = async (id:ExerciseId): Promise<ExerciseMaterial[]> => {
    const res = await fetch(`/api/administration/exercisematerial/${id}`);
    if (res.status >= 400) {
      throw new Error(res.statusText);
    }
    const data = await res.json()

    return data
  };