const request = require('request-promise-native');
const fetchMyIP = function(){
  return request('https://api.ipify.org?format=json');
};
const fetchCoordsByIP = function(body){
  let ip = JSON.parse(body).ip;
  return request('http://ipwho.is/' + ip);
 //test error
 //return request('http://ee.is/' + ip);
}

const fetchISSFlyOverTimes = function(body){
  const {latitude, longitude} = JSON.parse(body);
  //const url =`https://iss-pass.herokuapp.com/json/?lat=${latitude}&lon=${longitude}`;
  //test error
  const url =`https://iss.herokuapp.com/json/?lat=${latitude}&lon=${longitude}`;
  return request(url)
}

const nextISSTimesForMyLocation = function(){
  return fetchMyIP()
  .then(fetchCoordsByIP)
  .then(fetchISSFlyOverTimes)
  .then((data)=>{
    const {response} =JSON.parse(data);
    return response;
  })
}

module.exports = {nextISSTimesForMyLocation};