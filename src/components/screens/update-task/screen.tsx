import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FormNewTask } from '../../organisms';
import { Api, Task } from '../../../api';
import './style.css';

const UpdateTaskScreen = () => {
    const navigate = useNavigate();

    const { id } = useParams();

    const [task, setTask] = useState<Task | undefined>(undefined);

    useEffect(() => {
        if (id) {
            Api.getById(id)
                .then((task) => {
                    setTask(task);
                })
                .catch(() => {
                    alert('La tarea no existe');
                    navigate('/');
                });
        }
    }, [id, navigate]);

    return (
        <>
            <div className='update-task--screen'>
                <h1>Actualizar tarea</h1>
                <FormNewTask task={task} />
            </div>
        </>
    );
};

export default UpdateTaskScreen;