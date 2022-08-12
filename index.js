const { fetchMyIP, fetchCoordsByIP } = require('./iss');
// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log(`It didn't work: ${error}`);
//     return;
//   } else {
//     console.log('It worked! Returned IP:', ip);
//   }

// })

//let ip = '191.101.132.121';
let ip = '42';
fetchCoordsByIP(ip, (error, location) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  } else {
    console.log(location);
  }

})