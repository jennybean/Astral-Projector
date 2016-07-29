import fetch from 'isomorphic-fetch'

export function fetchMoon(date, location) {
  return fetch('http://api.usno.navy.mil/rstt/oneday?date=' + date + '&loc=' + location)
    .then(function(data){
      return data.json();
    })
}

// export function fetchWhere(where){ 
//   return fetch('http://wherein.yahooapis.com/v1/document', {
//       method: 'POST', 
//       body: {
//         'documentType': 'text/plain',
//         'outputType': 'json',
//         'documentContent': where
//       }
//     }).then(function(coord) { 
//       console.log('coords', coord);
//     })
// }
