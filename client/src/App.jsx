import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

// Set up Apollo Client to connect to the GraphQL server
const client = new ApolloClient({
  uri: '/graphql', // Replace this with the correct URL of your GraphQL server if it's different
  cache: new InMemoryCache(),
});

function App() {
  return (
    // Wrap the entire app with ApolloProvider to provide Apollo Client context
    <ApolloProvider client={client}>
      <Navbar />
      {/* Outlet is where the nested route components will be rendered */}
      <Outlet />
    </ApolloProvider>
  );
}

export default App;
