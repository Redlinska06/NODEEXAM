const request = require("request");
const url = `http://ec2-18-217-240-10.us-east-2.compute.amazonaws.com/node/quotes.php`;

const getListHandler = () => {
  request(url, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      const quote = JSON.parse(body);
      console.log("Quote:", quote.quote, "Author:", quote.author);
    } else {
      console.log("Error");
    }
  });
};

module.exports = {
  command: "Download",
  desc: "Download external quote",
  handler: getListHandler
};
