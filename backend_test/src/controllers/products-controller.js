
const Response = require("../model/response-model");
const BaseController = require('./base-controller');


class ProductsController extends BaseController {

    constructor(repository) {
        super(repository)
    }

    getProducts = async (req, res) => {

        try {
            const products = await this.repository.getProducts();
            return res.status(200).json(new Response(false, "List of products", products));
        } catch (error) {
            return res.status(500).json(new Response(true, "Error on get products", null, error));
        }
    };

    searchProducts = async (req, res) => {
        const query = req.query.searchQuery;
        if (!query) {
            return res.status(400).json(new Response(true, 'searchQuery parameter is required'));
        }
        try {
            const products = await this.repository.searchProducts(query);
            return res.status(200).json(new Response(false, "Search result", products));
        } catch (error) {
            return res.status(500).json(new Response(true, "Error on get products", null, error));
        }
    };

}
module.exports = ProductsController
