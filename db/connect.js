import mongoose from "mongoose";
// const connectionString = "mongodb://localhost:27017/TaskManager";

const connectID = (url) => {
	return mongoose.connect(url);
};

export default connectID;
