const { graphqlHTTP } = require("express-graphql");
const studentSchema  = require("./studentSchema");
const studentResolvers = require("./studentResolver");
const router =  graphqlHTTP({
    schema: studentSchema.schema,
    rootValue: studentResolvers.Query,
    graphiql: true,
  });

  module.exports = {router}