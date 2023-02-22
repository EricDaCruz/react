import React from "react";

import style from "./Button.module.scss";

interface IButtonProps {
   text: string;
   type?: "button" | "submit" | "reset" | undefined;
   onClick?: () => void;
}

export function Button({ type, text, onClick = () => null }: IButtonProps) {
   return (
      <button type={type} className={style.botao} onClick={onClick}>
         {text}
      </button>
   );
}
