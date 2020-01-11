const fs = require("fs");

const addTaskHandler = args => {
  console.log(args);
  fs.readFile("quotes.json", "utf-8", (error, data) => {
    if (error) {
      console.log(error.message);
    } else {
      const quotesParse = JSON.parse(data);
      const quotesFilter = quotesParse.filter(quote => {
        if (quote.id != args.number) {
          return quote;
        }
      });
      fs.writeFile("quotes.json", JSON.stringify(quotesFilter), () => {
        console.log(`Quote number ${args.number} was removed`);
      });
    }
  });
};

module.exports = {
  command: "Remove <number>",
  desc: "Remove quote from list",
  handler: addTaskHandler
};
