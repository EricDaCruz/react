import React, { FormEvent } from "react";
import { Button } from "../Button";

import style from "./Form.module.scss";

export class Form extends React.Component {
   state = {
      task: "",
      time: "00:00:00",
   };

   saveTask(event: FormEvent) {
      event.preventDefault();
      console.log(this.state);
   }

   render(): React.ReactNode {
      return (
         <form className={style.novaTarefa} onSubmit={this.saveTask.bind(this)}>
            <div className={style.inputContainer}>
               <label htmlFor="task">Add a new study</label>
               <input
                  type="text"
                  name="Task"
                  id="task"
                  placeholder="What do you want to study?"
                  value={this.state.task}
                  onChange={(event) =>
                     this.setState({ ...this.state, task: event.target.value })
                  }
                  required
               />
            </div>
            <div className={style.inputContainer}>
               <label>Time</label>
               <input
                  type="time"
                  step={1}
                  name="time"
                  value={this.state.time}
                  onChange={(event) =>
                     this.setState({ ...this.state, time: event.target.value })
                  }
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
