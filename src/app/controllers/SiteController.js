const authentication = require('../models/Full_authen')

class SiteController{

    //GET news
    index(req, res, next){

        authentication.find({}).lean()
            .then(account =>{
                res.render('home',{
                    account

                })
            })
            .catch(next)

        // res.render('home')
    }

    //GET /news:slug
    
}

module.exports = new SiteController()

