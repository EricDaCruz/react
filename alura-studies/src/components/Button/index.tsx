import React from "react";

import style from "./Button.module.scss";

export class Button extends React.Component {
   render(): React.ReactNode {
      return <button className={style.botao}>Click here</button>;
   }
}
