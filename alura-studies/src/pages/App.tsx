import { useState } from "react";
import { Form } from "../components/Form";
import { List } from "../components/List";
import { Timer } from "../components/Timer";
import { Task } from "../types/task";

import style from "./App.module.scss";

function App() {
   const [tasks, setTasks] = useState<Task[]>([]);

   return (
      <div className={style.AppStyle}>
         <Form setTasks={setTasks}/>
         <List tasks={tasks} />
         <Timer />
      </div>
   );
}

export default App;
