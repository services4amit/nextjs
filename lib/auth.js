import Router from "next/router";
import axios from "axios";

export const simpltGet = async () => {
    console.log("Came inside simple GEt")
    const response =await axios.get('/api/simpleGet')
    console.log("Response",response)
}