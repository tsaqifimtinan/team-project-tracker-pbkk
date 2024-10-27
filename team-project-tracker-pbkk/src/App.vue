<script setup>
import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
  <header>
    <nav class="navbar">
      <ul>
        <li><a href="/dashboard">Dashboard</a></li>
        <li><a href="/register">Register</a></li>
        <li><a href="/login">Login</a></li>
        <li><a href="/about">About</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <TheWelcome />
  </main>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  background-color: #333;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  text-align: center;
  padding: 1.5rem 2rem;
}



.navbar ul {
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 0;
}

.navbar a {
  text-decoration: none;
  color: #fff; /* Change font color to white */
  font-weight: bold;
}

.navbar a:hover {
  background-color: #fff;
  color: #000;
}

main {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 3rem); /* Adjust this value if the navbar height changes */
  box-sizing: border-box;
  flex-direction: column; /* Ensure vertical alignment */
  font-size: 1.2rem; /* Increase font size for better readability */
  text-align: left; /* Center text for better readability */
  width: 100%; /* Ensure main content takes full width */
}

@media (min-width: 1024px) {
  .navbar ul {
    justify-content: flex-start;
  }
}
</style>