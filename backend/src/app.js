import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import rateLimit from "express-rate-limit";
import authRoutes from "./routes/authRoutes.js";
import projectRoutes from "./routes/projectRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";
import dashboardRoutes from "./routes/dashboardRoutes.js";
const app = express();

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});
// Middleware
app.use(express.json());
app.use(
  cors({

    origin: (origin, callback) => {

      if (
        !origin ||

        origin.includes(
          "vercel.app"
        ) ||

        origin.includes(
          "localhost"
        )
      ) {

        callback(null, true);

      } else {

        callback(
          new Error(
            "Not allowed by CORS"
          )
        );
      }
    },

    credentials: true,
  })
);
app.use(helmet({
    crossOriginResourcePolicy: false,
  }));
app.use(morgan("dev"));
app.use(limiter);
// Routes
app.use("/api/auth", authRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/dashboard", dashboardRoutes);




// Test Route
app.get("/", (req, res) => {
  res.json({
    message: "Backend Running Successfully 🚀",
  });
});
app.use(
  (
    err,
    req,
    res,
    next
  ) => {

    console.log(err);

    res.status(500).json({
      message:
        err.message ||
        "Server Error",

      error: err,
    });
  }
);
export default app;