import React, { useState } from "react";
import api from "../services/api";

function SearchTask() {

    const [name, setName] = useState('');
    const [task, setTask] = useState({});

    async function searchTask() {
        const response = await api.get(`/tasks/${name}`);

        setTask(response.data);
    }

    return(
        <div className="baseSection">
            <div className="searchSection">
                <h3>Procurar tarefa por nome*</h3>
                <input value={name} onChange={e => setName(e.target.value)}></input>
                <button className="searchBtn" onClick={searchTask}>Pesquisar</button>
                {task.id &&
                    <div className="resultSearch">
                        <span>Id: {task.id}</span>
                        <span>Nome: {task.name}</span>
                        <span>Finalizada: {task.finish ? "Sim" : "Não"}</span>
                    </div>
                }
            </div>
            <small>* Será exibido apenas um resultado, o primeiro encontrado</small>
        </div>
    )
}

export default SearchTask;