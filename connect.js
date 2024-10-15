const mongoose = require("mongoose");
const server = "127.0.0.1:27017";
const database = "mongoose_db";
const url = `mongodb://${server}/${database}`;
const Person = require("./personne");

async function connect() {
    try {
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("connecté avec succès...")
        //creer une instance de personne venant du schema que nous avons créer
        /*const personne = new Person({
            nom: "Abiguael",
            prenom: "Kloe",
            platFavories: ["chawarma", "pizza", "sandwich"]
        })*/
        //on creer une variable pour stocker notre document
        /*const result = await personne.save(function(err,data){
            if(err){
                console.log(err);
            }else{
                console.log(data);
            }
        })*///on sauvegarde le document pour qui'il puisse s'inserer dans la base de donnée
        //ou on utilise la fonction 'create(), insertMany(), insertOne()' directement sur la class pour creer plusieurs documents
        /*const result = await Person.create(
            [
                {
                    nom: "BLeu",
                    age: 45,
                    platFavories: ["riz","foutou"],
                    date: new Date()
                },
                {
                    nom: "Jean",
                    age: 34,
                    platFavories: ["cafe", "saumon-sauté"]
                }
        ])*/
        //faire de recherches dans notre base de donnée
        //const result = await Person.find({ nom: "Koffi" })

        //trouver un document specifique dans notre base de donnée en utilisant find()
        //const result = await Person.find({nom: 'Koffi'})

        //trouver un document specifique en utilisant findOne()
        //const result = await Person.findOne({nom: 'Koffi'})

        //trouver un document specifique en utilisant findById()
        //const result = await Person.findById("670e5ba6552b5a5ba90d7f7e")

        //trouver un document puis la mettre a jour
        /*const result = 
            await Person.findById("670e5ba6552b5a5ba90d7f7e")
                        .updateOne({$push: {platFavories:"sauce pistache"}})*/
        
        //trouver un document puis le supprimer
        const result =
            await Person.findById('670e5bc31b97247e344cb678')
                        .deleteOne()
        console.log(result)
    } catch (error) {
        console.log(error.message);
    }
}

connect();