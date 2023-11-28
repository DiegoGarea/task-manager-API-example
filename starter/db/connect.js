const mongoose = require('mongoose');

const conectionString =
  'mongodb+srv://nodejstutorial:a2JDXuYW7UvJXnSR@nodeexpressprojects.0eihcg5.mongodb.net/03-TASK-MANAGER?retryWrites=true&w=majority';

mongoose
  .connect(conectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log('DB is connected'))
  .catch((err) => console.log(err));
