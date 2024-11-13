import express from "express";
// const express =require("express")

const app = express();


app.get("/api/jokes", (req, res) => {
    const Jokes = [{
        id: 1,
        title: "a joke",
        content: "joke1",
    },
    {
        id: 2,
        title: "a joke",
        content: "joke2",
    }, {
        id: 3,
        title: "a joke",
        content: "joke3",
    }, {
        id: 4,
        title: "a joke",
        content: "joke4",
    }, {
        id: 5,
        title: "a joke 6",
        content: "joke5",
    },]
    res.send(Jokes)
});

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`server at http:localhost${port}`);

})
