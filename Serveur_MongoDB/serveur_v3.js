"use strict"
var assert = require("assert");
var express = require("express");
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
app.use(bodyParser());
let cors = require("cors");
app.use(cors());
var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017";
var http = require('http');

var urlencodedParser = bodyParser.urlencoded({ extended: false })


MongoClient.connect(url, {useNewUrlParser: true}, (err, client) => {
    let db = client.db("mongoDB");
    assert.equal(null, err);







function rechercheMembresParEmails(db, listeEmailsPreteurs, callback) {
    let collectionMembres = [];
    let nbResultats = 0;
    console.log(listeEmailsPreteurs);
    for (let email of listeEmailsPreteurs) {
        console.log(email);
        db.collection("membres").find({"email":email}).toArray((err, documents)=> {
	    nbResultats++;
	    if (documents.length > 0) collectionMembres.push(documents[0]);
            if (nbResultats == listeEmailsPreteurs.length) {
                callback(collectionMembres);
            }
	});
    }
}


app.get("/RechercheBiens/biens/:nom", (req, res) => {
	console.log("route: /biens/:nom");
        db.collection("biens").find({"nom":req.params.nom}).toArray((err, documents)=> {
	       let listeEmailsPreteurs = [];
            for (let doc of documents) {
                console.log(doc.preteur);
                listeEmailsPreteurs.push(doc.preteur);
            }
            rechercheMembresParEmails(db, listeEmailsPreteurs, (collectionPreteurs)=>{
	        res.setHeader("Content-type", "application/json");
	        res.end(JSON.stringify(collectionPreteurs));
           
	       });	
        });
    }); 




    
    app.get("/biens/:nom/:preteur", function(req, res) {
        let nom = req.params.nom;
        let preteur = req.params.preteur;	
	db.collection("biens").find({nom: nom, preteur: preteur}).toArray(function(err, documents) {
            res.setHeader("Access-Control-Allow-Origin", "*");
            res.setHeader("Content-type", "application/json");
	    console.log("/biens/"+nom+"/"+preteur+": "+JSON.stringify(documents));
            res.end(JSON.stringify(documents));
       });
   });





    app.get("/membres/informations/:nom",(req,res)=>{
    console.log("route: /membres/:nom");
        db.collection("membres").find({"nom":req.params.nom}).toArray((err, documents)=>{
            res.setHeader("Content-type", "application/json");
            res.end(JSON.stringify(documents));

        });
    });



    app.get("/biens/informations/:nom",(req,res)=>{
    console.log("route: /biens/:nom");
        db.collection("biens").find({"nom":req.params.nom}).toArray((err, documents)=>{
            res.setHeader("Content-type", "application/json");
            res.end(JSON.stringify(documents));

        });
    });


   app.get("/biens",(req,res)=>{
    console.log("route: /biens/");
        db.collection("biens").find().toArray((err, documents)=>{
            res.setHeader("Content-type", "application/json");
            res.end(JSON.stringify(documents));

        });
    });

  app.get("/membres",(req,res)=>{
    console.log("route: /membres/");
        db.collection("membres").find().toArray((err, documents)=>{
            res.setHeader("Content-type", "application/json");
            res.end(JSON.stringify(documents));

        });
    });
   app.get("/services",(req,res)=>{
    console.log("route: /services/");
        db.collection("services").find().toArray((err, documents)=>{
            res.setHeader("Content-type", "application/json");
            res.end(JSON.stringify(documents));

        });
    });



//POST AJOUTER UN BIEN
app.post('/biens', (req, res) => {
	let preteur= req.body.preteur;
	let nom= req.body.nom;
        let type= req.body.type;
       	let prix= req.body.prix;
	let etat= req.body.etat;
db.collection("biens").insertOne( {"preteur": preteur, "nom": nom, "type": type, "prix": prix, "etat": etat} );


    console.log('saved to database');
	console.log(req.body);

});
//REGISTER MEMBRE (POST MEMBRE)

app.post('/membres', (req, res) => {

	/*let nom= req.body.nom;
        let prenom= req.body.prenom;
       	let adresse= req.body.adresse;
	let telephone= req.body.telephone;
        let email= req.body.email;
       	let password= req.body.password;*/
	
/*db.collection("membres").insertOne( {"nom": nom, "prenom": prenom, "adresse": adresse, "telephone": telephone, "email": email, "password": password} );*/

db.collection("membres").insertOne(req.body)

    console.log('saved to database');
	console.log(req.body);

});


});





app.listen(8803);













