import React, { useState, useEffect } from "react"
import { Tasks } from "./Tasks"

const apiURL =
    "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/9f15021c-fcd4-4657-aff4-2782f62b60b6/test_data.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20211113%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211113T132109Z&X-Amz-Expires=86400&X-Amz-Signature=ba59eef6decc0ce892febd790738e622dfe4cc028dc8243905e0a444f9518171&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22test_data.json%22"

const TasksContainer = () => {
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        const fetchTasks = async () => {
            const response = await fetch(apiURL)
            const fetchedData = await response.json()
            setTasks(fetchedData)
        }
        fetchTasks()
    }, [])

    return <Tasks tasks={tasks} />
}

export { TasksContainer }
