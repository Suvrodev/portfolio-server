import express, { Application, Request, Response } from "express";
import cors from "cors";
import router from "./app/routes";
import globalErrorHandler from "./app/middleware/globalErrorHandler";
import notFound from "./app/middleware/notFound";
const app: Application = express();

//Parser
app.use(express.json());

//Cors integration
// app.use(cors({ origin: ["*"], credentials: true }));
app.use(
  cors({
    origin: ["http://localhost:3000", "https://boundless-read.netlify.app"],
    credentials: true,
  })
);
// app.use(cors({ origin: "*", credentials: true }));

//application route
// app.use("/api/products", BookRoutes);
// app.use("/api", OrderRoutes);
app.use("/api", router);

const getAController = async (req: Request, res: Response) => {
  res.send("Welcome to Suvrodeb Portfolio");
};
app.get("/", getAController);

//Global Error Handler
app.use(globalErrorHandler);
//Not Found Route
app.use(notFound);

export default app;
