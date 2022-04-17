const { getAllemployees, getDealerById } = require("./api/touristss");

const renderTable = (data) => {
  const tableBody = document.getElementById("table-body");

  if (!tableBody) {
    throw new Error("No table element found");
  }
  
  const rows = data.reduce(
    (acc, {Trip_Id, Name, Email, Gender, PhoneNumber, Destination, Package, Duration, TotalMembers, Address }) =>
    acc +
    `<tr>
      <td>${Trip_Id}</td>
      <td>${Name}</td>
      <td>${Email}</td>
      <td>${Gender}</td>
      <td>${PhoneNumber}</td>
      <td>${Destination}</td>
      <td>${Package}</td>
      <td>${Duration}</td>
      <td>${TotalMembers}</td>
      <td>${Address}</td>
  </tr>`,
    ``
  );

  tableBody.innerHTML = rows;
};



getAllemployees().then(({ data }) => renderTable(data));  

const onSubmit = (event) => {
  event.preventDefault();
  const term = event.target.filters.value;
  const valueTerm = event.target.input.value;
  
  if(term === `id`) {
    getDealerById(valueTerm).then(({ data }) => renderTable(data));
  } else {
    getAllemployees(term,stay, department.toLowerCase(), valueTerm.toLowerCase()).then(({ data }) => renderTable(data));
  }
};

const onReset = () => {
  window.location.replace(window.location.pathname);
  getAllemployees().then(({ data }) => renderTable(data));
};

document.getElementById("Form").addEventListener("submit", onSubmit);
document.getElementById("Form").addEventListener("reset", onReset);