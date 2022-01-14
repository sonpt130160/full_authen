const authentication = require('../models/Full_authen')


class RegisterController{

    create(req, res, next){
        res.render('register/create')
    }

    login(req, res, next){
        const newAuthentication = new authentication(req.body)
            newAuthentication.save()
            .then(() => res.redirect('register/signin'))
            .catch(next)   
    }
    signin(req, res, next){
        res.send('aaaaaaa')
        
    }
}

module.exports = new RegisterController()
