const welcome = {
  sayHello: () => {
    console.log("Hi users!");
  },

  currTime: new Date().toLocaleDateString(),
  company: "WasiaFouzan",
};

module.exports = welcome;
