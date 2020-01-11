const fs = require("fs");

const getListHandler = () => {
  fs.readFile("quotes.json", "utf-8", (error, data) => {
    if (error) {
      console.log(error.message);
    } else {
      const quotesParse = JSON.parse(data);
      const randomQuote =
        quotesParse[Math.floor(Math.random() * quotesParse.length)];
      randomQuote.counter += 1;
      console.log(
        "Quote:",
        randomQuote.content,
        "Author:",
        randomQuote.author,
        "Counter:",
        `${randomQuote.counter}`
      );
      fs.writeFile("quotes.json", JSON.stringify(quotesParse), () => {
        console.log("Counter updated");
      });
    }
  });
};

module.exports = {
  command: "Random",
  desc: "Display random quote",
  handler: getListHandler
};
