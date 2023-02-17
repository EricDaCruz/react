import React from "react";

import style from "./Button.module.scss";

export class Button extends React.Component<{
   text: string;
   type: "button" | "submit" | "reset" | undefined;
}> {
   render(): React.ReactNode {
      return (
         <button type={this.props.type} className={style.botao}>
            {this.props.text}
         </button>
      );
   }
}
