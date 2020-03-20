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
const db = admin.firestore();
const db01 = db.collection("pg01");
const db02 = db.collection("pg02");
const db03 = db.collection("pg03");
const db04 = db.collection("pg04");
const db05 = db.collection("pg05");

app.get("/pg01", (request, response) => {
  cors(request, response, async () => {
    db01.get().then(docs => {
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
    db01.add(newBase).then(() => {
      response.status(200).json(null);
    });
  });
});

app.get("/pg02", (request, response) => {
  cors(request, response, async () => {
    db02.get().then(docs => {
      let base = [];

      docs.forEach(doc => {
        base.push(doc.data());
      });

      response.json(base);
    });
  });
});
app.post("/pg02", (request, response) => {
  cors(request, response, async () => {
    const newBase = request.body;
    db02.add(newBase).then(() => {
      response.status(200).json(null);
    });
  });
});

app.get("/pg03", (request, response) => {
  cors(request, response, async () => {
    db03.get().then(docs => {
      let base = [];

      docs.forEach(doc => {
        base.push(doc.data());
      });

      response.json(base);
    });
  });
});
app.post("/pg03", (request, response) => {
  cors(request, response, async () => {
    const newBase = request.body;
    db03.add(newBase).then(() => {
      response.status(200).json(null);
    });
  });
});

app.get("/pg04", (request, response) => {
  cors(request, response, async () => {
    db04.get().then(docs => {
      let base = [];

      docs.forEach(doc => {
        base.push(doc.data());
      });

      response.json(base);
    });
  });
});
app.post("/pg04", (request, response) => {
  cors(request, response, async () => {
    const newBase = request.body;
    db04.add(newBase).then(() => {
      response.status(200).json(null);
    });
  });
});

app.get("/pg05", (request, response) => {
  cors(request, response, async () => {
    db05.get().then(docs => {
      let base = [];

      docs.forEach(doc => {
        base.push(doc.data());
      });

      response.json(base);
    });
  });
});
app.post("/pg05", (request, response) => {
  cors(request, response, async () => {
    const newBase = request.body;
    db05.add(newBase).then(() => {
      response.status(200).json(null);
    });
  });
});

exports.api = functions.https.onRequest(app);
