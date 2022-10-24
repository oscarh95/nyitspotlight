const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require('./routes/users')
const authRoute = require('./routes/auth')
const conversationRoute = require("./routes/conversations");
const messageRoute = require("./routes/messages");

dotenv.config();

mongoose.connect(
    process.env.MONGO_URL,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
      console.log("Database connected");
    }
  );

app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use('/users', userRoute);
app.use('/auth', authRoute);
app.use('/conversations', conversationRoute);
app.use('/messages', messageRoute);


app.listen(8800, () => {
    console.log("Backend uppy")
})