import React from "react";
import TaskItem from "./TaskItem";

function AllTasks({tasks, onDelete, onUpdate}) {
    
    async function deleteTask(index) {
        await onDelete({
            index, 
            task: tasks[index]
        });
    }

    return (
        <div className="baseSection">
            <table className="tableTasks">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Finalizada</th>
                        <th>Nome da tarefa</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task, index) => (
                        <TaskItem key={task.id} index={index} task={task} deleteTask={deleteTask} updateTask={onUpdate} />
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default AllTasks;