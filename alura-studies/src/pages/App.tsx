import { useState } from "react";
import { Form } from "../components/Form";
import { List } from "../components/List";
import { Timer } from "../components/Timer";
import { Task } from "../types/task";

import style from "./App.module.scss";

function App() {
   const [tasks, setTasks] = useState<Task[]>([]);
   const [selected, setSelected] = useState<Task>();

   function selectTask(task: Task) {
      setSelected(task);
      setTasks((tasks) =>
         tasks.map((t) => ({
            ...t,
            selected: t.id === task.id,
         }))
      );
   }

   function finishTask() {
      if (selected) {
         setTasks((tasks) =>
            tasks.map((task) => {
               if (task.id === selected.id) {
                  setSelected(undefined);
                  return {
                     ...task,
                     selected: false,
                     completed: true,
                  };
               }

               return task;
            })
         );
      }
   }

   return (
      <div className={style.AppStyle}>
         <Form setTasks={setTasks} />
         <List tasks={tasks} selectTask={selectTask} />
         <Timer selected={selected} finishTask={finishTask} />
      </div>
   );
}

export default App;
