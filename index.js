const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// Sample API endpoint
app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello from Express!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});