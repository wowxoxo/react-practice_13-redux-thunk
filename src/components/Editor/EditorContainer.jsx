import React from 'react'
import { Editor } from './Editor'
import { useSelector, useDispatch } from 'react-redux';
import { CHANGE_TODO_TEXT, changeTodoText, changeTodoDone, removeTodo } from '../../store/todos/actions';

export function EditorContainer() {
  const dispatch = useDispatch()
  const items = useSelector(state => state.todos)


  const handleTextChange = (item, value) => {
    // dispatch({ type: CHANGE_TODO_TEXT, payload: {  id: item.id, text: value }  })
    dispatch(changeTodoText(item, value))
  }

  const handleToggle = (item, value) => {
    dispatch(changeTodoDone(item, value))
  }

  const handleRemove = (item) => {
    dispatch(removeTodo(item))
  }

  return (
    <Editor
      items={items}
      onTextChange={handleTextChange}
      onToggle={handleToggle}
      onRemove={handleRemove}
    />
  )
}
