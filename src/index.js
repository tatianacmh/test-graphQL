const { GraphQLServer } = require('graphql-yoga');


// this is your schema
const typeDefs = `
    type Query {
        
        ## Displays hello world in the response
        sayHello(name:String!): String!
        
        ## Esto obtiene a pepe
        getPepe: String
        
        getUser: User
    }
    
    type User {
    
        ## nombre del usuario
        name: String
        
        ## edad del usuario
        age: Int!
    }
`;

// implementation of your schema
const resolvers = {
    Query: {
        sayHello: (root, data) => {
            const {name} = data;

            return `Hello ${name}`;
        },

        getPepe: () => `Hola soy Pepe`,

        getUser: () => {
            return {
                name: "Pepito",
                age: 13
            }
        }
    }
};

const server = new GraphQLServer({
    typeDefs,
    resolvers
});

server.start(() => console.log(`Server is running on http://localhost:4000`));