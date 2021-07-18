import express from 'express';
import data from './data'

const app = express()

app.get("/api/products", (req, res) => {
    res.send(data);
});
app.get("/api/products/:id", (req, res) => {
    const product = data.products.find( (item) => item.id == req.params.id)
    if (product) {
        res.send(product)
    } else {
        res.status(404).send({message: 'Product not found'})
    }
});

app.listen(5000, () => {
    console.log('Server started at http://localhost:5000')
})