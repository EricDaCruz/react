import { Task } from "../../../types/task";
import style from "./Clock.module.scss";

export function Clock({ time = 0 }: { time: number | undefined }) {
   const minutes = Math.floor(time / 60);
   const seconds = time % 60;

   const [minutesTen, minutesUnit] = String(minutes).padStart(2, "0");
   const [secondsTen, secondsUnit] = String(seconds).padStart(2, "0");

   return (
      <>
         <span className={style.relogioNumero}>{minutesTen}</span>
         <span className={style.relogioNumero}>{minutesUnit}</span>
         <span className={style.relogioDivisao}>:</span>
         <span className={style.relogioNumero}>{secondsTen}</span>
         <span className={style.relogioNumero}>{secondsUnit}</span>
      </>
   );
}
