import React, { useState } from "react"
import { useHistory } from "react-router"
import { TasksItem } from "./TasksItem"
import "./Tasks.scss"

const TasksHeader = () => {
    return (
        <>
            <div className='tasks-main-grid__header-item'>Номер / Дата</div>
            <div className='tasks-main-grid__header-item'>
                Тип задания / Автор
            </div>
            <div className='tasks-main-grid__header-item'>
                Аккаунт / Терминал
            </div>
            <div className='tasks-main-grid__header-item'>Статус</div>
        </>
    )
}

const TasksBottom = (props) => {
    const {
        currentPageNumber,
        setCurrentPageNumber,
        tasksLength,
        pageSize,
        setPageSize,
    } = props
    const [isEditMode, setEditMode] = useState(false)

    return (
        <footer className='tasks__bottom tasks-bottom'>
            <div className='tasks-bottom__row'>
                <span className='tasks-bottom__current-tasks-numbers'>
                    записи {currentPageNumber * pageSize - pageSize + 1}-
                    {currentPageNumber * pageSize <= tasksLength
                        ? currentPageNumber * pageSize
                        : tasksLength}
                </span>

                <div className='tasks-bottom__btns-block'>
                    <button
                        disabled={currentPageNumber === 1}
                        className='tasks-bottom__prev-button'
                        onClick={() => setCurrentPageNumber(1)}
                    >
                        {"«"}
                    </button>

                    <button
                        disabled={currentPageNumber === 1}
                        className='tasks-bottom__prev-button'
                        onClick={() =>
                            setCurrentPageNumber(currentPageNumber - 1)
                        }
                    >
                        {"<"}
                    </button>

                    <span
                        className='tasks-bottom__current-page-label'
                        onClick={() => setEditMode(true)}
                    >
                        {isEditMode ? (
                            <input
                                className='tasks-bottom__current-page-input'
                                autoFocus
                                defaultValue={currentPageNumber}
                                type='number'
                                onBlur={(e) => {
                                    setEditMode(false)
                                    const newPageNumber = +e.target.value
                                    if (
                                        newPageNumber <=
                                            tasksLength / pageSize &&
                                        newPageNumber > 0
                                    )
                                        setCurrentPageNumber(newPageNumber)
                                }}
                            ></input>
                        ) : (
                            currentPageNumber
                        )}
                    </span>

                    <button
                        disabled={currentPageNumber >= tasksLength / pageSize}
                        className='tasks-bottom__next-button'
                        onClick={() =>
                            setCurrentPageNumber(currentPageNumber + 1)
                        }
                    >
                        {">"}
                    </button>

                    <button
                        disabled={currentPageNumber >= tasksLength / pageSize}
                        className='tasks-bottom__next-button'
                        onClick={() =>
                            setCurrentPageNumber(
                                Math.ceil(tasksLength / pageSize)
                            )
                        }
                    >
                        {"»"}
                    </button>
                </div>
                <div className='tasks-bottom__select-block'>
                    <span>по</span>
                    <select
                        className='tasks-bottom__select'
                        onChange={(e) => {
                            setCurrentPageNumber(1)
                            setPageSize(+e.target.value)
                        }}
                        value={pageSize}
                    >
                        <option
                            className='tasks-bottom__select-option'
                            value={25}
                        >
                            25
                        </option>
                        <option value={15}>15</option>
                        <option value={5}>5</option>
                    </select>
                    <span>записей</span>
                </div>
            </div>
        </footer>
    )
}

const Tasks = ({
    tasksLength,
    currentPageNumber,
    setCurrentPageNumber,
    pageSize,
    setPageSize,
    currentTasks,
}) => {
    const history = useHistory()

    return (
        <div className='tasks'>
            <div className='tasks__container container'>
                <div className='tasks__main-grid tasks-main-grid'>
                    <div className='tasks-main-grid__container'>
                        <TasksHeader />

                        {currentTasks.map((task) => (
                            <TasksItem
                                onClick={() =>
                                    history.push(`/tasks/${task.id}`)
                                }
                                {...task}
                            />
                        ))}
                    </div>
                </div>

                <TasksBottom
                    currentPageNumber={currentPageNumber}
                    setCurrentPageNumber={setCurrentPageNumber}
                    tasksLength={tasksLength}
                    pageSize={pageSize}
                    setPageSize={setPageSize}
                />
            </div>
        </div>
    )
}

// const Tasks = ({ tasks }) => {
//     const [currentTasks, setCurrentTasks] = useState([])
//     const [currentPageNumber, setCurrentPageNumber] = useState(1)
//     const [pageSize, setPageSize] = useState(5)
//     const history = useHistory()

//     useEffect(() => {
//         const begin = (currentPageNumber - 1) * pageSize

//         const end = begin + pageSize

//         setCurrentTasks(tasks.slice(begin, end))
//     }, [currentPageNumber, pageSize, tasks])

//     return (
//         <div className='tasks'>
//             <div className='tasks__container container'>
//                 <div className='tasks__main-grid tasks-main-grid'>
//                     <div className='tasks-main-grid__container'>
//                         <TasksHeader />

//                         {currentTasks.map((task) => (
//                             <TasksItem
//                                 onClick={() =>
//                                     history.push(`/tasks/${task.id}`)
//                                 }
//                                 {...task}
//                             />
//                         ))}
//                     </div>
//                 </div>

//                 <TasksBottom
//                     currentPageNumber={currentPageNumber}
//                     setCurrentPageNumber={setCurrentPageNumber}
//                     tasksLength={tasks.length}
//                     pageSize={pageSize}
//                     setPageSize={setPageSize}
//                 />
//             </div>
//         </div>
//     )
// }

export { Tasks }
