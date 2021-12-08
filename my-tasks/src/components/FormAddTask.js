import React from "react";
import { useState } from "react";

function FormAddTask ({ onsubmit }) {
    
    const [name, setName] = useState('');
    const [finish, setFinish] = useState(false);


    async function handleSubmit(e) {
        e.preventDefault();

        onsubmit({
            name, 
            finish
        });

        setName('');
        setFinish(false);
    }

    return (
        <div>
            <h3>Criar nova tarefa</h3>
            <form onSubmit={handleSubmit}>
                <div className="taskAddName">
                    <label>Nome da tarefa</label>
                    <input value={name} onChange={e => setName(e.target.value)}></input>
                </div>
                <div className="taskFinish">
                    <label>Finalizada?</label>
                    <input type="checkbox" checked={finish} onChange={e => setFinish(!finish)}></input>
                </div>
                <button className="btnCreateTask" type='submit'>Criar</button>
            </form>
        </div>
    )
}

export default FormAddTask;