import { Task } from "../../../types/task";
import style from "./Item.module.scss";

interface IItemProps extends Task {
   selectTask: (task: Task) => void;
}

export function Item({ selectTask, ...task }: IItemProps) {
  
   return (
      <li
         className={`${style.item} ${
            task.selected ? style.itemSelecionado : ""
         }`}
         onClick={() => {
            selectTask(task);
         }}
      >
         <h3>{task.title}</h3>
         <span>{task.time}</span>
      </li>
   );
}
