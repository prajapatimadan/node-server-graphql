const { buildSchema } = require("graphql");
const schema = buildSchema(`
  type Query {
    test: String,
    greeting: String,
    students: [Student],
    student(id:String!): Student,
    colleges: [College]
  }
  type Mutation {
    createStudent(firstName: String!, lastName: String!,email: String!, password: String!, collegeId: String!): Student!,
    deleteStudent(id: String!): [Student],
    updateStudent(id: String!, firstName: String!, lastName: String!, email: String!, password: String!, collegeId: String!): [Student]
}
  type Student {
    id: String,
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    collegeId: String
}
type College {
    id: String,
    name: String,
    location: String,
    rating: String
}
`);
module.exports = {schema}