module.exports = (fn) => {                      //function wrapAsync
    return (req, res, next) => {
        fn(req, res, next).catch(next);
    }
}