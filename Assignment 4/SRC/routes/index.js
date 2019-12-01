module.exports = {
  getHomePage: (req, res) => {
    let query = "SELECT * FROM `Product` ORDER BY productName ASC";
    //Setting query to select all products from our database and order them alphabetically


    //Sending the request to the database and displaying results
    db.query(query, (err, result) => {
      if (err) {
        res.redirect('/');
      }
      res.render('index.ejs', {
        title: 'Welcome to GroceryGetaway | View Products'
        ,product: result
      });
    });
  },
};
