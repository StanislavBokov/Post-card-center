const express = require('express')
const mongoose = require('mongoose')
const config = require('config')
const chalk = require('chalk')
const cors = require('cors')
const fileUpload = require('express-fileupload');

const app = express()
app.use(cors())
app.use(express.json())
app.use(fileUpload({
    createParentPath: true,
}))

app.post('/uploadedFiles', async (req, res) => {
  
    const slicedDirname = __dirname.slice(0, __dirname.length - 6)

     const file = req.files.file

        const newFileName = encodeURI(Date.now() + '-' + file.name);

        file.mv(`${slicedDirname}/client/public/uploads/${newFileName}`, err => {
          if(err) {
              return res.status(500).send(err);
          }  
        })
      
    res.status(200).send(`uploads/${newFileName}`)
})
async function start() {
    try {
      await mongoose.connect("mongodb+srv://Stanislav:Bkktdfkj666@cluster0.tbqoo.mongodb.net/?retryWrites=true&w=majority")
      console.log(chalk.green('MongoDB connected'));
      app.listen(config.get('port'), () => console.log(chalk.green('Server has been started')))
    } catch (error) {
      console.log(chalk.red(error.message));
      process.exit(1)
    }
}
start()
