/* CONSTANTS */
const fastify = require("fastify")();
const students = [  {
    id: 1,
    last: "Last1",
    first: "First1",
  },
  {
    id: 2,
    last: "Last2",
    first: "First2",
  },
  {
    id: 3,
    last: "Last3",
    first: "First3",
  }
];
function getStudentById(id) {
    for (let i = 0; i < students.length; i++) {
        idFetch = students[i].id;
        if (id == idFetch) {
            return true
            break
        }
    }
    return false
};

/* GET REQUESTS */

fastify.get("/cit/student", (request, reply) => {
  reply
    .code(200)
    .header("Content-Type", "text/html; charset=utf-8") // check mimetype
    .send("<h1> Route correctly implemented. </h1>");
});

fastify.get("/cit/student/:id", (request, reply) => {
  const { id } = request.query;
  reply
    .code(200)
    .header("Content-Type", "text/html; charset=utf-8") // check mimetype
    .send(
      getStudentById(id)
        `<h1>${first} ${last}!</h1>`
        );
});

fastify.get("/cit/*", (request, reply) => {
  reply
    .code(404)
    .header("Content-Type", "text/html; charset=utf-8") // check mimetype
    .send(
      "Come back later."
      );
});

/* START SERVER */

const listenIP = "localhost";
const listenPort = 8080;
fastify.listen(listenPort, listenIP, (err, address) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  console.log(`Server listening on ${address}`);
});