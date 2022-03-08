/**
 * 1. Replace regular functions with arrow functions
 * 2. Fix callback hell by rewriting it with async/await
 * 3. Make sure the "Finish" is logged after all the data is converted
 */

 const timeout = (ms, callback) => {
    return new Promise(function (resolve) {
      setTimeout(function () {

        timeout(100)
        .then(main(() => {
            console.log("Start");
        })
        .then(() => generateRandomNumber())
        .then(() => generateData())
        .then(() => convertToFeet())
        .then(() => processData())
        .then(() => logResult())
        .then(main(() => {
            console.log("Finish");
        }),ms));
    })
  });
 }
  
  
  const generateRandomNumber= () => {
    return Math.floor(Math.random() * 40);
  }
  
  const generateData =(callback) => {
    timeout(100, function () {
      const data = Array.from({ length: 20 }, generateRandomNumber);
      callback(data);
    });
  }
  
  const convertToFeet = ( meters, callback) => {
    const feet = meters * 3.2808;
    timeout(100, function () {
      callback(feet);
    });
  }
  
  const processData = (data, callback) => {
    data.map(function (value) {
      callback(value);
    });
  }
  
  const logResult = (meters, feet) => {
    console.log(`Converted ${meters}m to ${feet}ft`);
  }
  
  const main = () => {
    //console.log("Start");
    generateData(function (data) {
      processData(data, function (value) {
        convertToFeet(value, function (result) {
          logResult(value, result);
        });
      });
    });
    //console.log("Finish");
  }

  main();
  

