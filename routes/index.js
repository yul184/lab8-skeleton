
/*
 * GET home page.
 */

exports.view = function(req, res){
  var random_var = Math.random();
  if(random_var < 0.5){
    res.render('index');  
  }else{
    res.render("index_alternate");
  }
};