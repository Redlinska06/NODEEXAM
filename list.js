const fs = require("fs");

const getListHandler = () => {
  fs.readFile("quotes.json", "utf-8", (error, data) => {
    if (error) {
      console.log(error.message);
    } else {
      const quotesParse = JSON.parse(data);
      quotesParse.forEach(quote => {
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
  });
};

module.exports = {
  command: "List",
  desc: "Show all quotes",
  handler: getListHandler
};
