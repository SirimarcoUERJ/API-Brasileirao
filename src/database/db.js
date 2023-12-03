const mongoose = require("mongoose");

const connectDatabase = () => {
    console.log("Wait, We are connecting to the DataBase!")

    mongoose.connect("mongodb+srv://root:root@maincluster.f0fdbsc.mongodb.net/?retryWrites=true&w=majority")
        .then(() => { console.log("Database connected") })
        .catch((error) => { console.log(error) });
};

module.exports = connectDatabase;