export type User = {
    id:number,
    firstName:string,
    lastName:string,
    surname:string,
    email:string,
    city:string,
    position:string,
    department:string,
    bg:string,
    role:string,
    course_id:number,
    foto:string,
    Course:Course,
}

export type Exercise = {
    id:number,
    user_id:number,
    course_id:number,
    title:string,
    content: string,
    corAnswer:string,
    file:string,
    User:User,
    Course:Course,
}

export type GroupNumber = {
id: number,
number:number,
}

export type Group = {
    id:number,
    user_id:number,
    group_id:number,
    exercise_id:number,
    Group:GroupNumber,
    User:User,
    Exercise:Exercise,
}

export type Course = {
id:number,
name:string,
content:string,
}