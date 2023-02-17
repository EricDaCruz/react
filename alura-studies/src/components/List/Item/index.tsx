import style from "../List.module.scss";

interface IProps {
   title: string;
   time: string;
   id: string;
   selected: boolean;
   completed: boolean;
}

export function Item(task: IProps) {

   console.log(task);
   

   return (
      <li className={style.item}>
         <h3>{task.title}</h3>
         <span>{task.time}</span>
      </li>
   );
}
