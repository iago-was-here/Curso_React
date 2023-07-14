import { React, useState } from "react";
import PropTypes from 'prop-types';

import "./styles.css";

const NewTask = ({ onNewTask }) => {
    const ESCAPE_KEY = 27;
    const ENTER_KEY = 13;

    const [task, setTask] = useState('');

    const onChange = (event) => {
        setTask(event.target.value);
    };

    const erase = () => {
        setTask('');
    };

    const submit = () => {
        if (onNewTask) {
            onNewTask(task);
            erase();
        }
    };

    const onKeyDown = (event) => {
        if (event.which === ENTER_KEY) {
            submit();
            return;
        }

        if (event.which === ESCAPE_KEY) {
            erase();
        }
    };

    return (
        <input
            className='new-task'
            placeholder='O que precisa ser feito ?'
            value={task} onChange={onChange}
            onKeyDown={onKeyDown}
        />
    );
};

NewTask.propTypes = {
    onNewTask: PropTypes.func,
};

export default NewTask;