let Engine = require("json-rules-engine").Engine;
let Rule = require("json-rules-engine").Rule;

let adminEngine = new Engine();
// DISPLAY A HEADSHOT
// ADDRESSEE OR DEFAULT

let headshotRule = new Rule({
  conditions: {
    all: [
      {
        fact: "hasHeadshot",
        operator: "equal",
        value: true
      },
      {
        fact: "hasEmail",
        operator: "equal",
        value: true
      },
      {
        fact: "major",
        operator: "equal",
        value: "computer science"
      }
    ]
  },
  event: {
    type: "email",
    params: {
      data: "send to admin"
    }
  },
  priority: 2
});

let hasDegree = new Rule({
  conditions: {
    any: [
      {
        fact: "hasGED",
        operator: "equal",
        value: true
      },
      {
        fact: "hasBA",
        operator: "equal",
        value: true
      },
      {
        fact: "hasMA",
        operator: "equal",
        value: true
      }
    ]
  },
  event: {
    type: "email",
    params: {
      data: "send to manager"
    }
  },
  priority: 10
});

adminEngine.addRule(hasDegree);
adminEngine.addRule(headshotRule);

let facts = {
  hasHeadshot: true,
  hasBA: true,
  hasGED: false,
  hasMA: false,
  hasEmail: true,
  major: "computer science"
};

const outputAdmin = adminEngine.run(facts).then(triggeredEvents => {
  triggeredEvents.map(event => console.log(event));
});

module.exports = outputAdmin;
