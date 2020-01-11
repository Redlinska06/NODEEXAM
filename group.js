const fs = require("fs");

const getListHandler = args => {
  fs.readFile("quotes.json", "utf-8", (error, data) => {
    if (error) {
      console.log(error.message);
    } else {
      const quotesParse = JSON.parse(data);
      const quotesFilter = quotesParse.filter(quote => {
        if (quote.group === args.group) {
          return quote;
        }
      });
      if (quotesFilter[0] === undefined) {
        console.log(
          "Quotes group not exist. Choose: Truth Telling, Words of wisdom, Motivational, Life or group you create in Add command"
        );
      } else {
        quotesFilter.forEach(quote => {
          console.log(
            "id:",
            quote.id,
            "content:",
            quote.content,
            "author:",
            quote.author,
            "group:",
            quote.group
          );
        });
      }
    }
  });
};

module.exports = {
  command: "Show <group>",
  desc:
    "Show quotes by group: Truth Telling, Words of wisdom, Motivational, Life",
  handler: getListHandler
};
