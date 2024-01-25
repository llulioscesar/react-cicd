import React, { FC, useEffect } from 'react';
import { Input } from '../../atoms';
import './style.css';
import Check from '../../atoms/check/check';


type Props = {
    title?: string;
    description?: string;
    completed?: boolean;
    isNew?: boolean;
    onChange?: (title: string, description: string, completed: boolean) => void;
};

const FormFieldsNewTask: FC<Props> = (porps) => {
    const { onChange, isNew = true } = porps;

    const [title, setTitle] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [completed, setCompleted] = React.useState(false);

    useEffect(() => {
        if (porps.title && porps.title !== title) {
            setTitle(porps.title);
        }
        if (porps.description && porps.description !== description) {
            setDescription(porps.description);
        }
        if (porps.completed && porps.completed !== completed) {
            setCompleted(porps.completed);
        }
    }, [completed, description, porps.completed, porps.description, porps.title, title]);

    const handleOnChangeTitle = (value: string) => {
        setTitle(value);
        onChange && onChange(value, description, completed);
    }

    const handleOnChangeDescription = (value: string) => {
        setDescription(value);
        onChange && onChange(title, value, completed);
    }

    const handleOnChangeCompleted = (value: boolean) => {
        setCompleted(value);
        onChange && onChange(title, description, value);
    }

    return (
        <>
            <div className='form--fields--new-task'>
                <Input placeholder='Titulo' value={title} onChange={handleOnChangeTitle} />
                <Input placeholder='Descripcion' value={description} onChange={handleOnChangeDescription} />
                {!isNew && (
                    <Check checked={completed} onChange={handleOnChangeCompleted} label='Finalizada' />
                )}
            </div>
        </>
    )
}

export default FormFieldsNewTask;