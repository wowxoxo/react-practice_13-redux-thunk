import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Todos } from './Todos'
import { Editor } from './Editor'
import { Notes } from './Notes'

export function Router({ children }) {
  return (
    <BrowserRouter>
      <div>{children}</div>
      <div>
        <Switch>
          <Route path="/todos">
            <Todos />
          </Route>
          <Route path="/editor">
            <Editor />
          </Route>
          <Route path="/notes">
            <Notes />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  )
}
