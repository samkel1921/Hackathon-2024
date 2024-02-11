import Card from './Card';
import './TaskItem.css';
import * as React from 'react';

function TaskItem(props) {

    return (
        <Card className='task'>
            <h2>{props.desc}</h2>
            <div className='button'>
                <button
                    className='deleter'
                    onClick={() => props.act(props.id)}>
                    Mark as done
                </button>
            </div>
        </Card>
    );
}

export default TaskItem;