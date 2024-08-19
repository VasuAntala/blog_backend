import app from "./index";

let port = process.env.PORT || 3001

app.listen(port,() => {
    console.log(`Listening on port ${port}`);
});