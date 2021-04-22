import React from 'react';
import '../../App.css';
import { TestButton } from '../Button';
import ToDoList from '../TodoList/ToDoList';

export default function Home() {
  return (
    <>
      <h1 className='home'>EPIC</h1>
      <TestButton type='button'>Hello</TestButton>
      <ToDoList/>
    </>
  );
}
