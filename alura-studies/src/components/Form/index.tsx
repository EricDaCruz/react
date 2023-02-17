import React, { FormEvent } from "react";
import { Task } from "../../types/task";
import { Button } from "../Button";
import { v4 as uuidv4 } from "uuid";

import style from "./Form.module.scss";

export class Form extends React.Component<{
   setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}> {
   state = {
      title: "",
      time: "00:00:00",
   };

   saveTask(event: FormEvent) {
      event.preventDefault();
      this.props.setTasks((state) => [
         ...state,
         { ...this.state, selected: false, completed: false, id: uuidv4() },
      ]);
      this.setState({
         title: "",
         time: "00:00:00",
      });
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
                  value={this.state.title}
                  onChange={(event) =>
                     this.setState({ ...this.state, title: event.target.value })
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

            <Button text="Add" type="submit" />
         </form>
      );
   }
}
