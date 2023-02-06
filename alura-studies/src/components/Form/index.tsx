import React from "react";
import { Button } from "../Button";

export class Form extends React.Component {
   render(): React.ReactNode {
      return (
         <form>
            <div>
               <label htmlFor="task">Add a new study</label>
               <input
                  type="text"
                  name="Task"
                  id="task"
                  placeholder="What do you want to study?"
                  required
               />
            </div>
            <div>
               <label>Tempo</label>
               <input
                  type="time"
                  step={1}
                  name="time"
                  min="00:00:00"
                  max="1:30:00"
                  required
               />
            </div>

            <Button />
         </form>
      );
   }
}
