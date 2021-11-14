import React from "react"
import { useParams } from "react-router"
import { testData } from "../../api/test_data"

const TaskDetailPage = ({ tasks }) => {
    const { taskId } = useParams()

    const currentTask = tasks.find((task) => task.id === +taskId)

    return (
        <div className='task-detail-page'>
            Task <b>№{currentTask?.id}</b> detail page
        </div>
    )
}

export { TaskDetailPage }
