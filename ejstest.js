exports.get_home=function (req,res) {
    var ret ={code:0,message:"succeed",result:[]};
   

    var mysql = require('mysql');
    var connection = mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'',
        database:'test'
    });
    connection.connect();
    console.log("connected");

    connection.query('select * from banner',function(serr,sresult,sfields){

        

        console.log(sresult[0].imgurl);
        
        res.render("home",ret);
        connection.end();
    });
  
    
};
exports.get_swiper=function(req,res){
    var ret={result:{values:"succeed"}};
    res.render("swiperdemo",ret);
};
exports.get_myAutoSlide=function(req,res){
    var ret={result:{values:"succeed"}};
    res.render("myautoslidk",ret);
};