const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch(err => next(err));
    }
};

export { asyncHandler }


// async Handler for try catch exceptions
// const asyncHandler = () => {};
// const asyncHandler = (func) => () => {};
// const asyncHandler = (func) => async () => {};

// const asyncHandler = (fn) => async (req, res, next) => {
//     try {
//         await fn(req, res, next); 
//     } catch (error) {
//         res.status(error.code() || 5000).json({ success: false, message: error.message });
//     }
// }