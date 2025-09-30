
const getHomepage = (req, res) => {
    res.send('Hello World! And Nodemon')
}

const getABC = (req, res) => {
    res.send('Check ABC')
}

const getPresent111 = (req, res) => {
    //res.send('<h1>Present111</h1>')
    res.render('sample.ejs')
}

module.exports = {
    getHomepage,
    getABC,
    getPresent111
}