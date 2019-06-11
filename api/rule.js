///
/// OUTPUT POSSIBILITIES == DEFAULT, ADDRESSEE_TYPE_1, ADDRESSEE_TYPE_2, ADDRESSEE_TYPE_3, ADDRESSEE_TYPE_4, ADDRESSEE_TYPE_5

let Engine = require("json-rules-engine").Engine;
let Rule = require("json-rules-engine").Rule;

let engine = new Engine();

let rule = new Rule({
  // DISPLAY HELLO WORLD
  conditions: {
    all: [
      {
        fact: "displayMessage",
        operator: "equal",
        value: true
      }
    ]
  },
  event: {
    type: "message",
    params: {
      data: "hello-world!"
    }
  }
});

engine.addRule(rule);

let facts = { displayMessage: true };

const output = engine.run(facts).then(triggeredEvents => {
  triggeredEvents.map(event => console.log(event));
});

module.exports = output;
