const { User } = require('../models'); // Import User model
const { signToken } = require('../utils/auth'); // Import signToken utility for JWT signing

const resolvers = {
  Query: {
    // me: Returns the currently authenticated user
    me: async (parent, args, context) => {
      if (!context.user) {
        throw new Error('You must be logged in!');
      }
      return context.user;
    },
  },

  Mutation: {
    // login: Logs in a user by email and password and returns an Auth type
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new Error("Can't find this user");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new Error('Wrong password!');
      }

      const token = signToken(user);
      return { token, user };
    },

    // addUser: Creates a new user and returns an Auth type with token
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });

      const token = signToken(user);
      return { token, user };
    },

    // saveBook: Adds a book to the user's savedBooks array
    saveBook: async (parent, { bookInput }, context) => {
      if (!context.user) {
        throw new Error('You must be logged in!');
      }

      const updatedUser = await User.findOneAndUpdate(
        { _id: context.user._id },
        { $addToSet: { savedBooks: bookInput } },
        { new: true, runValidators: true }
      );

      return updatedUser;
    },

    // removeBook: Removes a book from the user's savedBooks array
    removeBook: async (parent, { bookId }, context) => {
      if (!context.user) {
        throw new Error('You must be logged in!');
      }

      const updatedUser = await User.findOneAndUpdate(
        { _id: context.user._id },
        { $pull: { savedBooks: { bookId } } },
        { new: true }
      );

      if (!updatedUser) {
        throw new Error("Couldn't find user with this id!");
      }

      return updatedUser;
    },
  },
};

module.exports = resolvers;
