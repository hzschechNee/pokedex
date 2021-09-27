import React from "react";
import { NewPokemon } from "../components/newPokemon";

const fs = require("fs");
const data = {NewPokemon};

let writeStream = fs.createWriteStream("../data.txt");

writeStream.write(data, (err)=> {
    if(err){
        console.log(err.message);
    } else {
        console.log("data written")
    }
})


export default writeStream;