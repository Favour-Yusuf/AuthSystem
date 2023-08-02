import { Router } from "express";
import { register } from "../Controller/UserController";

const Allroute = Router()

Allroute.route("register").post(register)


export default Allroute