const { MockList } = require('graphql-tools');
const mocks = {
    Int: () => 6,
    Float: () => 22.1,
    String: () => 'Lorem ipsum dolor sit',
    ID: () => Math.floor(Math.random() * 10),
     Query: () => ({
      letter: () => new MockList(3)
    }),
    Letter: () => ({
      content : "Saepe expedita suscipit proident! Ea perspiciatis in nesciunt ex accusamus sagittis doloremque, quibusdam, aspernatur fringilla nulla eligendi commodi architecto! At habitasse! Nulla, tenetur quos? Est adipisci, magnis, dicta! Ipsam consectetuer porta cubilia imperdiet aenean minus iure aliquip hymenaeos praesent? Proident! Labore temporibus, assumenda veritatis, molestias semper dolores volutpat harum, viverra, nibh eum quaerat soluta quos wisi, eros odit numquam et."
    })
  };
 

  module.exports = mocks;