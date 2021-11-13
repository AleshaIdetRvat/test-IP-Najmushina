import React from "react"

const TasksList = ({ tasks }) => {
    return (
        <div className='tasks__list tasks-list'>
            {tasks.map((task) => (
                <h2>Task ID: {task.id}</h2>
            ))}
        </div>
    )
}

export { TasksList }
