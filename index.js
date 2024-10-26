const express = require('express');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const app = express();

app.use(express.json());
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

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  // Replace with your user fetching logic
  done(null, { id: 1, username: 'user' });
});

app.post('/login', passport.authenticate('local'), (req, res) => {
  res.send('Logged in');
});

app.get('/logout', (req, res) => {
  req.logout();
  res.send('Logged out');
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});