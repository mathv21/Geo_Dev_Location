const Dev = require('../models/Dev');
//const parseStringAsArray = require('../utils/parseStringAsArray');

 module.exports = {
    async update(req, res){
        
        const { nome }  = req.body;

        const devUpdate = await Dev.findByIdAndUpdate(id,{

            name: name,

        });
        
        return res.json({devs});
    }
 };