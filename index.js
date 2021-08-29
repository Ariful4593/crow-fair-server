const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')


require('dotenv').config()
const app = express();
app.use(bodyParser.json())
app.use(cors())
app.get('/', (req, res) => {
  res.send("High i'm premium sanitation")
})


let currentdate = new Date();
let hours = currentdate.getHours();
let datetime = currentdate.getDate() + "/"
  + (currentdate.getMonth() + 1) + "/"
  + currentdate.getFullYear() + " "
  + hours + ":"
  + currentdate.getMinutes() + " " + (hours > 12 ? "PM" : "AM")
const { MongoClient, ObjectId } = require('mongodb');
const { json } = require('body-parser');




const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.xsirj.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("premiumSanitation").collection("premiumSanitationUserData");

  console.log("Database connected");
  app.get('/userData', (req, res) => {
    collection.find({})
      .toArray((err, documents) => {
        res.send(documents)
      })
  })


  app.patch('/clientUpdate', (req, res) => {
    const id = req.body._id;
    const tribe = req.body.tribe;
    if (id && tribe) {
      collection.updateOne(
        { _id: ObjectId(id) },
        { $set: { 'client': tribe } }
      )
        .then(result => {
          res.send({ tribe })
        })
    }
  })

  app.patch('/typeUpdate', (req, res) => {
    const id = req.body._id;
    const typeCategory = req.body.category;
    if (id && typeCategory) {
      collection.updateOne(
        { _id: ObjectId(id) },
        { $set: { 'type': typeCategory } }
      )
        .then(result => {
          res.send({ typeCategory })
        })
    }
  })

  app.patch('/rentUpdate', (req, res) => {
    const id = req.body._id;
    const rentStatus = req.body.rentStatus;
    if (id && rentStatus) {
      collection.updateOne(
        { _id: ObjectId(id) },
        {
          $set: { 'rented': rentStatus },
        }
      )
        .then(result => {
          res.send({ rentStatus })
        })
    }
  })

  app.post('/serviceAgeUpdate', (req, res) => {
    const id = req.body._id;
    const serviceAgeHour = req.body.serviceHour;
    if (id && serviceAgeHour) {
      collection.updateOne(
        { _id: ObjectId(id) },
        {
          $set: { 'serviceAge': `${serviceAgeHour} hours` },
        }
      )
    }
  })

  app.post('/addServiceUpdate', (req, res) => {
    const id = req.body._id;
    const projectId = req.body.projectId;
    if (id && projectId) {
      collection.updateOne(
        { _id: ObjectId(id) },
        {
          $push: {
            serviceTable: {
              id: projectId,
              date: datetime,
              eventType: "Service",
            }
          }
        }
      )
    }
  })




  app.delete('/deleteService/:deleteId/:docId', (req, res) => {
    const deleteId = req.params.deleteId;
    const documentId = req.params.docId;

    collection.find({ _id: ObjectId(documentId) })
      .toArray((err, documents) => {
        collection.updateMany(
          {},
          { $pull: { serviceTable: { id: deleteId } } },
          { multi: true }
        )
          .then((result) => {
            console.log(result)
          })
      })
  })

  app.post('/addTribe', (req, res) => {
    const menuTitle = req.body.menuTitle;
    const position = req.body.position;
    const newPosition = {lat: JSON.parse(position.lat), lng: JSON.parse(position.lng)}
    const client = req.body.client;
    const type = req.body.type;
    const serviceAge = req.body.serviceAge;
    const rented = req.body.rented;
    const serviceTable = req.body.serviceTable;
    collection.insertOne({menuTitle, newPosition, client, type, serviceAge, rented, serviceTable})
      .then(result => {
        console.log(result);
      })
  })
});

const port = 4000;
app.listen(process.env.PORT || port)