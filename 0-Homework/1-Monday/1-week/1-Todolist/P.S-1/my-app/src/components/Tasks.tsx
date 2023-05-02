
type TasksType = {
   data: DataObjeсtType 
}

type DataObjeсtType = {
title: string
tasks: ArrayTasksType[]
students: string[]
}

type ArrayTasksType={
   taskId: number
   title: string
   isDone: boolean
} 

const Tasks = (props:TasksType)=> {
  return (
   <div>
   <h1>{props.data.title}</h1>
<ul>
   {props.data.tasks.map((objectArrayTasksType:ArrayTasksType, index:number) => {
return (
   <li key={index}>
      <span>{objectArrayTasksType.taskId + ' '}</span>
      <span>{objectArrayTasksType.title}</span>
      <span>{objectArrayTasksType.isDone}</span>
   </li>
)
   })}
</ul>
<ul>
   {props.data.students.map((objectStudents, index: number)=>{
return (
   <li key={index}>
{index+1} {objectStudents}
   </li>
)
   })}
</ul>

   </div>
  ); 
};


export default Tasks