const Product = require('../models/productschema');
const getAllProductsStatic = async (req,res)=>{
    console.log(req.query);
    const products = await Product.find({price:{$lt:1000}});
    res.status(200).json(products);
}
const getAllProducts = async (req, res) => {

    const queryObject = {};
    const { featured, company, product_name, sort, fields, numericFilters } = req.query;

    if (featured) {
        queryObject.featured = featured === 'true' ? true : false;
    }

    if (company) {
        queryObject.company = company;
    }

    if (product_name) {
        queryObject.product_name = product_name;
    }

    // numeric filters
    if (numericFilters) {

        const operatorMap = {
            ">": "$gt",
            "<": "$lt",
            ">=": "$gte",
            "<=": "$lte",
            "=": "$eq"
        };

        const regex = /\b(<=|>=|<|>|=)\b/g;

        let filters = numericFilters.replace(regex,
            (match) => `-${operatorMap[match]}-`
        );

        const options = ['price', 'rating'];

        filters.split(',').forEach((item) => {

            const [field, operator, value] = item.split('-');

            if (options.includes(field)) {
                queryObject[field] = { [operator]: Number(value) };
            }

        });
    }

    let result = Product.find(queryObject);

    // sorting
    if (sort) {
        const sortList = sort.split(',').join(' ');
        result = result.sort(sortList);
    }

    // select fields
    if (fields) {
        const fieldList = fields.split(',').join(' ');
        result = result.select(fieldList);
    }

    // pagination
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;

    const skip = (page - 1) * limit;

    result = result.skip(skip).limit(limit);

    const products = await result;

    res.status(200).json({
        products,
        nbHits: products.length
    });

};

module.exports = { getAllProducts, getAllProductsStatic };