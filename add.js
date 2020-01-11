const fs = require("fs");

const addTaskHandler = args => {
  const newQuote = {
    id: 1,
    content: args.content,
    author: args.author,
    group: args.group,
    counter: 0
  };
  fs.readFile("quotes.json", "utf-8", (error, data) => {
    if (error) {
      console.log(error.message);
    } else {
      const quotesParse = JSON.parse(data);
      const quotesSort = quotesParse.sort(function(a, b) {
        return a.id - b.id;
      });
      for (let i = 0; i < quotesSort.length; i++) {
        if (quotesSort[i].id === newQuote.id) {
          newQuote.id = quotesSort[i].id + 1;
        }
      }
      quotesParse.push(newQuote);
      fs.writeFile("quotes.json", JSON.stringify(quotesParse), () => {
        console.log("Quote saved");
      });
    }
  });
};

module.exports = {
  command: "Add <content> <author> <group>",
  desc: "Add quote to list",
  handler: addTaskHandler
};
