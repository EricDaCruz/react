import React, { FormEvent, useState } from "react";
import { Task } from "../../types/task";
import { Button } from "../Button";
import { v4 as uuidv4 } from "uuid";

import style from "./Form.module.scss";

interface IFormProps {
   setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

export function Form({ setTasks }: IFormProps) {
   const [title, setTitle] = useState("");
   const [time, setTime] = useState("00:00");

   function saveTask(event: FormEvent) {
      event.preventDefault();

      setTasks((state) => [
         ...state,
         { title, time, selected: false, completed: false, id: uuidv4() },
      ]);

      setTime("00:00");
      setTitle("");
   }

   return (
      <form className={style.novaTarefa} onSubmit={saveTask}>
         <div className={style.inputContainer}>
            <label htmlFor="task">Add a new study</label>
            <input
               type="text"
               name="Task"
               id="task"
               placeholder="What do you want to study?"
               value={title}
               onChange={(event) => setTitle(event.target.value)}
               required
            />
         </div>
         <div className={style.inputContainer}>
            <label>Time</label>
            <input
               type="time"
               step={1}
               name="time"
               value={time}
               onChange={(event) => setTime(event.target.value)}
               min="00:00:00"
               max="1:30:00"
               required
            />
         </div>

         <Button text="Add" type="submit" />
      </form>
   );
}
