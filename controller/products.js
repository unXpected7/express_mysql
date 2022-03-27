const Products = require("../models/model");
const _ = require('lodash');

exports.store = async (req, res) => {
  const { name, price, stock, status, img_url,users_id } = req.body;
  console.log('body', req.body)
  try {
    if (_.isNil(name) || _.isNil(price) || _.isNil(stock)) 
    return res.status(400).send("some field cannot be empty");
    
    const product = await Products.create({
      name,
      price,
      stock,
      status,
      img_url,
      users_id
    });
    
    res.status(201).json({
      msg: "product created",
      product: product,
    });
  } catch (error) {
    // res.status(500).send("internal server error");
    res.status(500).json({
      msg:error.message,
      status:"internal server error"
      })
  }
};

exports.get = async (req, res) => {
  try {
    const products = await Products.findAll();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).send("internal server error");
  }
};

exports.search = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Products.findOne({
      where: {
        id,
      },
    });
    if (!product) return res.status(404).send("not found");
    res.status(200).send(product);
  } catch (error) {
    res.status(500).send("internal server error");
  }
};
exports.update = async (req, res) => {
  const { id } = req.params;
  const { name, price, stock, status, img_url } = req.body;
  try {
    const product = await Products.findOne({
      where: {
        id,
      },
    });
    if (!product) return res.status(404).send("not found");

    await Products.update({ name, price, stock, status, img_url }, { where: { id: product.id } });

    res.status(202).send(`product with id : ${product.id} updated`);
  } catch (error) {
    res.status(500).send("internal server error");
  }
};

exports.destroy = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Products.findOne({ where: { id } });

    if (!product) return res.status(404).send("not found");

    await Products.destroy({ where: { id: product.id } });

    res.status(200).send(`product with id : ${product.id} successfully deleted`);
  } catch (error) {
    res.status(500).send("internal server error");
  }
};