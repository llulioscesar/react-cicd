import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Api, Task } from '../../../api';
import './style.css';
import { ItemListTask } from '../../molecules';

const ListTaskScreen = () => {

    const [tasks, setTasks] = useState<Task[]>([]);

    useEffect(() => {
        Api.getAll()
            .then((tasks) => {
                setTasks(tasks);
            })
            .catch((error) => {
                alert('Error al obtener las tareas');
            });
    }, []);

    return (
        <>
        <Link to="/create">Crear tarea</Link>
        <hr/>
            <div className='update-task--screen'>
                <ul>
                    {tasks.map((task, index) => {
                        return (
                            <ItemListTask key={index} id={task.id} title={task.title} description={task.description} completed={task.completed} />
                        );
                    })}
                </ul>
            </div>
        </>
    );
};

export default ListTaskScreen;