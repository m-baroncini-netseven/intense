module.exports = {
  Query: {
    letters: async (_, __, { dataSources }) =>
      dataSources.LetterAPI.getAllLetters(),   
    randomPerson: () =>  { return {'name':'pippo'}}
  },
};