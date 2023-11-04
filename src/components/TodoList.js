import React, { useState } from 'react';

const TodoList = () => {
  const [showForm, setShowForm] = useState(false);
  const [lists, setLists] = useState([]);
  const [listTitle, setListTitle] = useState('');
  const [listDescription, setListDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('medium'); // Default priority
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
    <div>
      <button onClick={() => setShowForm(true)} style={styles.addButton}>
        +
      </button>

      {showForm && (
        <div style={styles.formContainer}>
          <input
            type="text"
            placeholder="List Title"
            value={listTitle}
            onChange={(e) => setListTitle(e.target.value)}
            style={styles.input}
          />
          <input
            type="text"
            placeholder="List Description"
            value={listDescription}
            onChange={(e) => setListDescription(e.target.value)}
            style={styles.input}
          />
          <input
            type="date"
            placeholder="Due Date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            style={styles.input}
          />
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            style={styles.select}
          >
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
          <button onClick={handleCreateList} style={styles.createButton}>
            {editingList ? 'Save' : 'Create'}
          </button>
        </div>
      )}

      <div style={styles.filterSortContainer}>
        <div>
          <label>Show Completed Tasks</label>
          <input
            type="checkbox"
            checked={showCompleted}
            onChange={() => setShowCompleted(!showCompleted)}
          />
        </div>
        <div>
          <button onClick={() => sortTasks('dueDate')}>Sort by Due Date</button>
          <button onClick={() => sortTasks('priority')}>Sort by Priority</button>
        </div>
      </div>

      {sortedLists.map((list) => (
        <div key={list.id} style={styles.listItem}>
          <div>Date Created: {list.dateCreated}</div>
          <div>Title: {list.title}</div>
          <div>Description: {list.description}</div>
          <div>Due Date: {list.dueDate}</div>
          <div>Priority: {list.priority}</div>
          <button onClick={() => handleEditList(list.id)} style={styles.editButton}>
            Edit
          </button>
          <button onClick={() => handleDeleteList(list.id)} style={styles.deleteButton}>
            Delete
          </button>
          <input
            type="checkbox"
            checked={list.completed}
            onChange={() => toggleTaskCompletion(list.id)}
            style={styles.checkbox}
          /> Task Completed
        </div>
      ))}
    </div>
  );
};

const styles = {
  addButton: {
    fontSize: '24px',
    backgroundColor: 'green',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    marginBottom: '10px',
  },
  formContainer: {
    margin: '10px 0',
  },
  input: {
    width: '100%',
    padding: '5px',
    margin: '5px 0',
  },
  select: {
    width: '100%',
    padding: '5px',
    margin: '5px 0',
  },
  createButton: {
    backgroundColor: 'green',
    color: 'white',
    border: 'none',
    padding: '5px 10px',
    cursor: 'pointer',
  },
  filterSortContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '10px 0',
  },
  listItem: {
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '10px',
    margin: '10px 0',
  },
  editButton: {
    backgroundColor: 'blue',
    color: 'white',
    border: 'none',
    padding: '5px 10px',
    cursor: 'pointer',
  },
  deleteButton: {
    backgroundColor: 'red',
    color: 'white',
    border: 'none',
    padding: '5px 10px',
    cursor: 'pointer',
  },
  checkbox: {
    margin: '0 10px',
  },
};

export default TodoList;

   
