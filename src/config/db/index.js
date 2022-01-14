const mongoose = require('mongoose');
async function connect(){
    try {
        await mongoose.connect('mongodb://localhost:27017/full_authentication',{
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('connect successfully')
    } catch (error) {
        console.log('faild')
    }
}

module.exports = {connect };