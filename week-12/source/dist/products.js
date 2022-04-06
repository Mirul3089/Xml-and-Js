const htmlToElement = (html) => {
  const template = document.createElement("template");
  html = html.trim(); 
  template.innerHTML = html;
  return template.content.firstChild;
};

const renderTable = () => {
  const table = document.getElementById("table-main");

  if (!table) {
    throw new Error("No table element found");
  }

  let data = [
    {
        "EmployeeId": 1,
        "FirstName": "Obadiah",
        "LastName": "O'Hickee",
        "Email": "oohickee0@washingtonpost.com",
        "Gender": "Male",
        "Occupation": "Dental Hygienist",
        "Department": "Engineering",
        "CompanyName": "Oba",
        "Country": "Palestinian Territory"
    },
    {
        "EmployeeId": 2,
        "FirstName": "Tobin",
        "LastName": "Blackway",
        "Email": "tblackway1@tuttocitta.it",
        "Gender": "Male",
        "Occupation": "VP Sales",
        "Department": "Research and Development",
        "CompanyName": "Roodel",
        "Country": "China"
    },
    {
        "EmployeeId": 3,
        "FirstName": "Chelsey",
        "LastName": "Hardern",
        "Email": "chardern2@sina.com.cn",
        "Gender": "Female",
        "Occupation": "VP Accounting",
        "Department": "Training",
        "CompanyName": "Linktype",
        "State": "Ilha de São Miguel",
        "Country": "Portugal"
    },
    {
        "EmployeeId": 4,
        "FirstName": "Aime",
        "LastName": "Osborn",
        "Email": "aosborn3@e-recht24.de",
        "Gender": "Female",
        "Occupation": "Programmer Analyst I",
        "Department": "Engineering",
        "CompanyName": "Eire",
        "Country": "Colombia"
    },
    {
        "EmployeeId": 5,
        "FirstName": "Betsey",
        "LastName": "Haycox",
        "Email": "bhaycox4@opera.com",
        "Gender": "Female",
        "Occupation": "Programmer III",
        "Department": "Research and Development",
        "CompanyName": "Divanoodle",
        "Country": "China"
    },
    {
        "EmployeeId": 6,
        "FirstName": "Jennie",
        "LastName": "Kelberman",
        "Email": "jkelberman5@sbwire.com",
        "Gender": "Female",
        "Occupation": "Sales Representative",
        "Department": "Human Resources",
        "CompanyName": "Katz",
        "Country": "Nigeria"
    },
    {
        "EmployeeId": 7,
        "FirstName": "Kippie",
        "LastName": "Minnis",
        "Email": "kminnis6@google.de",
        "Gender": "Male",
        "Occupation": "Structural Analysis Engineer",
        "Department": "Research and Development",
        "CompanyName": "Browsedrive",
        "Country": "Ukraine"
    },
    {
        "EmployeeId": 8,
        "FirstName": "Agnes",
        "LastName": "Roman",
        "Email": "aroman7@imgur.com",
        "Gender": "Female",
        "Occupation": "Legal Assistant",
        "Department": "Services",
        "CompanyName": "Gabtype",
        "State": "Provence-Alpes-Côte d'Azur",
        "Country": "France"
    },
    {
        "EmployeeId": 9,
        "FirstName": "Tobe",
        "LastName": "Blanden",
        "Email": "tblanden8@kickstarter.com",
        "Gender": "Female",
        "Occupation": "General Manager",
        "Department": "Research and Development",
        "CompanyName": "Flashspan",
        "Country": "Japan"
    },
    {
        "EmployeeId": 10,
        "FirstName": "Faunie",
        "LastName": "Muffett",
        "Email": "fmuffett9@indiegogo.com",
        "Gender": "Female",
        "Occupation": "Analog Circuit Design manager",
        "Department": "Human Resources",
        "CompanyName": "Einti",
        "State": "Stockholm",
        "Country": "Sweden"
    },
    {
        "EmployeeId": 11,
        "FirstName": "Barclay",
        "LastName": "Alekhov",
        "Email": "balekhova@bing.com",
        "Gender": "Male",
        "Occupation": "Desktop Support Technician",
        "Department": "Sales",
        "CompanyName": "Dazzlesphere",
        "Country": "Japan"
    },
    {
        "EmployeeId": 12,
        "FirstName": "Casie",
        "LastName": "Meritt",
        "Email": "cmerittb@paypal.com",
        "Gender": "Female",
        "Occupation": "Staff Scientist",
        "Department": "Support",
        "CompanyName": "Dabvine",
        "Country": "Russia"
    },
    {
        "EmployeeId": 13,
        "FirstName": "Michelle",
        "LastName": "Bliven",
        "Email": "mblivenc@studiopress.com",
        "Gender": "Female",
        "Occupation": "Compensation Analyst",
        "Department": "Services",
        "CompanyName": "Yozio",
        "Country": "South Africa"
    }
]

  const withFilters = Boolean(window.location.search);

  if (withFilters) {
    const params = new URLSearchParams(window.location.search);
    const valueTerm = params.get(`value`).toLowerCase();
    const inputControl = document.getElementById(`input-term`);
    const filterName = params.get(`filters`).toLowerCase();
    inputControl.value = valueTerm;

    switch(filterName) {
      case 'fn':
          data = data.filter(({ EmployeeId }) => EmployeeId.toLowerCase().includes(valueTerm));
          break;
      case 'fname':
          data = data.filter(({ FirstName }) => FirstName.toLowerCase().includes(valueTerm));
          break;
      case 'lname':
          data = data.filter(({ LastName }) => LastName.toLowerCase().includes(valueTerm));
          break;
      case 'email':
          data = data.filter(({ Email }) => Email.toLowerCase().includes(valueTerm));
          break;
      case 'gender':
          data = data.filter(({ Gender }) => Gender.toLowerCase().includes(valueTerm));
          break;
      case 'ip1':
          data = data.filter(({ Occupation}) => Occupation.toLowerCase().includes(valueTerm));
          break;
      case 'ip2':
            data = data.filter(({ Department }) => Department.toLowerCase().includes(valueTerm));
            break;
      case 'ip3':
            data = data.filter(({ CompanyName }) => CompanyName.toLowerCase().includes(valueTerm));
            break;
      case 'ip4':
            data = data.filter(({ State }) => State.toLowerCase().includes(valueTerm));
            break;
      case 'ip5':
            data = data.filter(({ Country }) => Country.toLowerCase().includes(valueTerm));
            break;
      
    }
  
  }

  const rows = data.map(({ EmployeeId, FirstName, LastName, Email, Gender, Occupation, Department, CompanyName, State, Country  }) =>
    table.appendChild(
      htmlToElement(
        `<tr>
          <td>${EmployeeId}</td>
          <td>${FirstName}</td>
          <td>${LastName}</td>
          <td>${Email}</td>
          <td>${Gender}</td>
          <td>${Occupation}</td>
          <td>${Department}</td>
          <td>${CompanyName}</td>
          <td>${State}</td>
          <td>${Country}</td>
        </tr>`
      )
    )
  );
};

renderTable();

const resetTable = () => {

  const table = document.getElementById("table-main");
  table.innerHTML = "";
  const inputControl = document.getElementById(`input-term`);
  inputControl.value = "";
  window.location = 'http://127.0.0.1:5500/Xml-and-Js/week-12/source/dist/index.html'

  let data = [
    {
        "EmployeeId": 1,
        "FirstName": "Obadiah",
        "LastName": "O'Hickee",
        "Email": "oohickee0@washingtonpost.com",
        "Gender": "Male",
        "Occupation": "Dental Hygienist",
        "Department": "Engineering",
        "CompanyName": "Oba",
        "State": "Ilha de São Miguel",
        "Country": "Palestinian Territory"
    },
    {
        "EmployeeId": 2,
        "FirstName": "Tobin",
        "LastName": "Blackway",
        "Email": "tblackway1@tuttocitta.it",
        "Gender": "Male",
        "Occupation": "VP Sales",
        "Department": "Research and Development",
        "CompanyName": "Roodel",
        "State": "Ilha de São Miguel",
        "Country": "China"
    },
    {
        "EmployeeId": 3,
        "FirstName": "Chelsey",
        "LastName": "Hardern",
        "Email": "chardern2@sina.com.cn",
        "Gender": "Female",
        "Occupation": "VP Accounting",
        "Department": "Training",
        "CompanyName": "Linktype",
        "State": "Ilha de São Miguel",
        "Country": "Portugal"
    },
    {
        "EmployeeId": 4,
        "FirstName": "Aime",
        "LastName": "Osborn",
        "Email": "aosborn3@e-recht24.de",
        "Gender": "Female",
        "Occupation": "Programmer Analyst I",
        "Department": "Engineering",
        "CompanyName": "Eire",
        "State": "Ilha de São Miguel",
        "Country": "Colombia"
    },
    {
        "EmployeeId": 5,
        "FirstName": "Betsey",
        "LastName": "Haycox",
        "Email": "bhaycox4@opera.com",
        "Gender": "Female",
        "Occupation": "Programmer III",
        "Department": "Research and Development",
        "CompanyName": "Divanoodle",
        "State": "Ilha de São Miguel",
        "Country": "China"
    },
    {
        "EmployeeId": 6,
        "FirstName": "Jennie",
        "LastName": "Kelberman",
        "Email": "jkelberman5@sbwire.com",
        "Gender": "Female",
        "Occupation": "Sales Representative",
        "Department": "Human Resources",
        "CompanyName": "Katz",
        "State": "Ilha de São Miguel",
        "Country": "Nigeria"
    },
    {
        "EmployeeId": 7,
        "FirstName": "Kippie",
        "LastName": "Minnis",
        "Email": "kminnis6@google.de",
        "Gender": "Male",
        "Occupation": "Structural Analysis Engineer",
        "Department": "Research and Development",
        "CompanyName": "Browsedrive",
        "State": "Ilha de São Miguel",
        "Country": "Ukraine"
    },
    {
        "EmployeeId": 8,
        "FirstName": "Agnes",
        "LastName": "Roman",
        "Email": "aroman7@imgur.com",
        "Gender": "Female",
        "Occupation": "Legal Assistant",
        "Department": "Services",
        "CompanyName": "Gabtype",
        "State": "Provence-Alpes-Côte d'Azur",
        "Country": "France"
    },
    {
        "EmployeeId": 9,
        "FirstName": "Tobe",
        "LastName": "Blanden",
        "Email": "tblanden8@kickstarter.com",
        "Gender": "Female",
        "Occupation": "General Manager",
        "Department": "Research and Development",
        "CompanyName": "Flashspan",
        "State": "Ilha de São Miguel",
        "Country": "Japan"
    },
    {
        "EmployeeId": 10,
        "FirstName": "Faunie",
        "LastName": "Muffett",
        "Email": "fmuffett9@indiegogo.com",
        "Gender": "Female",
        "Occupation": "Analog Circuit Design manager",
        "Department": "Human Resources",
        "CompanyName": "Einti",
        "State": "Stockholm",
        "Country": "Sweden"
    },
    {
        "EmployeeId": 11,
        "FirstName": "Barclay",
        "LastName": "Alekhov",
        "Email": "balekhova@bing.com",
        "Gender": "Male",
        "Occupation": "Desktop Support Technician",
        "Department": "Sales",
        "CompanyName": "Dazzlesphere",
        "State": "Ilha de São Miguel",
        "Country": "Japan"
    },
    {
        "EmployeeId": 12,
        "FirstName": "Casie",
        "LastName": "Meritt",
        "Email": "cmerittb@paypal.com",
        "Gender": "Female",
        "Occupation": "Staff Scientist",
        "Department": "Support",
        "CompanyName": "Dabvine",
        "State": "Ilha de São Miguel",
        "Country": "Russia"
    },
    {
        "EmployeeId": 13,
        "FirstName": "Michelle",
        "LastName": "Bliven",
        "Email": "mblivenc@studiopress.com",
        "Gender": "Female",
        "Occupation": "Compensation Analyst",
        "Department": "Services",
        "CompanyName": "Yozio",
        "State": "Ilha de São Miguel",
        "Country": "South Africa"
    }
]

  table.append(
      htmlToElement(
          `<tr id="table-main">
              <th>EmployeeId</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Occupation</th>
              <th>Department</th>
              <th>ComanyName</th>
              <th>State</th>
              <th>Country</th>
        </tr>`
      )
  );
  
  const rows = data.map(({ EmployeeId, FirstName, LastName, Email, Gender, Occupation, Department, CompanyName, State, Country  }) =>
    table.appendChild(
      htmlToElement(
        `<tr>
        <td>${EmployeeId}</td>
        <td>${FirstName}</td>
        <td>${LastName}</td>s
        <td>${Email}</td>
        <td>${Gender}</td>
        <td>${Occupation}</td>
        <td>${Department}</td>
        <td>${CompanyName}</td> 
        <td>${State}</td>
        <td>${Country}</td>
        </tr>`
      )
    )
  );
}