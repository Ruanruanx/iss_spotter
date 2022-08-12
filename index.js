const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes, nextISSTimesForMyLocation } = require('./iss');
// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log(`It didn't work: ${error}`);
//     return;
//   } else {
//     console.log('It worked! Returned IP:', ip);
//   }

// })

// let ip = '223.104.213.127';
// //let ip = '42';
// fetchCoordsByIP(ip, (error, location) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   } else {
//     console.log(location);
//   }

 // })
//shanghai
// const coords = { latitude: 31.230416, longitude: 121.473701}

// //const coords ={latitude:51.507351, longitude: -0.127758}

// fetchISSFlyOverTimes(coords,(error, result)=>{
//   if(error){
//     console.log("It didn't work!", error);
//     return;
//     } else {
//       console.log(result);
//     }

// })
const printPassTimes = function(passTimes){
  for(const pass of passTimes){
    const dateTime = new Date(0);
    dateTime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${dateTime} for ${duration} seconds!`)
  }
}
nextISSTimesForMyLocation((error, passTimes)=>{
  if(error){
     console.log("It didn't work!", error);
     return;
  }
  console.log(printPassTimes(passTimes));

})


