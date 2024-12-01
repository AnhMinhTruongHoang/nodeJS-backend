


const getHomePage = (req, res) => {
  res.send("hello world");
};

const getABC = (req, res) => {
  res.send("check abc");
};



module.exports = {
  getHomePage,
  getABC,
};
