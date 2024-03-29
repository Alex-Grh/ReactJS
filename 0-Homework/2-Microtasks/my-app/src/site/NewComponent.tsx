
type NewComponentType = {
   // students:Array<StudentType>
   students: StudentType[]
}
type StudentType = {
   id: number
   name: string
   age: number
}


export const NewComponent = (props: NewComponentType) => {
   return (
      <>
         <ul>
            {props.students.map((objectFromStudentArray: StudentType, index: number) => {
               return (
                  <li key={objectFromStudentArray.id}>
                     <span>name: {objectFromStudentArray.name} - </span>
                     <span>age: {objectFromStudentArray.age}</span>
                  </li>
               )
            })}
         </ul>         
 </>        
     
   );
};