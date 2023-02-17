import { Task } from "../../types/task";
import { Item } from "./Item";
import style from "./List.module.scss";

interface IListProps {
   tasks: Task[];
   selectTask: (task: Task) => void;
}

export function List({ tasks, selectTask }: IListProps) {
   return (
      <aside className={style.listaTarefas}>
         <h2>Study of days</h2>
         <ul>
            {tasks.map((task) => {
               return <Item key={task.id} selectTask={selectTask} {...task} />;
            })}
         </ul>
      </aside>
   );
}
