const responseMiddleware = (req, res, next) => {
   // TODO: Implement middleware that returns result of the query
    try {
        if(req && (req.method === 'GET' || req.method === 'DELETE')) {
            return res.status("200").json('OK');
        }

        next();
    } catch (e) {
        res.status(404).json({
            error: true,
            message: e,
        });
    }
}

exports.responseMiddleware = responseMiddleware;