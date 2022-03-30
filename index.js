const {MongoClient} = require('mongodb')


const dbUrl = "mongodb://localhost:27017"

const studentdata = [
    {
        name:'rahul',
        id:1,
        country:'india',
        age:25
    },
    {
        name:'manav',
        id:3,
        country:'india',
        age:21
    },
    {
        name:'subham',
        id:4,
        country:'us',
        age:24
    },
]


const fistu = {name:'rahul',age:25}


const query = {id:6}

const upddata = {id:6, name:'manav das'}

// MongoClient.connect(dbUrl,(err,db)=>{
//     if(err) console.log(err);
//     const mydb = db.db("school")
//     mydb.createCollection("student",(err,suc)=>{
//         if(err) console.log(err);
//         console.log('student collection created')
//         console.log(suc)
        
//     })

// })

MongoClient.connect(dbUrl,(err,db)=>{
    if(err) console.log(err);
    const mydb = db.db("school")
    // mydb.collection("student").insertOne(studentdata,(err,suc)=>{
    //     if(err) console.log(err);
    //     console.log("student 1 inserted")
    // })

    // mydb.collection("student").insertMany(studentdata,(err,suc)=>{
    //     if(err) console.log(err);
    //     console.log("student data inserted")
    // })

    // mydb.collection('student').find().toArray((err,res)=>{
    //     if(err) console.log(err);
    //     console.log(res)
    // })

    // mydb.collection('student').find(fistu).toArray((err,res)=>{
    //     if(err) console.log(err);
    //     console.log(res)
    // })

    // mydb.collection('student').findOne(fistu,(err,res)=>{
    //     if(err) console.log(err);
    //     console.log(res)
    // })

    // mydb.collection('student').deleteOne(fistu,(err,suc)=>{
    //     if(err) console.log(err);
    //     console.log(suc)
    
    // })

    // const newquery = {id:{$lte:4}}
    // mydb.collection('student').deleteMany(newquery,(err,suc)=>{
    //     if(err) console.log(err);
    //     console.log(suc)
    
    // })



    // mydb.collection('student').updateOne(query,{$set:upddata},(err,res)=>{
    //     if(err) console.log(err);
    //     console.log(res)
    // })

    
    



})