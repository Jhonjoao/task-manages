import { useEffect, useState } from 'react';
import './App.css';
import AllTasks from './components/tasks/AllTasks';
import FormAddTask from './components/FormAddTask';
import Loader from './components/Loader';
import ModalAdd from './components/ModalAdd';
import SearchTask from './components/SearchTask';
import api from './services/api';
require('dotenv').config();

function App() {

  const [loading, setLoading] = useState(true);
  const [tasks, setTasks] = useState([]);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    async function loadTasks()  {
      const response = await api.get('/tasks');

      setTasks(response.data);
      setLoading(false);
    }
    loadTasks();
  }, [])

  async function createTask(data) {
    closeModal();
    setLoading(true);

    const response = await api.post('/tasks', data);

    setTasks([...tasks, response.data]);

    setLoading(false);
  }

  async function deleteTasks({index, task}) {
    setLoading(true);

    await api.delete(`/tasks/${task.id}`);

    let list = [...tasks];
    list.splice(index, 1);

    setTasks(list);

    setLoading(false);
  }

  async function updateTask ({index, task}) {
    setLoading(true);

    await api.patch(`/tasks/${task.id}`, {
      name: task.name,
      finish: task.finish
    });

    let list = [...tasks];
    list[index] = task;

    setTasks(list);

    setLoading(false);
  }

  const showAddModal = () => {
    setModal(true);
  }

  const closeModal = () => {
    setModal(false);
  };

  return (
    <div className="App">
      <Loader loading={loading} />
      <header className="App-header">
        <h1>Gerenciador de tarefas</h1>
      </header>
      <div className="app-body">
        <div className="alignRight">
          <button onClick={showAddModal} className="addTaskBtn">Adicionar Tarefa</button>
        </div>
        <AllTasks tasks={tasks} onUpdate={updateTask} onDelete={deleteTasks} />
        <SearchTask  />
        {modal === true && 
          <ModalAdd closeModal={closeModal}>
            <FormAddTask onsubmit={createTask} />
          </ModalAdd>
        }
      </div>
    </div>
  );
}

export default App;
