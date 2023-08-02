import  express, {Application} from "express";
import DataBaseFunction from "./Config/db";

// port
const port: number = 2005;

// Instantiating the Application
const app: Application = express();

// Instantiating middleWares
app.use(express.json());

// Instanciating Database
DataBaseFunction()


app.listen(port, () => {
  console.log("Listening on port", port);
});