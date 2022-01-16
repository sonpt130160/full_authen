
// const registerRouter = require('./register')
const siteRouter = require('./site')


function route(app){


    // app.use('/register',registerRouter)
    
    
    app.use('/',siteRouter)

    

    
    
}
module.exports = route