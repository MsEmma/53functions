module.exports = function(username) {
  if ((username === "Joe") || (username === 'Bob')) {
    return "Hello!";
  } else {
    return "Hello, " + username.toUpperCase() + "!";
  }
};
