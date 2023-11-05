import React from "react"
import type { User } from "./type"


function StudentItem({student}:{student:User}):JSX.Element {



  return (
    <div>  
{student.firstName}
{student.lastName}
    </div>
  )
}

export default StudentItem