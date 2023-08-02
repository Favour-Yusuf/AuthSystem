import  express, {Application} from "express";
import DataBaseFunction from "./Config/db";
import Allroute from "./Router/router";

// port
const port: number = 2005;

// Instantiating the Application
const app: Application = express();

// Instantiating middleWares
app.use(express.json());

// Instanciating Database
DataBaseFunction()

app.use("/api",Allroute  )


app.listen(port, () => {
  console.log("Listening on port", port);
});