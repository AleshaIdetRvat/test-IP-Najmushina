import React, { useState, useEffect } from "react"
import { Redirect, Route, useHistory } from "react-router"
import { Tasks } from "./Tasks"
import { tasks } from "../../api/test_data"
import { TaskDetailPage } from "./TaskDetailPage"

const TasksContainer = () => {
    const [currentTasks, setCurrentTasks] = useState([])
    const [currentPageNumber, setCurrentPageNumber] = useState(1)
    const [pageSize, setPageSize] = useState(5)
    // const history = useHistory()

    useEffect(() => {
        const begin = (currentPageNumber - 1) * pageSize
        const end = begin + pageSize
        setCurrentTasks(tasks.slice(begin, end))
    }, [currentPageNumber, pageSize, tasks])

    return (
        <>
            <Route path='/tasks' exact>
                <Tasks
                    currentTasks={currentTasks}
                    currentPageNumber={currentPageNumber}
                    setCurrentPageNumber={setCurrentPageNumber}
                    tasksLength={tasks.length}
                    pageSize={pageSize}
                    setPageSize={setPageSize}
                />
            </Route>
            <Route path='/tasks/:taskId'>
                <TaskDetailPage tasks={tasks} />
            </Route>
            <Redirect to='tasks' />
        </>
    )
}

export { TasksContainer }
