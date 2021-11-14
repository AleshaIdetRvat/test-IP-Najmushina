import React from "react"
import { Redirect, Route, Switch } from "react-router"
import { TaskDetailPage } from "./components/Tasks/TaskDetailPage"
import { Tasks } from "./components/Tasks/Tasks"
import { testData } from "./api/test_data"
import "./assets/style/App.scss"

function App() {
    return (
        <div className='app'>
            <Switch>
                <Route path='/tasks' exact>
                    <Tasks tasks={testData} />
                </Route>
                <Route path='/tasks/:taskId'>
                    <TaskDetailPage tasks={testData} />
                </Route>
                <Redirect to='tasks' />
            </Switch>
        </div>
    )
}

export default App
