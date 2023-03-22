// 2. Import Express
// const express = require("express"); // common type (cjs)
import express from "express"; // module type (js)

// 3. Configuration
const app = express();

// 4. Middleware
app.use(express.json());

// 6. Data Creation
const courses = [
  {
    cid: 1,
    cname: "HTML",
    desc: "This is HTML Course",
    price: 0,
  },
  {
    cid: 2,
    cname: "CSS",
    desc: "This is CSS Course",
    price: 0,
  },
  {
    cid: 3,
    cname: "JS",
    desc: "This is JS Course",
    price: 5000,
  },
];

// 5. Route Handling
// All Data Route
app.get("/api/courses", (req, res) => {
  // REQ: NO data
  // RES: All course data
  try {
    res.status(200).send(courses);
  } catch (error) {
    res.json({ message: 505 });
  }
});

//Specific Data Route
app.get("/api/course/:id", (req, res) => {
  // REQ: cid Data (BODY, PARAMS, QU/ERY)
  // console.log("BODY", req.body); // Body --> JSON {"price" : 10000}
  // URL based inputs  - STRING
  //   console.log("QUERY", req.query); // /api/course?courseid=2&cname=css
  try {
    const individualCourse = courses.find(
      (c) => c.cid === Number(req.params.id)
    );
    // const individualCourse = courses.find((c) => {
    //   //   return c.cid === req.body.id;
    //   return c.cid === Number(req.params.id);
    // });
    if (individualCourse) {
      res.json(individualCourse);
    } else {
      res.status(404).json({ message: "Not found" });
    }
  } catch (error) {
    res.json({ message: 505 });
  }

  // RES: Specific data / Not found
  //   if (req.params.id < 1000) {
  //     res.json({
  //       message: "Lesser than 1000",
  //     });
  //   } else if (Number(req.params.id) === 1000) {
  //     res.json({
  //       message: "Equal to 1000",
  //     });
  //   } else if (req.params.id > 1000) {
  //     res.json({
  //       message: "Greater than 1000",
  //     });
  //   } else {
  //     res.json({
  //       message: "No body data provided",
  //     });
  //   }
});

// 1. Port Creation
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});

// http://localhost:3000/api/courses
