function notFound(req, res, next) {
  res.status(404);
  const err = new Error(`🔍 - 404 Not Found - ${req.originalUrl}`);
  next(err);
}

function errorHandler(err, req, res, next) {
  const statusCode = res.statusCode !== 200 ? res.statusCode : 500;
  res.status(statusCode);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? "Oof" : err.stack,
  });
}

export default {
  notFound,
  errorHandler,
};
