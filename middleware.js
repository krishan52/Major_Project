module.exports.isLoggedIn = (req, res, next) => {
    if(!req.isAuthenticated()){
        req.flash("error","please login before creating listing!");
        return res.redirect("/login"); 
    }
    next();
}