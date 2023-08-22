const db = require('../../db')
const Query = {
    test: () => 'Test Success, GraphQL server is up & running !!',
    students: () => db.students.list(),
    student: (request) => {
        return db.students.get(request.id)
    },
    createStudent: (args,root, context, info) => {
        let studentObj = db.students;
        let idCount = studentObj.list().length;
        const newStudent = {
            id: `${idCount++}`,
            firstName: args.firstName,
            lastName: args.lastName,
            email: args.email,
            password: args.password,
            collegeId: args.collegeId
        }
        studentObj.create(newStudent);
        return newStudent
    },
    deleteStudent:(args)=>{
        let studentList = db.students;
        studentList.delete(args.id);
        return studentList.list()
    },
    updateStudent:(args)=>{
        let studentList = db.students;
        studentList.update({
            id: args.id,
            firstName: args.firstName,
            lastName: args.lastName,
            email: args.email,
            password: args.password,
            collegeId: args.collegeId
        });
        return studentList.list()
    },
    colleges: () => {
        return db.colleges.list()
    },
 }
 module.exports = {Query}