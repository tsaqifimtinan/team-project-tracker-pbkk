<template>
  <div class="dashboard">
    <aside class="sidebar">
      <ul>
        <li v-for="project in projects" :key="project.id" @click="selectProject(project)">
          {{ project.name }}
        </li>
      </ul>
    </aside>
    <main class="main-content">
      <div v-if="selectedProject">
        <h1>{{ selectedProject.name }}</h1>
        <p>{{ selectedProject.description }}</p>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="task in selectedProject.tasks" :key="task.id">
              <td>{{ task.title }}</td>
              <td>{{ task.description }}</td>
            </tr>
          </tbody>
        </table>
        <button @click="addTask">Add New Task</button>
      </div>
      <div v-else>
        <h1>Welcome to the Dashboard</h1>
        <p>Select a project from the sidebar to view details.</p>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const projects = ref([
  { id: 1, name: 'Not Started', description: 'Projects that has not been started yet', tasks: [
    { id: 1, title: 'Task 1', description: 'Description for Task 1' },
    { id: 2, title: 'Task 2', description: 'Description for Task 2' },
  ]},
  { id: 2, name: 'In Progress', description: 'In progress project that needed updates', tasks: [
    { id: 3, title: 'Task 3', description: 'Description for Task 3' },
    { id: 4, title: 'Task 4', description: 'Description for Task 4' },
  ]},
  { id: 3, name: 'Finished', description: 'Finished projects will showed here', tasks: [
    { id: 5, title: 'Task 5', description: 'Description for Task 5' },
    { id: 6, title: 'Task 6', description: 'Description for Task 6' },
  ]},
]);

const selectedProject = ref(null);

const selectProject = (project) => {
  selectedProject.value = project;
};

const addTask = () => {
  if (selectedProject.value) {
    const newTaskId = selectedProject.value.tasks.length + 1;
    selectedProject.value.tasks.push({
      id: newTaskId,
      title: `Task ${newTaskId}`,
      description: `Description for Task ${newTaskId}`,
    });
  }
};
</script>

<style scoped>
.dashboard {
  display: flex;
  height: calc(100vh - 3rem); /* Adjust height to account for navbar */
  margin-top: 3rem; /* Add top margin to account for navbar */
}

.sidebar {
  width: 250px;
  background-color: #333;
  padding: 1rem;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  position: fixed; /* Fix the sidebar to the left side */
  top: 4rem; /* Position below the navbar */
  bottom: 0;
  left: 0;
  overflow-y: auto; /* Add scroll if content overflows */
}

.sidebar h2 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.sidebar ul {
  list-style: none;
  padding: 0;
}

.sidebar li {
  padding: 0.5rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

.sidebar li:hover {
  background-color: #fff;
  color: #000;
}

.main-content {
  flex: 1;
  padding: 2rem;
  margin-left: 250px; /* Add left margin to account for sidebar width */
}

.main-content h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.main-content p {
  font-size: 1.2rem;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 1rem;
}

table, th, td {
  border: 1px solid #ccc;
}

th, td {
  padding: 0.5rem;
  text-align: left;
}

button {
  padding: 0.5rem 1rem;
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>