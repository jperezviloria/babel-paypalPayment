import express, {json} from "express"
import cors from "cors"
import morgan from "morgan"

const app = express();


app.use(cors())
app.use(morgan("dev"))
app.use(json())

app.set("port",3003)
app.listen(app.get("port"))
console.log(`Server on port ${app.get("port")}`)