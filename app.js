import express from "express";
import taskRoutes from "./routes/tasks.js";
import connectDB from "./db/connect.js";
import notFound from "./middleware/not-found.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";

import "dotenv/config.js";
const app = express();

// middleware
app.use(express.json());
app.use(express.static("./public"));

// routes
app.use("/api/v1/tasks", taskRoutes);
// middleware
app.use(notFound);
app.use(errorHandlerMiddleware);

// database
const port = process.env.PORT || 3000;
const start = async () => {
	try {
		await connectDB(process.env.MONGO_URI);
		app.listen(port, () => console.log(`server is listening on ${port}`));
	} catch (err) {
		console.log(err);
	}
};

start();
