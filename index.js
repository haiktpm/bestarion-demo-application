const express = require('express')
const app = express()
const port = process.env.PORT || 3032;
var os = require('os');
var d = new Date();
var responsev1 = "docker info: " + os.platform() + "--" + os.release() + "--" + os.version()
var responsev2 = responsev1 + "<br/>Hello Bestarion - The demo is happening today is  " + `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`
var responsev3 = responsev2 + "<br/>System info:<br/>CPU: " + os.loadavg() + "  Memory total: " + os.totalmem() + " Free memory: " + os.freemem()
app.get('/', (req, res) => {
  console.log(`${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}  -  ${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}` + "-----" + req.headers['user-agent'])
  res.send(responsev2)
})
app.listen(port, (err) => {
  if (err) {
    console.log('Error::', err);
  }
  console.log(`Bestarion demo app listening on port ${port}`);
});
