var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var ObjectId = require('mongodb').ObjectID;

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
var Product = require('./Product');
var sanban = require('../functions');
var config = require('../config');
var fs = require('fs');
/* For Image */
var multer  = require('multer');
var uploads = multer({ dest: './uploads/products/' });
var multiupload = uploads.array('images',5);
var uploadss = multer({ dest: './uploads/qrcodes/' });

var qrcode_image = uploadss.fields([{ name: 'qrcode_image', maxCount: 1 }]);

// CREATES A NEW Prodcut
router.post('/add_product', function (req, res) {
	var multiarray = [];
  //res.status(200).send(req.body);
  multiupload(req,res,function(err) {
  	let base64Data = req.body.images;
  	var filename = sanban.san_Password();
  	sanban.uploadBase64Image(base64Data,function(image_name){
  		if (image_name) {
  			multiarray.push(image_name);
  		}
  		let data = new Product();
  		data.user_id = 1;
  		data.name = req.body.product_name;
  		data.price = req.body.price;
  		data.description = req.body.description;
  		if (multiarray.length > 0) {
  			data.images = multiarray;
  		}
  		data.qty = 1;
  		data.color = 'blue';
  		data.save();
          // data._id
          sanban.sanGenerateBarCode(data._id, function(qrcode){
          	data.qrcode = qrcode;
            // data.save();
            Product.findByIdAndUpdate(data._id, data, {new: true}, function (err, product) {
            	if (err) return res.status(500).send("There was a problem updating the user.");
            	res.status(200).send(product);
            });
        });

      });
  });
});
router.post('/get_products',function(req, res){
	let query = {};
	if(req.body.qry){
		query = { 'name': new RegExp(req.body.qry, 'i') };
	}
	Product.find(query, function (err, products) {
		res.status(200).send(products);
	});
});
module.exports = router;
