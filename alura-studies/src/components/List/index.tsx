interface Task {
   title: string;
   time: string;
}

export function List() {
   const tasks: Task[] = [
      {
         title: "React",
         time: "02:00:00",
      },
      {
         title: "Javascript",
         time: "01:00:00",
      },
      {
         title: "Typescript",
         time: "03:00:00",
      },
   ];

   return (
      <aside>
         <h2>Study of days</h2>
         <ul>
            {tasks.map((task, key) => {
               return (
                  <li key={key}>
                     <h3>{task.title}</h3>
                     <span>{task.time}</span>
                  </li>
               );
            })}
         </ul>
      </aside>
   );
}