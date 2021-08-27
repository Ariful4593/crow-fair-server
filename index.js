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


const menudata = [
  {
    menuTitle: 'Unit 238 Tribe 001',
    position: 'Position', lat: 45.59558868, lng: -107.45098877, positionStatus: 'edit',
    type: 'Type', category: 'Standard', typeStatus: 'edit',
    client: 'Client', tribe: 'Tribe', clientStatus: 'edit',
    serviceAge: 'Service Age', duration: '5 hours', serviceAgeStatus: 'edit',
    rent: 'Rented', rentState: 'Yes', rentStatus: 'edit',
    service: 'Service', blank: '', plusServices: '+ Service',
    serviceTable: [],
    areaControls: 1,
    id: 0,
  },
  {
    menuTitle: 'Unit 242 Tribe 011',
    position: 'Position', lat: 45.59725952, lng: -107.45169830, positionStatus: 'edit',
    type: 'Type', category: 'Standard', typeStatus: 'edit',
    client: 'Client', tribe: 'Tribe', clientStatus: 'edit',
    serviceAge: 'Service Age', duration: '5 hours', serviceAgeStatus: 'edit',
    rent: 'Rented', rentState: 'Yes', rentStatus: 'edit',

    service: 'Service', blank: '', plusServices: '+ Service',
    serviceTable: [],
    areaControls: 2,
    id: 1,
  },
  {
    menuTitle: 'Unit 252 Tribe 005',
    position: 'Position', lat: 45.59764481, lng: -107.45288849, positionStatus: 'edit',
    type: 'Type', category: 'Standard', typeStatus: 'edit',
    client: 'Client', tribe: 'Tribe', clientStatus: 'edit',
    serviceAge: 'Service Age', duration: '5 hours', serviceAgeStatus: 'edit',
    rent: 'Rented', rentState: 'Yes', rentStatus: 'edit',
    service: 'Service', blank: '', plusServices: '+ Service',
    serviceTable: [],
    areaControls: 3,
    id: 2,
  },
  {
    menuTitle: 'Unit 253 Tribe 004',
    position: 'Position', lat: 45.59761810, lng: -107.45289612, positionStatus: 'edit',
    type: 'Type', category: 'Standard', typeStatus: 'edit',
    client: 'Client', tribe: 'Tribe', clientStatus: 'edit',
    serviceAge: 'Service Age', duration: '5 hours', serviceAgeStatus: 'edit',
    rent: 'Rented', rentState: 'Yes', rentStatus: 'edit',
    service: 'Service', blank: '', plusServices: '+ Service',
    serviceTable: [],
    areaControls: 4,
    id: 3,
  },
  {
    menuTitle: 'Unit 653 Sam Pease',
    position: 'Position', lat: 45.12969208, lng: -107.39452362, positionStatus: 'edit',
    type: 'Type', category: 'Standard', typeStatus: 'edit',
    client: 'Client', tribe: 'Tribe', clientStatus: 'edit',
    serviceAge: 'Service Age', duration: '5 hours', serviceAgeStatus: 'edit',
    rent: 'Rented', rentState: 'Yes', rentStatus: 'edit',
    service: 'Service', blank: '', plusServices: '+ Service',
    serviceTable: [],
    areaControls: 5,
    id: 4,
  },
]



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
        { $set: { 'tribe': tribe } }
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
        { $set: { 'category': typeCategory } }
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
          $set: { 'rentState': rentStatus },
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
    const projectId = req.body.projectId;
    if (id && serviceAgeHour) {
      collection.updateOne(
        { _id: ObjectId(id) },
        {
          $set: { 'duration': `${serviceAgeHour} hours` },
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
    console.log(deleteId, documentId)

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
});

app.listen(4000, () => console.log("Hello I am running"));