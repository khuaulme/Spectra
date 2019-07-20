
exports = function(payload) {

  var queryArg = payload.query.actor || '';
  return context.functions.execute("getMovieByActor", queryArg);

};
