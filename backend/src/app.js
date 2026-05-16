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


// Middleware
app.use(express.json());
app.use(
  cors({
    origin: (origin, callback) => {
      if (
        !origin ||
        /^http:\/\/localhost:\d+$/.test(origin)
      ) {
        callback(null, true);
      } else {
        callback(new Error(`CORS policy blocked: ${origin}`));
      }
    },
    credentials: true,
  })
);
app.use(helmet());
app.use(morgan("dev"));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/dashboard", dashboardRoutes);
// Rate Limiter
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});

app.use(limiter);


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