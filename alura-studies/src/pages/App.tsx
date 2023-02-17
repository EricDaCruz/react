import { useState } from "react";
import { Form } from "../components/Form";
import { List } from "../components/List";
import { Timer } from "../components/Timer";
import { Task } from "../types/task";

import style from "./App.module.scss";

function App() {
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
      <div className={style.AppStyle}>
         <Form setTasks={setTasks}/>
         <List tasks={tasks} />
         <Timer />
      </div>
   );
}

export default App;
