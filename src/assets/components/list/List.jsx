import { useState } from "react"
import { DefaultTask } from "../defaultTask/DefaultTask"
import { PlusCircle } from "phosphor-react";
import { v4 as uuidv4 } from 'uuid';
import { ContentTask } from "../contentTask/ContentTask";


export const List = () => {

    const [tasks, setTasks] = useState([
        {
            id: uuidv4(),
            title: "Estudar React.JS na RocketSeat!!",
            isCompleted: true,
        },
        {
            id: uuidv4(),
            title: "Estudar TypeScript",
            isCompleted: false,
        }
    ]);


    const [newTask, SetNewTask] = useState("");


    function handleNewTask(){
        SetNewTask(event.target.value);
        console.log(newTask);
    }


    const completedTask = tasks.reduce((acc, item) => {
        if(item.isCompleted){
            acc++;
        }
        return acc;
    },0);


    function handleAddTask () {
        setTasks([
            ...tasks, 
            {
                id: uuidv4(),
                title: newTask,
                isCompleted: false,
            }
        ]);
        SetNewTask("");
    }

    function onDelete (taskId) {
        const newTaskList = tasks.filter((task) => task.id !== taskId);
        setTasks(newTaskList);
    }

    function onSelect(taskId) {
        const newTaskList = tasks.map((task) => {
          if (task.id === taskId) {
            task.isCompleted = !task.isCompleted;
          }
          return task;
        });
        setTasks(newTaskList);
      }
    

    return (
        <section className="list">
            <div className="list__field">
                <input 
                    className="list__field--input" 
                    type="text" 
                    placeholder="Digite sua tarefa aqui"
                    onChange={handleNewTask}
                    value={newTask}
                />
                {newTask.length > 0 ? (
                    <button className="btn" type="submit" onClick={handleAddTask}>
                        Criar
                        <PlusCircle size={20} />
                    </button>
                ) : (
                    <button disabled className="btn" type="submit" onClick={handleAddTask}>
                        Criar
                        <PlusCircle size={20} />
                    </button>
                )}
            </div>
            
            
            <header className="list__header">
                <strong className="create">
                    Tarefas criadas {" "}
                    <span>
                        {tasks.length}
                    </span>
                </strong>

                <strong className="completed">
                    Concluidas {" "}
                    <span>
                        {completedTask} de {tasks.length}
                    </span>
                </strong>
            </header>

            <div>
                {tasks.length? (
                    tasks.map((task) => (
                        <ContentTask 
                            key={task.id}
                            task={task}
                            setTasks={setTasks}
                            isCompleted={task.isCompleted}
                            onSelect={onSelect}
                            onDelete={onDelete}
                        />
                    ))
                ) : (
                    <DefaultTask />
                )}
            </div>
        
        </section>
    )
}