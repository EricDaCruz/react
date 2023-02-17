import React from "react";

import style from "../List.module.scss";

interface IProps {
   title: string;
   time: string;
}

export function Item({ title, time }: IProps) {
   return (
      <li className={style.item}>
         <h3>{title}</h3>
         <span>{time}</span>
      </li>
   );
}
