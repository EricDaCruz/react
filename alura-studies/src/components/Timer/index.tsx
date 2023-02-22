import { useEffect, useState } from "react";
import { Task } from "../../types/task";
import { timeToSeconds } from "../../utils/time";
import { Button } from "../Button";
import { Clock } from "./Clock";

import style from "./Timer.module.scss";

export function Timer({ selected }: { selected: Task | undefined }) {
   const [time, setTime] = useState<number>();

   useEffect(() => {
      if (selected?.time) {
         setTime(timeToSeconds(selected.time));
      }
   }, [selected]);

   function regressive(counter: number = 0) {
      setTimeout(() => {
         if (counter > 0) {
            setTime(counter - 1);
            return regressive(counter - 1);
         }

      }, 1000);
   }

   return (
      <div className={style.cronometro}>
         <p className={style.titulo}>Choose a card and start the timer:</p>
         <div className={style.relogioWrapper}>
            <Clock time={time} />
         </div>
         <Button text="Start" onClick={() => regressive(time)} />
      </div>
   );
}
