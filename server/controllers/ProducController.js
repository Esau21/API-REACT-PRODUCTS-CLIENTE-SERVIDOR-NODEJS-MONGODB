const Produc = require('../models/Product');


const getProducts = async (req, res) => {
    Produc.find((err, product) => {
        if (!err) {
            res.status(200).json(product);
        } else {
            res.status(400).send(err.message);
        }
    });
}

const GetProductId =  (req, res) => {
    Produc.findById(req.params.id, (err, products) => {
        if (!err) {
            res.status(200).json(products)
        } else {
            res.status(400).send(err.message);
        }
    });
}

const AddProduct = async (req, res) => {
    const { name, description, price, proveedor, pais } = req.body;
    const Agree_Product = new Produc({
        name,
        description,
        price,
        proveedor,
        pais,
    });

    try {
        const save_product = await Agree_Product.save();
        if (!save_product) {
            res.status(400).json({ status: 'El producto no pudo ser agregado' })
        }
        res.status(200).json({ status: 'El producto se guardo correctamente' })
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const Update_Product = async (req, res) => {
    const { name, description, price, proveedor, pais } = req.body;
    const id = req.params.id;
    const update_product = ({
        name,
        description,
        price,
        proveedor,
        pais,
    });

    try {
        const update = await Produc.findByIdAndUpdate(
            id,
            update_product,
        );
        if (!update) {
            res.status(400).json({ status: 'El producto no puede actualizarce' });
        }
        res.status(200).json({ status: 'Producto actalizado correctamente revisa la base de datos' });
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const Delete_Product = async (req, res) => {
    const id = req.params.id;
    try {
        const delete_product = await Produc.findByIdAndDelete(id);
        if (!delete_product) {
            res.status(400).json({ status: 'No se ha podido eliminar el producto de aca.' });
            return
        }
        res.status(200).json({ status: 'El producto se elimino exitosamenete.' });
    } catch (error) {
        res.status(400).send(error.message);
    }
}





module.exports = { getProducts, AddProduct, Update_Product, Delete_Product, GetProductId };