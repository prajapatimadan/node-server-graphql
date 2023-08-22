# {
#   student(id: "S1003") {
#       id
#     	firstName
#       email
#   },
#   students {
#     id
#     	firstName
#       email
#   }
# },
# mutation {
#   deleteStudent(id:"4"){
#     id
#     firstName
#     email
#   }
# }
# mutation {
#   createStudent(firstName: "Jatin", lastName: "Demo",email: "jatin_demo@testemail.com", password: "testpass", collegeId: "col-102"){
#     firstName
#   }
# }
# mutation {
#   updateStudent(id: "4", firstName: "Daksh", lastName: "Demo",email: "jatin_demo@testemail.com", password: "testpass", collegeId: "col-102"){
#     firstName
#   }
# }
