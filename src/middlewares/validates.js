const connection = require("../database");

exports.duplicateUser = async (req, res, next) => {
    const { rows } = await connection().query(`SELECT * FROM public."users" WHERE "email" = '${req.body.email}';`);
    if(rows.length===0){
        next();
        return;
    }
    return res.status(400).json({message: 'User already exist'});
}

exports.duplicateCategory = async (req, res, next) => {
    const { rows } = await connection().query(`SELECT * FROM public.categories WHERE "name" = '${req.body.name}';`);
    if(rows.length===0){
        next();
        return;
    }
    return res.status(400).json({message: 'Category already exist'});
}

exports.duplicatePost = async (req, res, next) => {
    const { rows } = await connection().query(`SELECT * FROM public.posts WHERE "title" = '${req.body.title}';`);
    if(rows.length===0){
        next();
        return;
    }
    return res.status(400).json({message: 'Posts already exist'});
}