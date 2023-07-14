import React from "react";
import { MdDelete } from 'react-icons/md';
import PropTypes from 'prop-types';

import "./styles.css";

const TaskList = ({ taskList, onToggle, onRemove }) => {
    return (
        <ul className='task-list'>
            {
                taskList.map((task) => (
                    <li key={task.id.toString()}>
                        <span
                            className={["task", task.checked ? "checked" : ""].join(" ")}
                            onClick={() => onToggle && onToggle(task)}
                            role='button'
                            tabIndex={0}
                        >
                            {task.description}
                        </span>
                        <button
                            className='remove'
                            type='button'
                            onClick={() => onRemove && onRemove(task)}
                        >
                            <MdDelete size={28} />
                        </button>
                    </li>
                ))
            }
        </ul>
    );
};

TaskList.propTypes = {
    taskList: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            checked: PropTypes.bool.isRequired
        })
    ).isRequired,
    onToggle: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired,
}

export default TaskList;