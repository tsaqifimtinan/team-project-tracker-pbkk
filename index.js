import express from 'express';
import routes from './routes'; // Adjust the path as necessary
import cookieParser from 'cookie-parser';
import session from 'express-session';
import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';

import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../components/Dashboard.vue'
import Register from '../components/Register.vue'
import Login from '../components/Login.vue'
import About from '../components/About.vue'

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(session({ secret: 'your_secret_key', resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(
  function(username, password, done) {
    // Replace with your user authentication logic
    if (username === 'user' && password === 'password') {
      return done(null, { id: 1, username: 'user' });
    } else {
      return done(null, false, { message: 'Incorrect credentials.' });
    }
  }
));

// Add your routes here
app.use('/api', routes);

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

const routes = [
  { path: '/', component: Home },
  { path: '/dashboard', component: Dashboard },
  { path: '/register', component: Register },
  { path: '/login', component: Login },
  { path: '/about', component: About }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router