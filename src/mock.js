const { MockList } = require('graphql-tools');
const mocks = {
    Int: () => 6,
    Float: () => 22.1,
    String: () => 'Lorem ipsum dolor sit',
    ID: () => Math.floor(Math.random() * 10),
     Query: () => ({
      letter: () => new MockList(3)
    })
  };
 

  module.exports = mocks;