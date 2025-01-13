const express = require('express');
const path = require('path');
const db = require('./config/connection');
const { ApolloServer } = require('apollo-server-express');
const { authMiddleware } = require('./middleware/authMiddleware');
const { typeDefs, resolvers } = require('./graphql/schemas'); // Import GraphQL schemas

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

// Create Apollo Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) => {
    const auth = await authMiddleware({ req }); // Get the authenticated user from the token
    return { user: auth.user }; // Add the user to the context
  }
});

// Apply Apollo Server middleware to Express app
server.applyMiddleware({ app, path: '/graphql' });

// Connect to the database and start the server
db.once('open', () => {
  app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
});
