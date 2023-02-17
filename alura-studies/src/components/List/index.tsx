import { useState } from "react";
import { Item } from "./Item";
import style from "./List.module.scss";

export interface Task {
   title: string;
   time: string;
}

export function List() {

   const [tasks, setTasks] = useState<Task[]>([
      {
         title: "React",
         time: "02:00:00",
      },
      {
         title: "Javascript",
         time: "01:00:00",
      },
      {
         title: "Typescript",
         time: "03:00:00",
      },
   ]);



   return (
      <aside className={style.listaTarefas}>
         <h2>Study of days</h2>
         <ul>
            {tasks.map((task, key) => {
               return <Item key={key} {...task} />;
            })}
         </ul>
      </aside>
   );
}
