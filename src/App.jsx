import React from "react"
import { Switch } from "react-router"
import "./assets/style/App.scss"
import { TasksContainer } from "./components/Tasks/TasksContainer"

function App() {
    return (
        <div className='app'>
            <Switch>
                <TasksContainer />
            </Switch>
        </div>
    )
}

export default App
