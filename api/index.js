

import Express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import multer from "multer";

const app = Express();

// Middlewares
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Credentials", true)
    next()
})
app.use(Express.json());
app.use(cors({
    origin: "http://localhost:3000",
}));
app.use(cookieParser());

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '../social-media-app/public/upload')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname);
    },
});

const upload = multer({ storage: storage });

app.post("/api/upload", upload.single("file"), (req, res) => {
    const file = req.file;
    res.status(200).json(file.filename);
});

// Import routes
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import postRoutes from "./routes/posts.js";
import commentRoutes from "./routes/comments.js";
import likeRoutes from "./routes/likes.js";
import relationshipRoutes from "./routes/relationships.js";

// Use routes
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes); // Corrected: Typo in the route
app.use("/api/auth", authRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/likes", likeRoutes);
app.use("/api/relationships", relationshipRoutes);

// Start server
const PORT = 8081;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
