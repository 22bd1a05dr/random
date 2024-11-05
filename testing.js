const express = require('express');
const fs = require('fs'); // Require fs module
const app = express();
const PORT = 3000;

app.use(express.json());
let data = []; // Initialize data as an empty array

try {
    // Try to load data from the JSON file
    const jsonData = fs.readFileSync('C:/languages/WTpractice/products.json', 'utf8');
    data = JSON.parse(jsonData); // Load directly as an array
} catch (err) {
    console.error("Failed to load JSON data:", err);
}

// Route for the homepage
app.get('/home', (req, res) => {
    console.log('Hello KMIT!');
    res.send("<h1>Hello KMIT!</h1>"); // Correct HTML closing tag
});

// Route to display products
app.get('/products', (req, res) => {
    if (!Array.isArray(data) || data.length === 0) {
        // Handle case where data is not an array or is empty
        return res.send("<p>No products available.</p>");
    }

    let productTable = '<table><tr><th>ID</th><th>Name</th><th>Description</th><th>Price</th></tr>';
    
    data.forEach(product => {
        productTable += `
            <tr>
                <td>${product.id}</td>
                <td>${product.name}</td>
                <td>${product.description}</td>
                <td>$${product.price.toFixed(2)}</td>
            </tr>
        `;
    });
    
    productTable += '</table>';
    
    res.send(productTable); // Send the product table as response
});

app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
});
