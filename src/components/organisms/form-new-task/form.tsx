import React, { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../atoms';
import { FormFieldsNewTask } from '../../molecules';
import { Api, Task } from '../../../api';
import './style.css';

type Props = {
    task?: Task;
};

const Form: FC<Props> = (props) => {

    const {task } = props;

    const navigate = useNavigate();

    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [completed, setCompleted] = useState<boolean>(false);

    useEffect(() => {
        if (task) {
            setTitle(task.title);
            setDescription(task.description);
            setCompleted(task.completed);
        }
    }, [task, setTitle, setDescription, setCompleted]);

    const handleDelete = async () => {
        const isConfirmed = window.confirm('¿Estas seguro de eliminar esta tarea?');
        if (isConfirmed) {
            await Api.delete(task?.id || '');
            alert('Tarea eliminada');
            navigate('/');
        }
    };

    const handleSave = async () => {
        if (task?.id !== undefined) {
            await Api.update(task.id, {
                title,
                description,
                completed,
            });
            alert('Tarea actualizada');
        } else {
            await Api.create({
                title,
                description,
            })
            alert('Tarea creada');
            navigate('/');
        }
    };

    const handleOnchange = (title: string, description: string, completed: boolean) => {
        setTitle(title);
        setDescription(description);
        setCompleted(completed);
    }

    return (
        <div className='form-new-task'>
            <FormFieldsNewTask
                title={title}
                description={description}
                completed={completed}
                onChange={handleOnchange}
                isNew={task?.id === undefined}
            />
            <div className='form-new-task--actions'>
                <Button disabled={title.trim() === ''} onClick={handleSave}>Guardar</Button>
                {task?.id !== undefined && (
                    <Button onClick={handleDelete}>Eliminar</Button>
                )}
            </div>
        </div>
    )
}

export default Form;