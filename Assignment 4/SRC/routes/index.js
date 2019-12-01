module.exports = {
  getHomePage: (req, res) => {
    let query = "SELECT * FROM `Product` ORDER BY productName ASC"; //comment missing


    //comment missing
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