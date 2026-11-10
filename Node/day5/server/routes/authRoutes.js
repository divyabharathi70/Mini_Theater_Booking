import express from "express";
import { adddata } from "../controller/authContoller";


const authRoute = express.Router();

// http://localhost:5000/api/auth


authRoute.post("/useradd",adddata)


export default authRoute;