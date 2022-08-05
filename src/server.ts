import chalk from "chalk";
import app from "./app.js"

const port = +process.env.PORT || 5000;

app.listen(port, () => {
    console.log(chalk.bold.green("listening on port " + port));
})