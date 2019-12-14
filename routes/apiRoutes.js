// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var notesData = require("../notesData");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {

  // API GET Requests

  app.get("/api/notesData", function(req, res) {
    res.json(notesData);
  });

  // API POST Requests

  app.post("/api/notesData", function(req, res) {

    if (notesData.length < 5) {
      notesData.push(req.body);
      res.json(true);
    }
    else {
      notesData.push(req.body);
      res.json(false);
    }
  });

  app.post("/api/clear", function(req, res) {
    // Empty out the arrays of data
    notesData.length = 0;
    notesData.length = 0;

    res.json({ ok: true });
  });
};
