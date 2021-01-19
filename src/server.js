
const express = require('express')
const app = express()
const port = 8080
// let appInsights = require("applicationinsights");
// appInsights.setup(process.env.APPINSIGHTS_INSTRUMENTATIONKEY || "").start();

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})