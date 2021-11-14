import React from "react"
import { prettyDate, prettyName } from "../../utils/prettyFormat"

const TaskStatus = ({ status }) => {
    let statusColor = "grey"
    let statusText

    switch (status) {
        case "new":
            statusColor = "red"
            statusText = "Новое"
            break
        case "completed":
            statusColor = "green"
            statusText = "Выполнено"
            break
        case "assigned_to":
            statusColor = "yellow"
            statusText = "Назначено"
            break
        case "started":
            statusColor = "blue"
            statusText = "Выполняется"
            break
        case "declined":
            statusColor = "black"
            statusText = "Отменено"
            break
        default:
            break
    }

    return (
        <div
            className='tasks-item__element task-elem task-status'
            style={{ backgroundColor: `var(--${statusColor})` }}
        >
            {statusText}
        </div>
    )
}

const TasksItem = (props) => {
    const {
        id,
        created_date,
        order_type,
        created_user,
        account,
        terminal,
        status,
        onClick,
    } = props

    return (
        <>
            <div
                className='tasks-item__element task-elem task-number'
                onClick={onClick}
            >
                <div className='task-elem__column'>
                    <h3 className='task-elem__title'>№ {id}</h3>
                    <h4 className='task-elem__subtitle'>
                        {prettyDate(created_date)}
                    </h4>
                </div>
            </div>

            <div className='tasks-item__element task-elem'>
                <div className='task-elem__column'>
                    <h3 className='task-elem__title'>{order_type.name}</h3>
                    <h4 className='task-elem__subtitle'>
                        {prettyName(created_user)}
                    </h4>
                </div>
            </div>

            <div className='tasks-item__element task-elem task-account-and-terminal'>
                <div className='task-elem__column'>
                    <h3 className='task-elem__title'>{account.name}</h3>
                    <h4 className='task-elem__subtitle'>{terminal.name}</h4>
                </div>
            </div>

            <TaskStatus status={status} />
        </>
    )
}

export { TasksItem }
