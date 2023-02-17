import { Task } from "../../../types/task";
import style from "../List.module.scss";

interface IItemProps extends Task {
   selectTask: (task: Task) => void;
}

export function Item({ selectTask, ...task }: IItemProps) {
   console.log(task);

   return (
      <li
         className={style.item}
         onClick={() => {
            selectTask(task);
         }}
      >
         <h3>{task.title}</h3>
         <span>{task.time}</span>
      </li>
   );
}
