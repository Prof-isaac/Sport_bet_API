const express = require("express");
const userRouter = require("./routers/user");
const adminRouter = require("./routers/admin");
const port = process.env.PORT || 3000;
require("./db/db");
const app = express();
app.use(express.json()); // It enable passing of json object in the body of the request
app.use(userRouter); //it enables passing userRoutes
app.use(adminRouter);
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
