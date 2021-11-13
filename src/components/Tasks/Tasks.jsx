import React, { useState, useEffect } from "react"
import { TasksList } from "./TasksList"

const Tasks = ({ tasks }) => {
    const [currentTasks, setCurrentTasks] = useState([])

    const [currentPageNumber, setCurrentPageNumber] = useState(1)
    const [pageSize, setPageSize] = useState(25)

    const getTasks = (currentPageNumber, pageSize) => {}

    useEffect(() => {
        const begin = (currentPageNumber - 1) * pageSize

        const end = begin + pageSize

        setCurrentTasks(tasks.slice(begin, end))
    }, [currentPageNumber, pageSize, tasks])

    //window.nextBlock = () => setCurrentPageNumber(currentPageNumber + 1)
    console.log(tasks.length)
    console.log("currentPageNumber + 1 :>> ", currentPageNumber + 1)
    console.log("tasks.length / pageSize :>> ", tasks.length / pageSize)
    return (
        <div className='tasks'>
            <div className='tasks__container'>
                <header className='tasks__header'>tasks__header</header>

                <TasksList tasks={currentTasks} />

                <div className='tasks__bottom'>
                    <button
                        disabled={currentPageNumber === 1}
                        className='tasks__prev-button'
                        onClick={() =>
                            setCurrentPageNumber(currentPageNumber - 1)
                        }
                    >
                        {"<"}
                    </button>

                    <button
                        disabled={currentPageNumber >= tasks.length / pageSize}
                        className='tasks__prev-button'
                        onClick={() =>
                            setCurrentPageNumber(currentPageNumber + 1)
                        }
                    >
                        {">"}
                    </button>
                </div>
            </div>
        </div>
    )
}

export { Tasks }
