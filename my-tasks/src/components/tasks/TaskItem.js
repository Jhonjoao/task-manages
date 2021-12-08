import React, { useState } from "react";
import { BsTrash, BsPencilSquare, BsArrowRightCircle, BsXCircle } from "react-icons/bs";

function TaskItem({index, task, deleteTask, updateTask}) {
    
    const [edit, setEdit] = useState(false);
    const [name, setName] = useState('');
    const [finish, setFinish] = useState(false);


    function ableUpdate() {
        setName(task.name);
        setFinish(task.finish);
        setEdit(!edit);
    }

    function finishTask() {
        let editTask = {
            id: task.id,
            name,
            finish
        }

        updateTask({
            index,
            task: editTask
        });

        setEdit(!edit);
    }

    return (
        <>
        {edit !== true ? 
            <tr>
                <td>{task.id}</td>
                <td>
                    <input className="justViewCheck" disabled={!edit} type="checkbox" checked={task.finish}/>
                </td>
                <td>{task.name}</td>
                <td className="actionsTable">
                    <BsTrash onClick={() => deleteTask(index)} />
                    <BsPencilSquare onClick={() => ableUpdate(index)} />
                </td>
            </tr>
            : 
            <tr>
                <td>{task.id}</td>
                <td>
                    <input disabled={!edit} type="checkbox" checked={finish} onChange={e => setFinish(!finish)}/>
                </td>
                <td>
                    <input value={name} onChange={e => setName(e.target.value)} ></input>
                </td>
                <td className="actionsTable">
                    <BsXCircle onClick={ableUpdate} />
                    <BsArrowRightCircle onClick={finishTask} />
                </td>
            </tr>
        }
        </>
    )
}

export default TaskItem;