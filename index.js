const express = require('express');
const axios = require('axios').default;

const app = express();


// Middlewares
app.use(express.json());



// Routes
app.get('/products', async(req, res) => {
    const {page, limit} = req.query;
    try{

        let data = await (await axios.get(`http://localhost:27001/products?_page=${page}&_limit=${limit}`)).data
        
        res.status(200).json({
            status: 'successfully Fetched Data!',
            count: data.length,
            data,
        });
    } catch (err) {
        res.status(400).json({
            status: 'failed',
            err
        });
    }
});


// Running the server on PORT
app.listen(4001, () => {
    console.log("server is running on PORT:4001");
});