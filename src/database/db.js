import mongoose from "mongoose";

const connectDatabase = () => {
    console.log("Wait, We are connecting to the DataBase!")

    mongoose.connect( process.env.MONGODB_URI )
        .then(() => { console.log("Database connected") })
        .catch((error) => { console.log(error) });
};

export default connectDatabase;