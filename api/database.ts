import * as mongodb from 'mongodb'

const url = process.env.MONGODB_URL!
const client = new mongodb.MongoClient(url)