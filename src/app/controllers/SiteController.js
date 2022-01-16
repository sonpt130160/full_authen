const authentication = require('../models/Full_authen')

class SiteController{

    
    async read(req, res, next){
        try {
            var account = await authentication.find().exec();
            res.send(account);
        } catch (error) {
            res.status(500).send(error);
        }
        
    }

    async create(req, res, next){
        try {
            var account = new authentication(req.body);
            var result = await account.save();
            res.send(result);
        } catch (error) {
            res.status(500).send(error);
        }
        
    }

    async edit(req, res, next){ 
        try {
            var account = await authentication.findById(req.params.id).exec();
            account.set(req.body);
            var result = await account.save();
            res.send(result);
        } catch (error) {
            res.status(500).send(error);
        }
    }

    async delete(req, res, next){
        try {
            var account = await authentication.deleteOne({ _id: req.params.id }).exec();
            res.send(account);
        } catch (error) {
            res.status(500).send(error);
        }
        
    }

    
}

module.exports = new SiteController()

