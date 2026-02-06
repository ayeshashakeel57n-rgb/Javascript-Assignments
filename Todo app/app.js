// app.js

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database();
const todosRef = db.ref('todos');

// Elements
const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');

// Add todo
form.addEventListener('submit', e => {
  e.preventDefault();
  const text = input.value.trim();
  if (!text) return;
  const newTodo = todosRef.push();
  newTodo.set({
    text,
    done: false,
    createdAt: Date.now()
  });
  input.value = '';
});

// Render todos in real-time
todosRef.on('value', snapshot => {
  const data = snapshot.val();
  list.innerHTML = '';
  if (!data) {
    list.innerHTML = '<li>No tasks yet ✨</li>';
    return;
  }

  Object.entries(data).forEach(([id, todo]) => {
    const li = document.createElement('li');
    if (todo.done) li.classList.add('done');

    const span = document.createElement('span');
    span.textContent = todo.text;

    const actions = document.createElement('div');
    actions.className = 'actions';

    // Done toggle
    const doneBtn = document.createElement('button');
    doneBtn.textContent = todo.done ? '↩️' : '✅';
    doneBtn.onclick = () => todosRef.child(id).update({ done: !todo.done });

    // Delete
    const delBtn = document.createElement('button');
    delBtn.textContent = '❌';
    delBtn.onclick = () => todosRef.child(id).remove();

    actions.append(doneBtn, delBtn);
    li.append(span, actions);
    list.appendChild(li);
  });
});