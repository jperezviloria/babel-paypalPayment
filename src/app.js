import express, {json} from "express"
import cors from "cors"
import morgan from "morgan"
import PaypalRoutes from "./router/paypal.routes"



//initializations
const app = express();

//middlewares
app.use(cors())
app.use(morgan("dev"))
app.use(json())


//routes
app.use("", PaypalRoutes)

app.set("port",3003)
app.listen(app.get("port"))
console.log(`Server on port ${app.get("port")}`)