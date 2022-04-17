const tourists = require("../data/data.json");

const getAllemployees = (term, valueTerm) =>
  new Promise((resolve) => {
    let data = tourists;

    if(term) {

        switch(term) {
                
            case "Name":
                data = data.filter((tourists) => tourists.Name.toLowerCase().includes(valueTerm));
                break;
            case "Email":
                data = data.filter((tourists) => tourists.Email.toLowerCase().includes(valueTerm));
                break;

            case "Gender":
                data = data.filter((tourists) => tourists.Gender.toLowerCase() === valueTerm.toLowerCase());
                break;
            
            case "PhoneNumber":
                data = data.filter((tourists) => tourists.PhoneNumber.toLowerCase().includes(valueTerm));
                break;
            case "Destination":
                data = data.filter((tourists) => tourists.Destination.toLowerCase().includes(valueTerm));
                break;
            case "Package":
                data = data.filter((tourists) => tourists.Package.toLowerCase().includes(valueTerm));
                break;
            case "Duration":
                data = data.filter((tourists) => tourists.Duration.toLowerCase().includes(valueTerm));
                break;
            case "TotalMembers":
                data = data.filter((tourists) => tourists.TotalMembers.toLowerCase().includes(valueTerm));
                break;
            case "Address":
                data = data.filter((tourists) => tourists.Address.toLowerCase().includes(valueTerm));
                break;
            default:
                break;
        }
    }
    
    resolve({ code: 200, data: data });
  });

const getemployeesById = (id) =>
  new Promise((resolve) => {
    const tourists= tourists.find((tourists) => tourists.id === Number(id.trim()));

    if (tourists) {
        resolve({ code: 200, data: Array(touristss) });
    } else {
        resolve({
            code: 404,
            data: { message: `No Tourist found for id ${id}` },
        });
    }
  });

module.exports = {
  getAllemployees,
  getDealerById,
};