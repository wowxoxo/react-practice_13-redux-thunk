import React, { useState, useEffect } from 'react'
import { Editor } from './Editor'
import { todoList } from "../../api/todos";

export function EditorContainer() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setItems(todoList);
    }, 1000);
  }, []);


  const handleTextChange = () => {
    
  }

  const handleToggle = () => {
    
  }

  const handleRemove = (item) => {
    
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
