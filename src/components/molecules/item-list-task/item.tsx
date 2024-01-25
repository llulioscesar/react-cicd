import React, { FC } from "react";
import { Link } from "react-router-dom";
import { Task } from "../../../api";
import './style.css';

const ItemListTask: FC<Task> = (props) => {
    const { id, title, description, completed } = props;
    return (<>
        <Link className="item-list-task" to={`/task/${id}`}>
            <div>
                <h3>{title}</h3>
                {description !== '' && <p>{description}</p>}
                <p className={`item-list-task--status ${completed ? 'item-list-task--status-done' : 'item-list-task--status-pending'}`}>{completed ? 'Completada' : 'Pendiente'}</p>
            </div>
        </Link>
        <hr />
    </>);
};

export default ItemListTask;