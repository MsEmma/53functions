module.exports = function(username) {
  if (username === undefined) {
    return "HELLO!";
  } else {
    return "Hello, " + username.toUpperCase() + "!";
  }
};
