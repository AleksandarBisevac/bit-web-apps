const figlet = require("figlet");
const Joke = require("awesome-dev-jokes");

figlet("Hello World!!", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});

figlet(
  "Poyy",
  {
    font: "JS Capital Curves",
    width: 100,
  },
  function (err, data) {
    if (err) {
      console.log("Nešto neje u redu!");
      console.dir(err);
      return;
    }
    console.log(data);
  }
);

const getDevJoke = () => {
  return Joke.getRandomJoke();
};

console.log(getDevJoke());
