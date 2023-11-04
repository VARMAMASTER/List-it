import React, { useState } from 'react';
import "../Css/componentStyles/Todolist.css";

const TodoList = () => {
  const [showForm, setShowForm] = useState(false);
  const [lists, setLists] = useState([]);
  const [listTitle, setListTitle] = useState('');
  const [listDescription, setListDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('medium'); 
  const [showCompleted, setShowCompleted] = useState(false);
  const [sortCriteria, setSortCriteria] = useState(null);
  const [editingList, setEditingList] = useState(null);

  const handleCreateList = () => {
    if (listTitle.trim() === '') {
      return;
    }

    if (editingList) {
      const updatedLists = lists.map((list) => {
        if (list.id === editingList.id) {
          return {
            ...list,
            title: listTitle,
            description: listDescription,
            dueDate,
            priority,
          };
        }
        return list;
      });

      setLists(updatedLists);
      setEditingList(null);
    } else {
      const newList = {
        id: Date.now(),
        title: listTitle,
        description: listDescription,
        dateCreated: new Date().toLocaleString(),
        dueDate,
        priority,
        completed: false,
      };

      setLists([...lists, newList]);
    }

    setListTitle('');
    setListDescription('');
    setDueDate('');
    setPriority('medium');
    setShowForm(false);
  };

  const handleEditList = (listId) => {
    const listToEdit = lists.find((list) => list.id === listId);
    if (listToEdit) {
      setEditingList(listToEdit);
      setListTitle(listToEdit.title);
      setListDescription(listToEdit.description);
      setDueDate(listToEdit.dueDate);
      setPriority(listToEdit.priority);
      setShowForm(true);
    }
  };

  const handleDeleteList = (listId) => {
    const updatedLists = lists.filter((list) => list.id !== listId);
    setLists(updatedLists);
  };

  const toggleTaskCompletion = (listId) => {
    const updatedLists = lists.map((list) => {
      if (list.id === listId) {
        return { ...list, completed: !list.completed };
      }
      return list;
    });
    setLists(updatedLists);
  };

  const sortTasks = (criteria) => {
    if (criteria === 'dueDate') {
      setSortCriteria('dueDate');
    } else if (criteria === 'priority') {
      setSortCriteria('priority');
    } else {
      setSortCriteria(null);
    }
  };

  const filteredLists = showCompleted
    ? lists
    : lists.filter((list) => !list.completed);

  const sortedLists = [...filteredLists];
  if (sortCriteria === 'dueDate') {
    sortedLists.sort((a, b) => (a.dueDate < b.dueDate ? -1 : 1));
  } else if (sortCriteria === 'priority') {
    sortedLists.sort((a, b) => (a.priority < b.priority ? -1 : 1));
  }

  return (
    <>
    <div className='todo'>
      <button className='addButton' onClick={() => setShowForm(true)} >
        Add Task +
      </button>

      {showForm && (
        <div className='formContainer' >
          <input
          className='input'
            type="text"
            placeholder="List Title"
            value={listTitle}
            onChange={(e) => setListTitle(e.target.value)}
          />
          <input
          className='input'
            type="text"
            placeholder="List Description"
            value={listDescription}
            onChange={(e) => setListDescription(e.target.value)}

          />
          <input
          className='input'
            type="date"
            placeholder="Due Date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
          <select
          className='select'
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
          <button className='createButton' onClick={handleCreateList} >
            {editingList ? 'Save' : 'Create'}
          </button>
        </div>
      )}

      <div className='filterSortContainer' >
        <div>
          <label>Show Completed Tasks</label>
          <input
            type="checkbox"
            checked={showCompleted}
            onChange={() => setShowCompleted(!showCompleted)}
          />
        </div>
        <div>
          <button className='addButtons' onClick={() => sortTasks('dueDate')}>Sort by Due Date</button>
          <button className='addButtons' onClick={() => sortTasks('priority')}>Sort by Priority</button>
        </div>
      </div>

      {sortedLists.map((list) => (
        <div className='listItem' key={list.id} >
          <div>Date Created: {list.dateCreated}</div>
          <div>Title: {list.title}</div>
          <div>Description: {list.description}</div>
          <div>Due Date: {list.dueDate}</div>
          <div>Priority: {list.priority}</div>
          <button className='editButton' onClick={() => handleEditList(list.id)} >
            Edit
          </button>
          <button className='deleteButton' onClick={() => handleDeleteList(list.id)} >
            Delete
          </button>
          <input
          className='checkbox'
            type="checkbox"
            checked={list.completed}
            onChange={() => toggleTaskCompletion(list.id)}
          /> Task Completed
        </div>
      ))}
    </div>
    </>
  );
};

export default TodoList;

   
