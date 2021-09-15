const app = require("./custom_modules/express");

const port = 4000;

app.listen(port, (err) => {
  if (err) throw err;
  console.log(`Server running in http://127.0.0.1:${port}`);
});
