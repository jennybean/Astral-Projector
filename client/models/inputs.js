import fetch from 'isomorphic-fetch'

export function fetchMoon(date, location) {
  return fetch('http://api.usno.navy.mil/rstt/oneday?date=' + date + '&loc=' + location)
    .then(function(data){
      return data.json();
    })
}

// export function fetchLocation(){ 
//   return fetch('http://nominatim.openstreetmap.org/search?q=paris,+france&format=json&polygon=0&addressdetails=1', {
//     method: 'GET'
//   }).then(function(coords) { 
//     console.log('location', coords)
//   }).catch(function(err){console.log('Could not load location!', err)})
// }
