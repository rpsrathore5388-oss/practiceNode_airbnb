const express = require('express');
const path = require('path')

const { userRouter } = require('./routes/userRouter');
const { hostRouter } = require('./routes/hostRouter');
const rootDir = require('./utils/pathUtil')

const app = express();
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use((req, res, next) => {
   console.log(req.url, req.method);
   next();
})

app.use(express.urlencoded());

app.use(userRouter);

app.use(hostRouter);

app.use(express.static(path.join(rootDir, 'public')))

app.use((req, res, next) => {
   const filePath = path.join(rootDir, 'views', '404.html');
   res.status(404).sendFile(filePath)
})

const PORT = 3000;
app.listen(PORT, () => {
   console.log(`The server is running at http://localhost:${PORT}`)
})