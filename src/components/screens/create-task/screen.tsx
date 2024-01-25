import React from 'react';
import { FormNewTask } from '../../organisms';
import './style.css';

const CreateTaskScreen = () => {

    return (
        <>
            <div className='create-task--screen'>
                <h1>Crear tarea</h1>
                <FormNewTask />
            </div>
        </>
    )
};

export default CreateTaskScreen;