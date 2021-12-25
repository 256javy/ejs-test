const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs')


const user = {
    firstName: 'Tim',
    lastName: 'Cook',
    amdin : true,
}
app.get('/', (req, res) => {
    res.render('pages/index', {
        user: user
    })
})



app.listen(port, () => {
  console.log(`App listening at port ${port}`)
})
