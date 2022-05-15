const UserList = [
  {
    id: 1,
    name: "Efemena Elvis",
    username: "richyjones",
    age: 21,
    nationality: "CANADA",
    friends: [
      {
        id: 2,
        name: "Jerry Smith",
        username: "jerrysmith",
        age: 18,
        nationality: "JAPAN",
      },
      {
        id: 3,
        name: "Angela Jackson",
        username: "angelajackson",
        age: 24,
        nationality: "MEXICO",
      },
    ],
  },
  {
    id: 2,
    name: "Jerry Smith",
    username: "jerrysmith",
    age: 18,
    nationality: "JAPAN",
    friends: [
      {
        id: 1,
        name: "Efemena Elvis",
        username: "richyjones",
        age: 21,
        nationality: "CANADA",
      },
      {
        id: 4,
        name: "Marvel Smith",
        username: "marvelsmith",
        age: 22,
        nationality: "BRAZIL",
      },
    ],
  },
  {
    id: 3,
    name: "Angela Jackson",
    username: "angelajackson",
    age: 24,
    nationality: "MEXICO",
    friends: [
      {
        id: 6,
        name: "Jean Claude",
        username: "jeanclaude",
        age: 27,
        nationality: "ITALY",
      },
    ],
  },
  {
    id: 4,
    name: "Marvel Smith",
    username: "marvelsmith",
    age: 22,
    nationality: "BRAZIL",
    friends: [
      {
        id: 3,
        name: "Angela Jackson",
        username: "angelajackson",
        age: 24,
        nationality: "MEXICO",
      },
    ],
  },
  {
    id: 5,
    name: "Tom Cruise",
    username: "tomcruise",
    age: 26,
    nationality: "PORTUGAL",
    friends: [
      {
        id: 6,
        name: "Jean Claude",
        username: "jeanclaude",
        age: 27,
        nationality: "ITALY",
      },
    ],
  },
  {
    id: 6,
    name: "Jean Claude",
    username: "jeanclaude",
    age: 27,
    nationality: "ITALY",
    friends: [
      {
        id: 5,
        name: "Tom Cruise",
        username: "tomcruise",
        age: 26,
        nationality: "PORTUGAL",
      },
    ],
  },
];

const MovieList = [
  {
    id: 1,
    name: "Avengers",
    yearOfPublication: 2015,
    isInTheaters: true,
  },
  {
    id: 2,
    name: "Suit",
    yearOfPublication: 2012,
    isInTheaters: true,
  },
  {
    id: 3,
    name: "Small Ville",
    yearOfPublication: 2005,
    isInTheaters: true,
  },
  {
    id: 4,
    name: "The Originals",
    yearOfPublication: 2009,
    isInTheaters: true,
  },
  {
    id: 5,
    name: "300 Spartans",
    yearOfPublication: 2030,
    isInTheaters: false,
  },
];

module.exports = { UserList, MovieList };
