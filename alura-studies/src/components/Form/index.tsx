import React from "react";
import { Button } from "../Button";

import style from "./Form.module.scss";

export class Form extends React.Component {
   render(): React.ReactNode {
      return (
         <form className={style.novaTarefa}>
            <div className={style.inputContainer}>
               <label htmlFor="task">Add a new study</label>
               <input
                  type="text"
                  name="Task"
                  id="task"
                  placeholder="What do you want to study?"
                  required
               />
            </div>
            <div className={style.inputContainer}>
               <label>Time</label>
               <input
                  type="time"
                  step={1}
                  name="time"
                  min="00:00:00"
                  max="1:30:00"
                  required
               />
            </div>

            <Button text="Add" />
         </form>
      );
   }
}
