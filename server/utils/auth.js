const jwt = require('jsonwebtoken');
const { User } = require('../models'); // User model to find user by _id

const secret = 'mysecretsshhhhh'; // Secret for JWT
const expiration = '2h'; // Token expiration time

module.exports = {
  // This function should be used to attach the user to context
  authMiddleware: async ({ req }) => {
    let token = req.headers.authorization || req.query.token;

    if (token && token.startsWith('Bearer ')) {
      token = token.split(' ').pop().trim();
    }

    if (!token) {
     console.log('You are not authenticated!');
      return req;
    }

    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      const user = await User.findById(data._id); // Fetch user from DB
      req.user = user;
      return req; // Add the user to context
    } catch (error) {
      console.log('Invalid or expired token');
      return req;
    }
  },

  // Function for signing a new token
  signToken: function ({ username, email, _id }) {
    const payload = { username, email, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
