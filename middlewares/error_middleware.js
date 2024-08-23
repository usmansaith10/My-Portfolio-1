const { model } = require("mongoose");

const errorMiddleware = (err, req, res, next) => {
    const status =  err.status || 500;
    const message = err.message || "BACKEND ERORR";
    const extraDetails = err.extraDetails;

    return res.status(status).json({message,extraDetails});
};

module.exports = errorMiddleware;