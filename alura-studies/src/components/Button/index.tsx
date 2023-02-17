import React from "react";

import style from "./Button.module.scss";

export class Button extends React.Component<{ text: string }> {
   render(): React.ReactNode {
      return <button className={style.botao}>{this.props.text}</button>;
   }
}
