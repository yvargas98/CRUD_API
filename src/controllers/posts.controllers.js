const connection = require("../database");

exports.createPost = async (req, res) => {
    await connection().query(`INSERT INTO public.posts(title, description)
        VALUES ('${req.body.title}', '${req.body.description}');`);
    res.json({message: 'Post created'});
}

exports.getPosts = async (req, res) => {
    try {
        const { rows } = await connection().query('SELECT * FROM public.posts ORDER BY post_id;');
        res.send(rows);
    } catch (error) {
        console.log(error);
    }
}

exports.updatePostById = async (req, res) => {
    const postId = req.params.postId;
    const { rows } = await connection().query(`SELECT * FROM public.posts WHERE "post_id" = ${postId};`);
    if(rows.length){
        await connection().query(`UPDATE public.posts
        SET title='${req.body.title}', description='${req.body.description}'
        WHERE "post_id" = ${postId};`);

        res.json({message: 'Post Updated'});
    }
    else {
        res.json({message:'Post not found'}); 
    }
}

exports.deletePostById = async (req, res) => {
    const postId = req.params.postId;
    const { rows } = await connection().query(`SELECT * FROM public.posts WHERE "post_id" = ${postId};`);
    if(rows.length){
        await connection().query(`DELETE FROM public.posts WHERE "post_id" = ${postId};`);
        res.json({message:'Post deleted'});
    }
    else{
        res.json({message:'Post not found'});
    }
}