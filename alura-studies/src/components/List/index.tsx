import { Task } from "../../types/task";
import { Item } from "./Item";
import style from "./List.module.scss";

export function List({ tasks }: { tasks: Task[] }) {
   return (
      <aside className={style.listaTarefas}>
         <h2>Study of days</h2>
         <ul>
            {tasks.map((task, key) => {
               return <Item key={key} {...task} />;
            })}
         </ul>
      </aside>
   );
}
