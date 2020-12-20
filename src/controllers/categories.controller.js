const connection = require("../database");

exports.createCategory = async (req, res) => {
    await connection().query(`INSERT INTO public.categories(name, description)
        VALUES ('${req.body.name}', '${req.body.description}');`);
    res.json({message: 'Category created'});
}

exports.getCategories = async (req, res) => {
    try {
        const { rows } = await connection().query('SELECT category_id, name, description FROM public.categories ORDER BY category_id;');
        res.send(rows);
    } catch (error) {
        console.log(error);
    }
}

exports.updateCategoryById = async (req, res) => {
    const categoryId = req.params.categoryId;
    const { rows } = await connection().query(`SELECT * FROM public.categories WHERE "category_id" = ${categoryId};`);
    if(rows.length){
        await connection().query(`UPDATE public.categories
        SET name='${req.body.name}', description='${req.body.description}'
        WHERE "category_id" = ${categoryId};`);

        res.json({message: 'Category Updated'});
    }
    else {
        res.json({message:'Category not found'});
    }
}

exports.deleteCategoryById = async (req, res) => {
    const categoryId = req.params.categoryId;
    const { rows } = await connection().query(`SELECT * FROM public.categories WHERE "category_id" = ${categoryId};`);
    if(rows.length){
        await connection().query(`DELETE FROM public.categories WHERE "category_id" = ${categoryId};`);
        res.json({message:'Category deleted'});
    }
    else{
        res.json({message:'Category not found'});
    }
}