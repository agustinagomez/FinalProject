import app from "./routes/index";
import "./database/index";

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server Started in http://localhost:${PORT}`);
});