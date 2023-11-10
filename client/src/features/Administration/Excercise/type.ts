/* eslint-disable @typescript-eslint/naming-convention */
export type ExerciseMaterial = {
    id:number,
    name:string,
    timing:string,
    content:string,
    file:string
}

export type addExercise = {
    user_id: number;
    course_id: number;
    title: string;
    content: string;
    corAnswer: string;
    file: string;
}

export type ExerciseMaterialState = ExerciseMaterial[]