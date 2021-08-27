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
    menuTitle: 'Unit 254 Tribe 003',
    position: 'Position', lat: 45.59756088, lng: -107.45290375, positionStatus: 'edit',
    type: 'Type', category: 'Standard', typeStatus: 'edit',
    client: 'Client', tribe: 'Tribe', clientStatus: 'edit',
    serviceAge: 'Service Age', duration: '5 hours', serviceAgeStatus: 'edit',
    rent: 'Rented', rentState: 'Yes', rentStatus: 'edit',
    service: 'Service', blank: '', plusServices: '+ Service',
    serviceTable: [],
    areaControls: 5,
    id: 4,
  },
  {
    menuTitle: 'Unit 255 Tribe 002',
    position: 'Position', lat: 45.59758759, lng: -107.45290375, positionStatus: 'edit',
    type: 'Type', category: 'Standard', typeStatus: 'edit',
    client: 'Client', tribe: 'Tribe', clientStatus: 'edit',
    serviceAge: 'Service Age', duration: '5 hours', serviceAgeStatus: 'edit',
    rent: 'Rented', rentState: 'Yes', rentStatus: 'edit',

    service: 'Service', blank: '', plusServices: '+ Service',
    serviceTable: [],
    areaControls: 6,
    id: 5,
  },
  {
    menuTitle: 'Unit 256 Tribe 007',
    position: 'Position', lat: 45.59754944, lng: -107.45335388, positionStatus: 'edit',
    type: 'Type', category: 'Standard', typeStatus: 'edit',
    client: 'Client', tribe: 'Tribe', clientStatus: 'edit',
    serviceAge: 'Service Age', duration: '5 hours', serviceAgeStatus: 'edit',
    rent: 'Rented', rentState: 'Yes', rentStatus: 'edit',
    service: 'Service', blank: '', plusServices: '+ Service',
    serviceTable: [],
    areaControls: 7,
    id: 6,
  },
  {
    menuTitle: 'Unit 257 Tribe 008',
    position: 'Position', lat: 45.59752655, lng: -107.45333099, positionStatus: 'edit',
    type: 'Type', category: 'Standard', typeStatus: 'edit',
    client: 'Client', tribe: 'Tribe', clientStatus: 'edit',
    serviceAge: 'Service Age', duration: '5 hours', serviceAgeStatus: 'edit',
    rent: 'Rented', rentState: 'Yes', rentStatus: 'edit',
    service: 'Service', blank: '', plusServices: '+ Service',
    serviceTable: [],
    areaControls: 8,
    id: 7,
  },
  {
    menuTitle: 'Unit 258 Tribe 009',
    position: 'Position', lat: 45.59749985, lng: -107.45330811, positionStatus: 'edit',
    type: 'Type', category: 'Standard', typeStatus: 'edit',
    client: 'Client', tribe: 'Tribe', clientStatus: 'edit',
    serviceAge: 'Service Age', duration: '5 hours', serviceAgeStatus: 'edit',
    rent: 'Rented', rentState: 'Yes', rentStatus: 'edit',
    service: 'Service', blank: '', plusServices: '+ Service',
    serviceTable: [],
    areaControls: 9,
    id: 8,
  },
  {
    menuTitle: 'Unit 259 Tribe Handicap 03',
    position: 'Position', lat: 45.59747696, lng: -107.45327759, positionStatus: 'edit',
    type: 'Type', category: 'Standard', typeStatus: 'edit',
    client: 'Client', tribe: 'Tribe', clientStatus: 'edit',
    serviceAge: 'Service Age', duration: '5 hours', serviceAgeStatus: 'edit',
    rent: 'Rented', rentState: 'Yes', rentStatus: 'edit',

    service: 'Service', blank: '', plusServices: '+ Service',
    serviceTable: [],
    areaControls: 10,
    id: 9,
  },
  {
    menuTitle: 'Unit 260 Tribe Handicap 02',
    position: 'Position', lat: 45.59455490, lng: -107.45500183, positionStatus: 'edit',
    type: 'Type', category: 'Standard', typeStatus: 'edit',
    client: 'Client', tribe: 'Tribe', clientStatus: 'edit',
    serviceAge: 'Service Age', duration: '5 hours', serviceAgeStatus: 'edit',
    rent: 'Rented', rentState: 'Yes', rentStatus: 'edit',
    service: 'Service', blank: '', plusServices: '+ Service',
    serviceTable: [],
    areaControls: 11,
    id: 10,
  },
  {
    menuTitle: 'Unit 261 Tribe 017',
    position: 'Position', lat: 45.59761429, lng: -107.45076752, positionStatus: 'edit',
    type: 'Type', category: 'Standard', typeStatus: 'edit',
    client: 'Client', tribe: 'Tribe', clientStatus: 'edit',
    serviceAge: 'Service Age', duration: '5 hours', serviceAgeStatus: 'edit',
    rent: 'Rented', rentState: 'Yes', rentStatus: 'edit',
    service: 'Service', blank: '', plusServices: '+ Service',
    serviceTable: [],
    areaControls: 12,
    id: 11,
  },
  {
    menuTitle: 'Unit 262 Tribe Handicap 05',
    position: 'Position', lat: 45.59765625, lng: -107.45078278, positionStatus: 'edit',
    type: 'Type', category: 'Standard', typeStatus: 'edit',
    client: 'Client', tribe: 'Tribe', clientStatus: 'edit',
    serviceAge: 'Service Age', duration: '5 hours', serviceAgeStatus: 'edit',
    rent: 'Rented', rentState: 'Yes', rentStatus: 'edit',
    service: 'Service', blank: '', plusServices: '+ Service',
    serviceTable: [],
    areaControls: 13,
    id: 12,
  },
  {
    menuTitle: 'Unit 263 Tribe 012',
    position: 'Position', lat: 45.59777832, lng: -107.45008087, positionStatus: 'edit',
    type: 'Type', category: 'Standard', typeStatus: 'edit',
    client: 'Client', tribe: 'Tribe', clientStatus: 'edit',
    serviceAge: 'Service Age', duration: '5 hours', serviceAgeStatus: 'edit',
    rent: 'Rented', rentState: 'Yes', rentStatus: 'edit',

    service: 'Service', blank: '', plusServices: '+ Service',
    serviceTable: [],
    areaControls: 14,
    id: 13,
  },
  {
    menuTitle: 'Unit 264 Tribe 013',
    position: 'Position', lat: 45.59777832, lng: -107.45004272, positionStatus: 'edit',
    type: 'Type', category: 'Standard', typeStatus: 'edit',
    client: 'Client', tribe: 'Tribe', clientStatus: 'edit',
    serviceAge: 'Service Age', duration: '5 hours', serviceAgeStatus: 'edit',
    rent: 'Rented', rentState: 'Yes', rentStatus: 'edit',
    service: 'Service', blank: '', plusServices: '+ Service',
    serviceTable: [],
    areaControls: 15,
    id: 14,
  },
  {
    menuTitle: 'Unit 265 Tribe 014',
    position: 'Position', lat: 45.59777832, lng: -107.45000458, positionStatus: 'edit',
    type: 'Type', category: 'Standard', typeStatus: 'edit',
    client: 'Client', tribe: 'Tribe', clientStatus: 'edit',
    serviceAge: 'Service Age', duration: '5 hours', serviceAgeStatus: 'edit',
    rent: 'Rented', rentState: 'Yes', rentStatus: 'edit',
    service: 'Service', blank: '', plusServices: '+ Service',
    serviceTable: [],
    areaControls: 16,
    id: 15,
  },
  {
    menuTitle: 'Unit 266 Tribe 015',
    position: 'Position', lat: 45.59777832, lng: -107.44997406, positionStatus: 'edit',
    type: 'Type', category: 'Standard', typeStatus: 'edit',
    client: 'Client', tribe: 'Tribe', clientStatus: 'edit',
    serviceAge: 'Service Age', duration: '5 hours', serviceAgeStatus: 'edit',
    rent: 'Rented', rentState: 'Yes', rentStatus: 'edit',
    service: 'Service', blank: '', plusServices: '+ Service',
    serviceTable: [],
    areaControls: 17,
    id: 16,
  },
  {
    menuTitle: 'Unit 267 Tribe 040',
    position: 'Position', lat: 45.59777832, lng: -107.44993591, positionStatus: 'edit',
    type: 'Type', category: 'Standard', typeStatus: 'edit',
    client: 'Client', tribe: 'Tribe', clientStatus: 'edit',
    serviceAge: 'Service Age', duration: '5 hours', serviceAgeStatus: 'edit',
    rent: 'Rented', rentState: 'Yes', rentStatus: 'edit',
    service: 'Service', blank: '', plusServices: '+ Service',
    serviceTable: [],
    areaControls: 18,
    id: 17,
  },
  {
    menuTitle: 'Unit 268 Tribe 041',
    position: 'Position', lat: 45.59778214, lng: -107.44989777, positionStatus: 'edit',
    type: 'Type', category: 'Standard', typeStatus: 'edit',
    client: 'Client', tribe: 'Tribe', clientStatus: 'edit',
    serviceAge: 'Service Age', duration: '5 hours', serviceAgeStatus: 'edit',
    rent: 'Rented', rentState: 'Yes', rentStatus: 'edit',
    service: 'Service', blank: '', plusServices: '+ Service',
    serviceTable: [],
    areaControls: 19,
    id: 18,
  },
  {
    menuTitle: 'Unit 270 Tribe 043',
    position: 'Position', lat: 45.59772110, lng: -107.44959259, positionStatus: 'edit',
    type: 'Type', category: 'Standard', typeStatus: 'edit',
    client: 'Client', tribe: 'Tribe', clientStatus: 'edit',
    serviceAge: 'Service Age', duration: '5 hours', serviceAgeStatus: 'edit',
    rent: 'Rented', rentState: 'Yes', rentStatus: 'edit',
    service: 'Service', blank: '', plusServices: '+ Service',
    serviceTable: [],
    areaControls: 20,
    id: 19,
  }, {
    menuTitle: 'Unit 271 Tribe 044',
    position: 'Position', lat: 45.59771729, lng: -107.44955444, positionStatus: 'edit',
    type: 'Type', category: 'Standard', typeStatus: 'edit',
    client: 'Client', tribe: 'Tribe', clientStatus: 'edit',
    serviceAge: 'Service Age', duration: '5 hours', serviceAgeStatus: 'edit',
    rent: 'Rented', rentState: 'Yes', rentStatus: 'edit',
    service: 'Service', blank: '', plusServices: '+ Service',
    serviceTable: [],
    areaControls: 21,
    id: 20,
  },
  {
    menuTitle: 'Unit 272 Tribe 045',
    position: 'Position', lat: 45.59745407, lng: -107.44847107, positionStatus: 'edit',
    type: 'Type', category: 'Standard', typeStatus: 'edit',
    client: 'Client', tribe: 'Tribe', clientStatus: 'edit',
    serviceAge: 'Service Age', duration: '5 hours', serviceAgeStatus: 'edit',
    rent: 'Rented', rentState: 'Yes', rentStatus: 'edit',
    service: 'Service', blank: '', plusServices: '+ Service',
    serviceTable: [],
    areaControls: 22,
    id: 21,
  },
  {
    menuTitle: 'Unit 273 Tribe 018',
    position: 'Position', lat: 45.59882355, lng: -107.44848633, positionStatus: 'edit',
    type: 'Type', category: 'Standard', typeStatus: 'edit',
    client: 'Client', tribe: 'Tribe', clientStatus: 'edit',
    serviceAge: 'Service Age', duration: '5 hours', serviceAgeStatus: 'edit',
    rent: 'Rented', rentState: 'Yes', rentStatus: 'edit',
    service: 'Service', blank: '', plusServices: '+ Service',
    serviceTable: [],
    areaControls: 23,
    id: 22,
  },
  {
    menuTitle: 'Unit 274 Tribe 046',
    position: 'Position', lat: 45.59747314, lng: -107.44845581, positionStatus: 'edit',
    type: 'Type', category: 'Standard', typeStatus: 'edit',
    client: 'Client', tribe: 'Tribe', clientStatus: 'edit',
    serviceAge: 'Service Age', duration: '5 hours', serviceAgeStatus: 'edit',
    rent: 'Rented', rentState: 'Yes', rentStatus: 'edit',
    service: 'Service', blank: '', plusServices: '+ Service',
    serviceTable: [],
    areaControls: 24,
    id: 23,
  }, {
    menuTitle: 'Unit 275 Tribe 047',
    position: 'Position', lat: 45.59829330, lng: -107.44822693, positionStatus: 'edit',
    type: 'Type', category: 'Standard', typeStatus: 'edit',
    client: 'Client', tribe: 'Tribe', clientStatus: 'edit',
    serviceAge: 'Service Age', duration: '5 hours', serviceAgeStatus: 'edit',
    rent: 'Rented', rentState: 'Yes', rentStatus: 'edit',
    service: 'Service', blank: '', plusServices: '+ Service',
    serviceTable: [],
    areaControls: 25,
    id: 24,
  },
  {
    menuTitle: 'Unit 276 Tribe 048',
    position: 'Position', lat: 45.59828949, lng: -107.44814301, positionStatus: 'edit',
    type: 'Type', category: 'Standard', typeStatus: 'edit',
    client: 'Client', tribe: 'Tribe', clientStatus: 'edit',
    serviceAge: 'Service Age', duration: '5 hours', serviceAgeStatus: 'edit',
    rent: 'Rented', rentState: 'Yes', rentStatus: 'edit',
    service: 'Service', blank: '', plusServices: '+ Service',
    serviceTable: [],
    areaControls: 26,
    id: 25,
  },
  {
    menuTitle: 'Unit 278 Tribe 049',
    position: 'Position', lat: 45.59806824, lng: -107.45168304, positionStatus: 'edit',
    type: 'Type', category: 'Standard', typeStatus: 'edit',
    client: 'Client', tribe: 'Tribe', clientStatus: 'edit',
    serviceAge: 'Service Age', duration: '5 hours', serviceAgeStatus: 'edit',
    rent: 'Rented', rentState: 'Yes', rentStatus: 'edit',
    service: 'Service', blank: '', plusServices: '+ Service',
    serviceTable: [],
    areaControls: 27,
    id: 26,
  },
  {
    menuTitle: 'Unit 279 Tribe 050',
    position: 'Position', lat: 45.59806442, lng: -107.45172119, positionStatus: 'edit',
    type: 'Type', category: 'Standard', typeStatus: 'edit',
    client: 'Client', tribe: 'Tribe', clientStatus: 'edit',
    serviceAge: 'Service Age', duration: '5 hours', serviceAgeStatus: 'edit',
    rent: 'Rented', rentState: 'Yes', rentStatus: 'edit',
    service: 'Service', blank: '', plusServices: '+ Service',
    serviceTable: [],
    areaControls: 28,
    id: 27,
  }, {
    menuTitle: 'Unit 281 Tribe 051',
    position: 'Position', lat: 45.59828186, lng: -107.44811249, positionStatus: 'edit',
    type: 'Type', category: 'Standard', typeStatus: 'edit',
    client: 'Client', tribe: 'Tribe', clientStatus: 'edit',
    serviceAge: 'Service Age', duration: '5 hours', serviceAgeStatus: 'edit',
    rent: 'Rented', rentState: 'Yes', rentStatus: 'edit',
    service: 'Service', blank: '', plusServices: '+ Service',
    serviceTable: [],
    areaControls: 29,
    id: 28,
  },
  {
    menuTitle: 'Unit 282 Tribe 019',
    position: 'Position', lat: 45.59884644, lng: -107.44850159, positionStatus: 'edit',
    type: 'Type', category: 'Standard', typeStatus: 'edit',
    client: 'Client', tribe: 'Tribe', clientStatus: 'edit',
    serviceAge: 'Service Age', duration: '5 hours', serviceAgeStatus: 'edit',
    rent: 'Rented', rentState: 'Yes', rentStatus: 'edit',
    service: 'Service', blank: '', plusServices: '+ Service',
    serviceTable: [],
    areaControls: 30,
    id: 29,
  },
  {
    menuTitle: 'Unit 283 Tribe 020',
    position: 'Position', lat: 45.59886932, lng: -107.44851685, positionStatus: 'edit',
    type: 'Type', category: 'Standard', typeStatus: 'edit',
    client: 'Client', tribe: 'Tribe', clientStatus: 'edit',
    serviceAge: 'Service Age', duration: '5 hours', serviceAgeStatus: 'edit',
    rent: 'Rented', rentState: 'Yes', rentStatus: 'edit',
    service: 'Service', blank: '', plusServices: '+ Service',
    serviceTable: [],
    areaControls: 31,
    id: 30,
  },
  {
    menuTitle: 'Unit 284 Tribe 021',
    position: 'Position', lat: 45.59888458, lng: -107.44853210, positionStatus: 'edit',
    type: 'Type', category: 'Standard', typeStatus: 'edit',
    client: 'Client', tribe: 'Tribe', clientStatus: 'edit',
    serviceAge: 'Service Age', duration: '5 hours', serviceAgeStatus: 'edit',
    rent: 'Rented', rentState: 'Yes', rentStatus: 'edit',
    service: 'Service', blank: '', plusServices: '+ Service',
    serviceTable: [],
    areaControls: 32,
    id: 31,
  },
  {
    menuTitle: 'Unit 287 Tribe 054',
    position: 'Position', lat: 45.59876633, lng: -107.45067596, positionStatus: 'edit',
    type: 'Type', category: 'Standard', typeStatus: 'edit',
    client: 'Client', tribe: 'Tribe', clientStatus: 'edit',
    serviceAge: 'Service Age', duration: '5 hours', serviceAgeStatus: 'edit',
    rent: 'Rented', rentState: 'Yes', rentStatus: 'edit',
    service: 'Service', blank: '', plusServices: '+ Service',
    serviceTable: [],
    areaControls: 33,
    id: 32,
  },
  {
    menuTitle: 'Unit 288 Tribe 055',
    position: 'Position', lat: 45.59873962, lng: -107.45069885, positionStatus: 'edit',
    type: 'Type', category: 'Standard', typeStatus: 'edit',
    client: 'Client', tribe: 'Tribe', clientStatus: 'edit',
    serviceAge: 'Service Age', duration: '5 hours', serviceAgeStatus: 'edit',
    rent: 'Rented', rentState: 'Yes', rentStatus: 'edit',
    service: 'Service', blank: '', plusServices: '+ Service',
    serviceTable: [],
    areaControls: 34,
    id: 33,
  },
  {
    menuTitle: 'Unit 289 Tribe 056',
    position: 'Position', lat: 45.59868622, lng: -107.45073700, positionStatus: 'edit',
    type: 'Type', category: 'Standard', typeStatus: 'edit',
    client: 'Client', tribe: 'Tribe', clientStatus: 'edit',
    serviceAge: 'Service Age', duration: '5 hours', serviceAgeStatus: 'edit',
    rent: 'Rented', rentState: 'Yes', rentStatus: 'edit',
    service: 'Service', blank: '', plusServices: '+ Service',
    serviceTable: [],
    areaControls: 35,
    id: 34,
  },
  {
    menuTitle: 'Unit 291 Tribe 057',
    position: 'Position', lat: 45.59805679, lng: -107.45174408, positionStatus: 'edit',
    type: 'Type', category: 'Standard', typeStatus: 'edit',
    client: 'Client', tribe: 'Tribe', clientStatus: 'edit',
    serviceAge: 'Service Age', duration: '5 hours', serviceAgeStatus: 'edit',
    rent: 'Rented', rentState: 'Yes', rentStatus: 'edit',
    service: 'Service', blank: '', plusServices: '+ Service',
    serviceTable: [],
    areaControls: 36,
    id: 35,
  },
  {
    menuTitle: 'Unit 292 Tribe 058',
    position: 'Position', lat: 45.59805679, lng: -107.45178223, positionStatus: 'edit',
    type: 'Type', category: 'Standard', typeStatus: 'edit',
    client: 'Client', tribe: 'Tribe', clientStatus: 'edit',
    serviceAge: 'Service Age', duration: '5 hours', serviceAgeStatus: 'edit',
    rent: 'Rented', rentState: 'Yes', rentStatus: 'edit',
    service: 'Service', blank: '', plusServices: '+ Service',
    serviceTable: [],
    areaControls: 37,
    id: 36,
  },
  {
    menuTitle: 'Unit 293 Tribe 059',
    position: 'Position', lat: 45.59820557, lng: -107.45263672, positionStatus: 'edit',
    type: 'Type', category: 'Standard', typeStatus: 'edit',
    client: 'Client', tribe: 'Tribe', clientStatus: 'edit',
    serviceAge: 'Service Age', duration: '5 hours', serviceAgeStatus: 'edit',
    rent: 'Rented', rentState: 'Yes', rentStatus: 'edit',
    service: 'Service', blank: '', plusServices: '+ Service',
    serviceTable: [],
    areaControls: 38,
    id: 37,
  },
  {
    menuTitle: 'Unit 294 Tribe 060',
    position: 'Position', lat: 45.59804535, lng: -107.45181274, positionStatus: 'edit',
    type: 'Type', category: 'Standard', typeStatus: 'edit',
    client: 'Client', tribe: 'Tribe', clientStatus: 'edit',
    serviceAge: 'Service Age', duration: '5 hours', serviceAgeStatus: 'edit',
    rent: 'Rented', rentState: 'Yes', rentStatus: 'edit',
    service: 'Service', blank: '', plusServices: '+ Service',
    serviceTable: [],
    areaControls: 39,
    id: 38,
  },
  {
    menuTitle: 'Unit 296 Tribe 062',
    position: 'Position', lat: 45.59871292, lng: -107.45071411, positionStatus: 'edit',
    type: 'Type', category: 'Standard', typeStatus: 'edit',
    client: 'Client', tribe: 'Tribe', clientStatus: 'edit',
    serviceAge: 'Service Age', duration: '5 hours', serviceAgeStatus: 'edit',
    rent: 'Rented', rentState: 'Yes', rentStatus: 'edit',
    service: 'Service', blank: '', plusServices: '+ Service',
    serviceTable: [],
    areaControls: 40,
    id: 39,
  },
  {
    menuTitle: 'Unit 297 Tribe 063',
    position: 'Position', lat: 45.59865952, lng: -107.45075989, positionStatus: 'edit',
    type: 'Type', category: 'Standard', typeStatus: 'edit',
    client: 'Client', tribe: 'Tribe', clientStatus: 'edit',
    serviceAge: 'Service Age', duration: '5 hours', serviceAgeStatus: 'edit',
    rent: 'Rented', rentState: 'Yes', rentStatus: 'edit',
    service: 'Service', blank: '', plusServices: '+ Service',
    serviceTable: [],
    areaControls: 41,
    id: 40,
  },
  {
    menuTitle: 'Unit 298 Tribe 023',
    position: 'Position', lat: 45.59990692, lng: -107.44917297, positionStatus: 'edit',
    type: 'Type', category: 'Standard', typeStatus: 'edit',
    client: 'Client', tribe: 'Tribe', clientStatus: 'edit',
    serviceAge: 'Service Age', duration: '5 hours', serviceAgeStatus: 'edit',
    rent: 'Rented', rentState: 'Yes', rentStatus: 'edit',
    service: 'Service', blank: '', plusServices: '+ Service',
    serviceTable: [],
    areaControls: 42,
    id: 41,
  },
  {
    menuTitle: 'Unit 299 Tribe 022',
    position: 'Position', lat: 45.59988022, lng: -107.44915771, positionStatus: 'edit',
    type: 'Type', category: 'Standard', typeStatus: 'edit',
    client: 'Client', tribe: 'Tribe', clientStatus: 'edit',
    serviceAge: 'Service Age', duration: '5 hours', serviceAgeStatus: 'edit',
    rent: 'Rented', rentState: 'Yes', rentStatus: 'edit',
    service: 'Service', blank: '', plusServices: '+ Service',
    serviceTable: [],
    areaControls: 43,
    id: 42,
  },
  {
    menuTitle: 'Unit 300 Tribe 064',
    position: 'Position', lat: 45.59619141, lng: -107.45453644, positionStatus: 'edit',
    type: 'Type', category: 'Standard', typeStatus: 'edit',
    client: 'Client', tribe: 'Tribe', clientStatus: 'edit',
    serviceAge: 'Service Age', duration: '5 hours', serviceAgeStatus: 'edit',
    rent: 'Rented', rentState: 'Yes', rentStatus: 'edit',
    service: 'Service', blank: '', plusServices: '+ Service',
    serviceTable: [],
    areaControls: 44,
    id: 43,
  },
  {
    menuTitle: 'Unit 301 Tribe 065',
    position: 'Position', lat: 45.59742737, lng: -107.44849396, positionStatus: 'edit',
    type: 'Type', category: 'Standard', typeStatus: 'edit',
    client: 'Client', tribe: 'Tribe', clientStatus: 'edit',
    serviceAge: 'Service Age', duration: '5 hours', serviceAgeStatus: 'edit',
    rent: 'Rented', rentState: 'Yes', rentStatus: 'edit',
    service: 'Service', blank: '', plusServices: '+ Service',
    serviceTable: [],
    areaControls: 45,
    id: 44,
  },
  {
    menuTitle: 'Unit 303 Tribe 066',
    position: 'Position', lat: 45.59828949, lng: -107.44818878, positionStatus: 'edit',
    type: 'Type', category: 'Standard', typeStatus: 'edit',
    client: 'Client', tribe: 'Tribe', clientStatus: 'edit',
    serviceAge: 'Service Age', duration: '5 hours', serviceAgeStatus: 'edit',
    rent: 'Rented', rentState: 'Yes', rentStatus: 'edit',
    service: 'Service', blank: '', plusServices: '+ Service',
    serviceTable: [],
    areaControls: 46,
    id: 45,
  },
  {
    menuTitle: 'Unit 306 Tribe 069',
    position: 'Position', lat: 45.59948730, lng: -107.44783020, positionStatus: 'edit',
    type: 'Type', category: 'Standard', typeStatus: 'edit',
    client: 'Client', tribe: 'Tribe', clientStatus: 'edit',
    serviceAge: 'Service Age', duration: '5 hours', serviceAgeStatus: 'edit',
    rent: 'Rented', rentState: 'Yes', rentStatus: 'edit',
    service: 'Service', blank: '', plusServices: '+ Service',
    serviceTable: [],
    areaControls: 47,
    id: 46,
  },
  {
    menuTitle: 'Unit 308 Tribe 070',
    position: 'Position', lat: 45.59946060, lng: -107.44781494, positionStatus: 'edit',
    type: 'Type', category: 'Standard', typeStatus: 'edit',
    client: 'Client', tribe: 'Tribe', clientStatus: 'edit',
    serviceAge: 'Service Age', duration: '5 hours', serviceAgeStatus: 'edit',
    rent: 'Rented', rentState: 'Yes', rentStatus: 'edit',
    service: 'Service', blank: '', plusServices: '+ Service',
    serviceTable: [],
    areaControls: 48,
    id: 47,
  },
  {
    menuTitle: 'Unit 309 Tribe 071',
    position: 'Position', lat: 45.59890747, lng: -107.44741821, positionStatus: 'edit',
    type: 'Type', category: 'Standard', typeStatus: 'edit',
    client: 'Client', tribe: 'Tribe', clientStatus: 'edit',
    serviceAge: 'Service Age', duration: '5 hours', serviceAgeStatus: 'edit',
    rent: 'Rented', rentState: 'Yes', rentStatus: 'edit',
    service: 'Service', blank: '', plusServices: '+ Service',
    serviceTable: [],
    areaControls: 49,
    id: 48,
  },
  {
    menuTitle: 'Unit 310 Tribe 016',
    position: 'Position', lat: 45.60086823, lng: -107.44956970, positionStatus: 'edit',
    type: 'Type', category: 'Standard', typeStatus: 'edit',
    client: 'Client', tribe: 'Tribe', clientStatus: 'edit',
    serviceAge: 'Service Age', duration: '5 hours', serviceAgeStatus: 'edit',
    rent: 'Rented', rentState: 'Yes', rentStatus: 'edit',
    service: 'Service', blank: '', plusServices: '+ Service',
    serviceTable: [],
    areaControls: 50,
    id: 49,
  },
  {
    menuTitle: 'Unit 311 Tribe 034',
    position: 'Position', lat: 45.60091019, lng: -107.44956970, positionStatus: 'edit',
    type: 'Type', category: 'Standard', typeStatus: 'edit',
    client: 'Client', tribe: 'Tribe', clientStatus: 'edit',
    serviceAge: 'Service Age', duration: '5 hours', serviceAgeStatus: 'edit',
    rent: 'Rented', rentState: 'Yes', rentStatus: 'edit',
    service: 'Service', blank: '', plusServices: '+ Service',
    serviceTable: [],
    areaControls: 51,
    id: 50,
  },
  {
    menuTitle: 'Unit 312 Tribe Handicap 01',
    position: 'Position', lat: 45.60094833, lng: -107.44958496, positionStatus: 'edit',
    type: 'Type', category: 'Standard', typeStatus: 'edit',
    client: 'Client', tribe: 'Tribe', clientStatus: 'edit',
    serviceAge: 'Service Age', duration: '5 hours', serviceAgeStatus: 'edit',
    rent: 'Rented', rentState: 'Yes', rentStatus: 'edit',
    service: 'Service', blank: '', plusServices: '+ Service',
    serviceTable: [],
    areaControls: 52,
    id: 51,
  },
  {
    menuTitle: 'Unit 313 Tribe 035',
    position: 'Position', lat: 45.60055923, lng: -107.45098877, positionStatus: 'edit',
    type: 'Type', category: 'Standard', typeStatus: 'edit',
    client: 'Client', tribe: 'Tribe', clientStatus: 'edit',
    serviceAge: 'Service Age', duration: '5 hours', serviceAgeStatus: 'edit',
    rent: 'Rented', rentState: 'Yes', rentStatus: 'edit',
    service: 'Service', blank: '', plusServices: '+ Service',
    serviceTable: [],
    areaControls: 53,
    id: 52,
  },
  {
    menuTitle: 'Unit 314 Tribe 036',
    position: 'Position', lat: 45.60055161, lng: -107.45103455, positionStatus: 'edit',
    type: 'Type', category: 'Standard', typeStatus: 'edit',
    client: 'Client', tribe: 'Tribe', clientStatus: 'edit',
    serviceAge: 'Service Age', duration: '5 hours', serviceAgeStatus: 'edit',
    rent: 'Rented', rentState: 'Yes', rentStatus: 'edit',
    service: 'Service', blank: '', plusServices: '+ Service',
    serviceTable: [],
    areaControls: 54,
    id: 53,
  },
  {
    menuTitle: 'Unit 315 Tribe 024',
    position: 'Position', lat: 45.60020828, lng: -107.45073700, positionStatus: 'edit',
    type: 'Type', category: 'Standard', typeStatus: 'edit',
    client: 'Client', tribe: 'Tribe', clientStatus: 'edit',
    serviceAge: 'Service Age', duration: '5 hours', serviceAgeStatus: 'edit',
    rent: 'Rented', rentState: 'Yes', rentStatus: 'edit',
    service: 'Service', blank: '', plusServices: '+ Service',
    serviceTable: [],
    areaControls: 55,
    id: 54,
  },
  {
    menuTitle: 'Unit 316 Tribe 025',
    position: 'Position', lat: 45.60019302, lng: -107.45079803, positionStatus: 'edit',
    type: 'Type', category: 'Standard', typeStatus: 'edit',
    client: 'Client', tribe: 'Tribe', clientStatus: 'edit',
    serviceAge: 'Service Age', duration: '5 hours', serviceAgeStatus: 'edit',
    rent: 'Rented', rentState: 'Yes', rentStatus: 'edit',
    service: 'Service', blank: '', plusServices: '+ Service',
    serviceTable: [],
    areaControls: 56,
    id: 55,
  },
  {
    menuTitle: 'Unit 317 Tribe 026',
    position: 'Position', lat: 45.59979248, lng: -107.45193481, positionStatus: 'edit',
    type: 'Type', category: 'Standard', typeStatus: 'edit',
    client: 'Client', tribe: 'Tribe', clientStatus: 'edit',
    serviceAge: 'Service Age', duration: '5 hours', serviceAgeStatus: 'edit',
    rent: 'Rented', rentState: 'Yes', rentStatus: 'edit',
    service: 'Service', blank: '', plusServices: '+ Service',
    serviceTable: [],
    areaControls: 57,
    id: 56,
  },
  {
    menuTitle: 'Unit 318 Tribe 027',
    position: 'Position', lat: 45.59978104, lng: -107.45196533, positionStatus: 'edit',
    type: 'Type', category: 'Standard', typeStatus: 'edit',
    client: 'Client', tribe: 'Tribe', clientStatus: 'edit',
    serviceAge: 'Service Age', duration: '5 hours', serviceAgeStatus: 'edit',
    rent: 'Rented', rentState: 'Yes', rentStatus: 'edit',
    service: 'Service', blank: '', plusServices: '+ Service',
    serviceTable: [],
    areaControls: 58,
    id: 57,
  },
  {
    menuTitle: 'Unit 319 Tribe 028',
    position: 'Position', lat: 45.59913254, lng: -107.45304871, positionStatus: 'edit',
    type: 'Type', category: 'Standard', typeStatus: 'edit',
    client: 'Client', tribe: 'Tribe', clientStatus: 'edit',
    serviceAge: 'Service Age', duration: '5 hours', serviceAgeStatus: 'edit',
    rent: 'Rented', rentState: 'Yes', rentStatus: 'edit',
    service: 'Service', blank: '', plusServices: '+ Service',
    serviceTable: [],
    areaControls: 59,
    id: 58,
  },
  {
    menuTitle: 'Unit 320 Tribe 029',
    position: 'Position', lat: 45.59913635, lng: -107.45301056, positionStatus: 'edit',
    type: 'Type', category: 'Standard', typeStatus: 'edit',
    client: 'Client', tribe: 'Tribe', clientStatus: 'edit',
    serviceAge: 'Service Age', duration: '5 hours', serviceAgeStatus: 'edit',
    rent: 'Rented', rentState: 'Yes', rentStatus: 'edit',
    service: 'Service', blank: '', plusServices: '+ Service',
    serviceTable: [],
    areaControls: 60,
    id: 59,
  },
  {
    menuTitle: 'Unit 321 Tribe 030',
    position: 'Position', lat: 45.59757996, lng: -107.45076752, positionStatus: 'edit',
    type: 'Type', category: 'Standard', typeStatus: 'edit',
    client: 'Client', tribe: 'Tribe', clientStatus: 'edit',
    serviceAge: 'Service Age', duration: '5 hours', serviceAgeStatus: 'edit',
    rent: 'Rented', rentState: 'Yes', rentStatus: 'edit',
    service: 'Service', blank: '', plusServices: '+ Service',
    serviceTable: [],
    areaControls: 61,
    id: 60,
  },
  {
    menuTitle: 'Unit 322 Tribe 031',
    position: 'Position', lat: 45.59944534, lng: -107.45327759, positionStatus: 'edit',
    type: 'Type', category: 'Standard', typeStatus: 'edit',
    client: 'Client', tribe: 'Tribe', clientStatus: 'edit',
    serviceAge: 'Service Age', duration: '5 hours', serviceAgeStatus: 'edit',
    rent: 'Rented', rentState: 'Yes', rentStatus: 'edit',
    service: 'Service', blank: '', plusServices: '+ Service',
    serviceTable: [],
    areaControls: 62,
    id: 61,
  },
  {
    menuTitle: 'Unit 323 Tribe 032',
    position: 'Position', lat: 45.59947586, lng: -107.45327759, positionStatus: 'edit',
    type: 'Type', category: 'Standard', typeStatus: 'edit',
    client: 'Client', tribe: 'Tribe', clientStatus: 'edit',
    serviceAge: 'Service Age', duration: '5 hours', serviceAgeStatus: 'edit',
    rent: 'Rented', rentState: 'Yes', rentStatus: 'edit',
    service: 'Service', blank: '', plusServices: '+ Service',
    serviceTable: [],
    areaControls: 63,
    id: 62,
  },
  {
    menuTitle: 'Unit 325 Tribe 038',
    position: 'Position', lat: 45.60203934, lng: -107.45143127, positionStatus: 'edit',
    type: 'Type', category: 'Standard', typeStatus: 'edit',
    client: 'Client', tribe: 'Tribe', clientStatus: 'edit',
    serviceAge: 'Service Age', duration: '5 hours', serviceAgeStatus: 'edit',
    rent: 'Rented', rentState: 'Yes', rentStatus: 'edit',
    service: 'Service', blank: '', plusServices: '+ Service',
    serviceTable: [],
    areaControls: 64,
    id: 63,
  },
  {
    menuTitle: 'Unit 326 Tribe 072',
    position: 'Position', lat: 45.59989166, lng: -107.45298004, positionStatus: 'edit',
    type: 'Type', category: 'Standard', typeStatus: 'edit',
    client: 'Client', tribe: 'Tribe', clientStatus: 'edit',
    serviceAge: 'Service Age', duration: '5 hours', serviceAgeStatus: 'edit',
    rent: 'Rented', rentState: 'Yes', rentStatus: 'edit',
    service: 'Service', blank: '', plusServices: '+ Service',
    serviceTable: [],
    areaControls: 65,
    id: 64,
  },
  {
    menuTitle: 'Unit 327 Tribe 073',
    position: 'Position', lat: 45.59990692, lng: -107.45292664, positionStatus: 'edit',
    type: 'Type', category: 'Standard', typeStatus: 'edit',
    client: 'Client', tribe: 'Tribe', clientStatus: 'edit',
    serviceAge: 'Service Age', duration: '5 hours', serviceAgeStatus: 'edit',
    rent: 'Rented', rentState: 'Yes', rentStatus: 'edit',
    service: 'Service', blank: '', plusServices: '+ Service',
    serviceTable: [],
    areaControls: 66,
    id: 65,
  },
  {
    menuTitle: 'Unit 328 Tribe 074',
    position: 'Position', lat: 45.59989929, lng: -107.45295715, positionStatus: 'edit',
    type: 'Type', category: 'Standard', typeStatus: 'edit',
    client: 'Client', tribe: 'Tribe', clientStatus: 'edit',
    serviceAge: 'Service Age', duration: '5 hours', serviceAgeStatus: 'edit',
    rent: 'Rented', rentState: 'Yes', rentStatus: 'edit',
    service: 'Service', blank: '', plusServices: '+ Service',
    serviceTable: [],
    areaControls: 67,
    id: 66,
  },
  {
    menuTitle: 'Unit 329 Tribe Handicap 06',
    position: 'Position', lat: 45.59888840, lng: -107.44740295, positionStatus: 'edit',
    type: 'Type', category: 'Standard', typeStatus: 'edit',
    client: 'Client', tribe: 'Tribe', clientStatus: 'edit',
    serviceAge: 'Service Age', duration: '5 hours', serviceAgeStatus: 'edit',
    rent: 'Rented', rentState: 'Yes', rentStatus: 'edit',
    service: 'Service', blank: '', plusServices: '+ Service',
    serviceTable: [],
    areaControls: 68,
    id: 67,
  },
  {
    menuTitle: 'Unit 330 Tribe 075',
    position: 'Position', lat: 45.60225296, lng: -107.45272064, positionStatus: 'edit',
    type: 'Type', category: 'Standard', typeStatus: 'edit',
    client: 'Client', tribe: 'Tribe', clientStatus: 'edit',
    serviceAge: 'Service Age', duration: '5 hours', serviceAgeStatus: 'edit',
    rent: 'Rented', rentState: 'Yes', rentStatus: 'edit',
    service: 'Service', blank: '', plusServices: '+ Service',
    serviceTable: [],
    areaControls: 69,
    id: 68,
  },
  {
    menuTitle: 'Unit 331 Tribe 039',
    position: 'Position', lat: 45.60225296, lng: -107.45268250, positionStatus: 'edit',
    type: 'Type', category: 'Standard', typeStatus: 'edit',
    client: 'Client', tribe: 'Tribe', clientStatus: 'edit',
    serviceAge: 'Service Age', duration: '5 hours', serviceAgeStatus: 'edit',
    rent: 'Rented', rentState: 'Yes', rentStatus: 'edit',
    service: 'Service', blank: '', plusServices: '+ Service',
    serviceTable: [],
    areaControls: 70,
    id: 69,
  },
  {
    menuTitle: 'Unit 333 Tribe 076',
    position: 'Position', lat: 45.60239029, lng: -107.44988251, positionStatus: 'edit',
    type: 'Type', category: 'Standard', typeStatus: 'edit',
    client: 'Client', tribe: 'Tribe', clientStatus: 'edit',
    serviceAge: 'Service Age', duration: '5 hours', serviceAgeStatus: 'edit',
    rent: 'Rented', rentState: 'Yes', rentStatus: 'edit',
    service: 'Service', blank: '', plusServices: '+ Service',
    serviceTable: [],
    areaControls: 71,
    id: 70,
  },
  {
    menuTitle: 'Unit 334 Tribe 077',
    position: 'Position', lat: 45.60240173, lng: -107.44992065, positionStatus: 'edit',
    type: 'Type', category: 'Standard', typeStatus: 'edit',
    client: 'Client', tribe: 'Tribe', clientStatus: 'edit',
    serviceAge: 'Service Age', duration: '5 hours', serviceAgeStatus: 'edit',
    rent: 'Rented', rentState: 'Yes', rentStatus: 'edit',
    service: 'Service', blank: '', plusServices: '+ Service',
    serviceTable: [],
    areaControls: 72,
    id: 71,
  },
  {
    menuTitle: 'Unit 335 Tribe 078',
    position: 'Position', lat: 45.60369492, lng: -107.45162964, positionStatus: 'edit',
    type: 'Type', category: 'Standard', typeStatus: 'edit',
    client: 'Client', tribe: 'Tribe', clientStatus: 'edit',
    serviceAge: 'Service Age', duration: '5 hours', serviceAgeStatus: 'edit',
    rent: 'Rented', rentState: 'Yes', rentStatus: 'edit',
    service: 'Service', blank: '', plusServices: '+ Service',
    serviceTable: [],
    areaControls: 73,
    id: 72,
  },
  {
    menuTitle: 'Unit 336 Tribe 079',
    position: 'Position', lat: 45.60377502, lng: -107.45154572, positionStatus: 'edit',
    type: 'Type', category: 'Standard', typeStatus: 'edit',
    client: 'Client', tribe: 'Tribe', clientStatus: 'edit',
    serviceAge: 'Service Age', duration: '5 hours', serviceAgeStatus: 'edit',
    rent: 'Rented', rentState: 'Yes', rentStatus: 'edit',
    service: 'Service', blank: '', plusServices: '+ Service',
    serviceTable: [],
    areaControls: 74,
    id: 73,
  },
  {
    menuTitle: 'Unit 337 Tribe 037',
    position: 'Position', lat: 45.60208130, lng: -107.45141602, positionStatus: 'edit',
    type: 'Type', category: 'Standard', typeStatus: 'edit',
    client: 'Client', tribe: 'Tribe', clientStatus: 'edit',
    serviceAge: 'Service Age', duration: '5 hours', serviceAgeStatus: 'edit',
    rent: 'Rented', rentState: 'Yes', rentStatus: 'edit',
    service: 'Service', blank: '', plusServices: '+ Service',
    serviceTable: [],
    areaControls: 75,
    id: 74,
  },
  {
    menuTitle: 'Unit 338 Tribe 080',
    position: 'Position', lat: 45.59945679, lng: -107.44520569, positionStatus: 'edit',
    type: 'Type', category: 'Standard', typeStatus: 'edit',
    client: 'Client', tribe: 'Tribe', clientStatus: 'edit',
    serviceAge: 'Service Age', duration: '5 hours', serviceAgeStatus: 'edit',
    rent: 'Rented', rentState: 'Yes', rentStatus: 'edit',
    service: 'Service', blank: '', plusServices: '+ Service',
    serviceTable: [],
    areaControls: 76,
    id: 75,
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
    if (id && serviceAgeHour) {
      collection.updateOne(
        { _id: ObjectId(id) },
        {
          $set: { 'duration': `${serviceAgeHour} hours` },
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

const port = 4000;
app.listen(process.env.PORT || port)