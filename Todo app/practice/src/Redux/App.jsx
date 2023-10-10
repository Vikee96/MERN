import React from 'react'
import Todo from './Todo'
import { Provider } from 'react-redux'
import store from './Store';

const App = () => {
  return (
    <div>
        <Provider store={store} >
        <Todo/>
        </Provider>
    </div>
  )
}

export default App