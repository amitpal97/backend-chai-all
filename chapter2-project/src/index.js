
import dotenv from "dotenv";
import connectDB from "./db/index.js"
import {app} from "./app.js"


dotenv.config({
    path: "./env"
})


connectDB().then(() => {
    app.on("error", (error) => {
        console.log(" Server Error", error);
    })
    app.listen(process.env.PORT || 8000, () => {
        console.log(`servers is running on port ${process.env.PORT || 8000}`);

    })
})
    .catch((error) => {
        console.log("MOngo Db connection failed !!!");

    })





/*

import express from "express"

const app = express();

// first approach

; (async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        app.on("error", (error) => {
            console.log("Error", error);
            throw error
        })
        app.listen(process.env.PORT, (() => {
            console.log(`App is listning on Port ${process.env.PORT}`);

        }))
    }
    catch (error) {
        console.log("Error:", error);
        throw error

    }
})()

*/