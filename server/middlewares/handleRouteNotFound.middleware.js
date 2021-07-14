const handleRouteNotFound = (req, res) => {
   res.status(404).json({
      success: false,
      message: '404 Route not Found',
   });
};

module.exports = { handleRouteNotFound };
