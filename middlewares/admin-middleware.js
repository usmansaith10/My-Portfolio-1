const adminMiddleware = async (req, res, next) =>{
    try {
        //console.log(req.user);
        const adminRole = req.user.isAdmin;
        if(!adminRole){
            return res.status(404).json({message:"Access denied user is not an admin."});
        }
    //If user is an admin then proceed to the next step.
        next();
       // res.status(200).json({msg:req.user.isAdmin});
    } catch (error) {
        next(error);
    }
};

module.exports = adminMiddleware;