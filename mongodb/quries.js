const{MongoClient}=require('mongodb')
async function connectdb(){
    const url ="mongodb://localhost:27017/"
    const client=new MongoClient(url)

    try{
        await client .connect();
        console.log("Conneted to databse ")
        const db = client.db("test")
        return {client , db }
    }catch(error){
        console.log("Database connection error ")
    }
}
async function readStudents(db) {
    const collection = db.collection('student');

    // Find all students
    const allStudents = await collection.find({}).toArray();
    console.log('All Students:', allStudents);

    // Find a student with a specific roll number
    const specificStudent = await collection.find({ studentId: 'STU001' });
    console.log('Specific Student:', specificStudent);
}
(async () => {
    const { client, db } = await connectdb();

    try {
        
        await readStudents(db);

        // Read again to confirm deletion
    } finally {
        await client.close();
    }
})();
/*
printjson(db.getSiblingDB('test').students.find(
    {gpa:{$gt:3.5}},
    {gpa :1,name:1,_id:0}
    ));

    printjson(db.getSiblingDB('test').students.find(
    {
        year:"Senior",
        attendancePercentage:{$gte:90}
    },
    {_id:0, name:1,attendancePercentage:1}));

printjson(db.getSiblingDB('test').students.find({
    $or:[
        {department:"Mathematics"},
        {gpa:{$lt:3.3}}
        ]
},
{_id:0,name:1,department:1,gpa:1}));
  
printjson(db.getSiblingDB('test').students.find(
    {
        attendancePercentage:{$gte:85,$lte:95}
    },
    {_id:0,name:1}));

    printjson(db.getSiblingDB('test').students.find(
    {
    $or:[
        {activity1:"Coding Club"},
        {activity2:"Coding Club"}
        ]},
        {_id:0,name:1}));

    printjson(db.getSiblingDB('test').students.find(
    {
        gpa:{$in:[3.4,3.7]}
        
    },
    {_id:0,name:1,gpa:1}));
*/