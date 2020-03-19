/* eslint-disable promise/always-return */
/* eslint-disable promise/catch-or-return */
const functions = require("firebase-functions");
const app = require("express")();
const admin = require("firebase-admin");
const corsModule = require("cors");

const cors = corsModule({ origin: true });

//Initialize the firebase functions
admin.initializeApp();

//Initialize the firestore
const db = admin.firestore().collection("pg01");

app.get("/pg01", (request, response) => {
  cors(request, response, async () => {
    db.get().then(docs => {
      let base = [];

      docs.forEach(doc => {
        base.push(doc.data());
      });

      response.json(base);
    });
  });
});
app.post("/pg01", (request, response) => {
  cors(request, response, async () => {
    const newBase = request.body;
    db.add(newBase).then(() => {
      response.status(200).json(null);
    });
  });
});

exports.api = functions.https.onRequest(app);
