module.exports = function(n) {

    var fibonacci = [1];
    var x = 0, y = 1, f = 1;

    for (i = 2; i < n; i++) {

        f = x + y;
        x = y;
        y = f;

        if (f < n) {
            fibonacci.push(f);
        }
    }

    return fibonacci;
}
