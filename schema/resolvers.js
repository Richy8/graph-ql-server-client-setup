const { UserList, MovieList } = require("../FakeData");

const resolvers = {
  Query: {
    users: (parent, args, context) => {
      // console.log(context);
      return UserList;
    },

    user: (parent, args, context) => {
      context();
      let { id } = args;
      return UserList.find((user) => user.id === +id);
    },

    movies: () => {
      return MovieList;
    },

    movie: (_, args) => {
      let { name } = args;
      return MovieList.find(
        (movie) => movie.name.toLowerCase() === name.toLowerCase()
      );
    },
  },

  Mutation: {
    createUser: (parent, args) => {
      const user = args.input;
      const lastId = UserList[UserList.length - 1].id;
      user.id = lastId + 1;
      UserList.push(user);
      return user;
    },

    updateUserName: (parent, args) => {
      let { id, username } = args.input;
      let updatedUser;

      UserList.map((user) => {
        if (user.id === +id) {
          user.username = username;
          updatedUser = user;
        }
      });

      return updatedUser;
    },

    deleteUser: (parent, args) => {
      let { id } = args;
      let new_user_list = UserList.filter((user) => user.id !== +id);
      return new_user_list;
    },
  },

  User: {
    favouriteMovies: () => {
      return MovieList.filter(
        (movie) =>
          movie.yearOfPublication >= 2000 && movie.yearOfPublication <= 2010
      );
    },
  },
};

module.exports = { resolvers };
