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

   return (
      <div className={style.AppStyle}>
         <Form setTasks={setTasks} />
         <List tasks={tasks} selectTask={selectTask} />
         <Timer />
      </div>
   );
}

export default App;
