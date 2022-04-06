const { getAll } = require("./api/products.js");

const renderTable = (data, nameTerm) => {
  const tableBody = document.getElementById("table-body");

  if (!tableBody) {
    throw new Error("No table element found");
  }

  let source = data;

  if (nameTerm) {
    source = source.filter(({ name }) => name.toLowerCase().includes(nameTerm));
  }

  const rows = source.reduce(
    (acc, { EmployeeId, FirstName, LastName, Email, Gender, Occupation, Department, CompanyName, State, Country }) =>
      acc +
      `<tr id="table-row-${id}"><td>${EmployeeId}</td><td>${FirstName}</td><td>${LastName}</td><td>${Email}</td><td>${Gender}</td>
      <td>${Occupation}</td><td>${Department}</td><td>${CompanyName}</td><td>${State}</td><td>${Country}</td></tr>`,
    ``
  );

  tableBody.innerHTML = rows;
};

getAll().then(({ data }) => renderTable(data));

const onSubmit = (event) => {
  event.preventDefault();

  const term = event.target.name.value;

  getAll().then(({ data }) => renderTable(data, term));
};

const onReset = () => {
  getAll().then(({ data }) => renderTable(data));
};
