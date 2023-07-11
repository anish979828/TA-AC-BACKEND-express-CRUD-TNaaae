
  ```js
  res.render("students", { list: ["ankit", "suraj", "prashant", "ravi"] });

  ```

  - display list using <% list.forEach(l => {}) %>

- get single student details => GET request on "/students/:id"
  - render an ejs template
  - pass a student object to template for displaying student data

  ```js

  
  res.render("studentDetail", {
    student: { name: "rahul", email: "rahul@altcampus.io" },
  });

  ```
