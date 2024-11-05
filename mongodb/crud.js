//Seting up MongoDB connection 
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
async function createStudent(db){
    const collection = db.collection("student")
    const newstudent={
        "studentId": "STU001",
        "name": "John Doe",
        "age": 21,
        "gender": "Male",
        "department": "Computer Science",
        "year": "Senior",
        "gpa": 3.7,
        "course1": "CS101",
        "course2": "CS201",
        "course3": "EE101",
        "email": "john.doe@example.com",
        "phoneNumber": "+1-202-555-0101",
        "street": "123 Main St",
        "city": "Somewhere",
        "state": "NY",
        "zipCode": "10001",
        "attendancePercentage": 90,
        "graduatingYear": 2025,
        "scholarship": "Dean's List",
        "activity1": "Coding Club",
        "activity2": "Soccer"
    }
    const result= await collection.insertOne(newstudent)
    console.log("Data inserted ")
}

async function update(db){
    const collection = db.collection('student');


    //const filter = { rollNo: 'S001' }; // Find student with roll number 'S001'
   // const update = { $set: { marks: 90 } }; // Update marks to 90

   // const result = await collection.updateOne(filter, update);
   // console.log(`Updated ${result.modifiedCount} student(s)`);
}

async function deleteStudent(db) {
    const collection = db.collection('student');

    const filter = { rollNo: 'S001' }; // Find student with roll number 'S001'

    const result = await collection.deleteOne(filter);
    console.log(`Deleted ${result.deletedCount} student(s)`);
}
async function readStudents(db) {
    const collection = db.collection('student');

    // Find all students
    const allStudents = await collection.find({}).toArray();
    console.log('All Students:', allStudents);

    // Find a student with a specific roll number
    const specificStudent = await collection.findOne({ rollNo: 'S001' });
    console.log('Specific Student:', specificStudent);
}
(async () => {
    const { client, db } = await connectdb();

    try {
        await createStudent(db);
         // Read again to confirm deletion
    } finally {
        await client.close();
    }
})();
