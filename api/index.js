

import Express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = Express();

// Middlewares
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Credentials", true)
    next();
});
app.use(Express.json());
app.use(cors({
    origin: "http://localhost:8081",
}));
app.use(cookieParser()); // Corrected: Call the function

// Import routes
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import postRoutes from "./routes/posts.js";
import commentRoutes from "./routes/comments.js";
import likeRoutes from "./routes/likes.js";

// Use routes
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes); // Corrected: Typo in the route
app.use("/api/auth", authRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/likes", likeRoutes);

// Start server
const PORT = 8081;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
