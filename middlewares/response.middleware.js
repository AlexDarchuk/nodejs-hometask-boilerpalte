const responseMiddleware = (req, res, next) => {
   // TODO: Implement middleware that returns result of the query
    try {
        if (req && (req.method === 'GET' || req.method === 'DELETE')) {
            next();
        } else if (req && Object.keys(req.body).length)
            next();
    }catch (e) {
        res.status(400).json(e.message);
    }
}

exports.responseMiddleware = responseMiddleware;