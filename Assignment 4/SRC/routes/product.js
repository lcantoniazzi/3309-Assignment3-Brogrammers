const fs = require('fs');


module.exports = {
    addproductPage: (req, res) => {
        res.render('add-product.ejs', {
            title: 'Welcome to Socka | Add a new product'
            ,message: ''
        });
    },
    addproduct: (req, res) => { //comment missing

        let message = '';
        let productName = req.body.productName;
        let productType = req.body.productType;
        let stockLevel = req.body.stockLevel;
        let price = req.body.price;
        let supplierName = req.body.supplierName;

        let productNameQuery = "SELECT * FROM `Product` WHERE productName = '" + productName + "'"; //comment missing

        db.query(productNameQuery, (err, result) => { //comment missing
            if (err) {
                return res.status(500).send(err);
            }
            if (result.length > 0) { //comment missing
                message = 'Product name already exists';
                res.render('add-product.ejs', {
                    message,
                    title: 'Welcome to Socka | Add a new product'
                });
            } else {
                //comment missing
                let query = "INSERT INTO `Product` (productName, productType, stockLevel, price, supplierName) VALUES ('" +
                productName + "', '" + productType + "', '" + stockLevel + "', '" + price + "', '" + supplierName + "')";
                db.query(query, (err, result) => {
                    if (err) {
                        return res.status(500).send(err);
                    }
                    res.redirect('/');
                });
            }
        });
    },
    editproductPage: (req, res) => {
        let productName = req.params.productName;
        let query = "SELECT * FROM `Product` WHERE productName = '" + productName + "' "; //comment missing
        db.query(query, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.render('edit-product.ejs', {
                title: 'Edit  product'
                ,product: result[0]
                ,message: ''
            });
        });
    },
    editproduct: (req, res) => {
        let productName = req.params.productName;
        let productType = req.body.productType;
        let stockLevel = req.body.stockLevel;
        let price = req.body.price;
        let supplierName = req.body.supplierName;
        //comment missing
        let query = "UPDATE `Product` SET `supplierName` = '" + supplierName + "', `productType` = '" + productType + "', `stockLevel` = '" + stockLevel + "', `price` = '" + price + "' WHERE `Product`.`productName` = '" + productName + "'";
        db.query(query, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.redirect('/');
        });
    },
    deleteproduct: (req, res) => {
        let productName = req.params.productName;
        console.log(productName)
        let deleteUserQuery = 'DELETE FROM Product WHERE productName = "' + productName + '"'; //comment missing

        db.query(deleteUserQuery, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.redirect('/');
        });
    },
    prodPricePage: (req, res) => {
        let price = 100000;
        let query = "SELECT * FROM `Product` WHERE price < " + price; //comment missing


    //comment missing
    db.query(query, (err, result) => {
      if (err) {
        res.redirect('/');
      }
      res.render('prodPrice.ejs', {
        title: 'Welcome to GroceryGetaway | View Products'
        ,product: result
      });
    });
    },
    prodByPrice: (req, res) => {
        let price = req.body.price;
        let query = "SELECT * FROM `Product` WHERE price < " + price; //comment missing


        //comment missing
        db.query(query, (err, result) => {
          if (err) {
            res.redirect('/');
          }
          res.render('prodPrice.ejs', {
            title: 'Welcome to Brogrammers Grocery Hub | View Products'
            ,product: result
          });
        });
    },
    prodCityPage: (req, res) => {
        let query = "SELECT * FROM `Product` LEFT JOIN `Supplier` ON Product.supplierName = Supplier.supplierName"; //comment missing


    //comment missing
    db.query(query, (err, result) => {
      if (err) {
        res.redirect('/');
      }
      res.render('prodSupplier.ejs', {
        title: 'Welcome to GroceryGetaway | View Products'
        ,product: result
      });
    });
    },
    prodByCity: (req, res) => {
        let city = req.body.city;
        let query = "SELECT * FROM `Product` LEFT JOIN `Supplier` ON Product.supplierName = Supplier.supplierName WHERE city = '"+city+"'";


        //comment missing
        db.query(query, (err, result) => {
          if (err) {
            res.redirect('/');
          }
          res.render('prodSupplier.ejs', {
            title: 'Welcome to Brogrammers Grocery Hub | View Products'
            ,product: result
          });
        });
    },
};