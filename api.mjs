
import fetch from 'node-fetch';


const CLIENT_ID = 'ff6ecca143914ee88b50a6d60b671d17'
const CLIENT_SECRET = '82f69952f8734a8c8d8ae970cb56bbbe'

const clientId = CLIENT_ID
const clientSecret = CLIENT_SECRET

// var client_id = CLIENT_ID;
// var client_secret = CLIENT_SECRET;


const _getToken = async () => {

  const result = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
          'Content-Type' : 'application/x-www-form-urlencoded', 
          'Authorization' : 'Basic ' + btoa(clientId + ':' + clientSecret)
      },
      body: 'grant_type=client_credentials'
  });

  const data = await result.json();
  console.log(data)
  return data.access_token;
}




const _getMusic= async (token) => {

  const result = await fetch('https://api.spotify.com/v1/tracks/2TpxZ7JUBn3uw46aR7qd6V', {
      method: 'GET',
      headers: {
          'Content-Type' : 'application/x-www-form-urlencoded', 
          'Authorization' : 'Bearer ' + token
      }
  })

  const data = await result.json();
  console.log(data)
  
}

let string = ''
const token = _getToken()
token.then(function(result) {
  // console.log(result) // "Some User token"
  string = result
  return string
})

console.log(string)

// }

// var authOptions = {
//   url: 'https://accounts.spotify.com/api/token',
//   headers: {
//     'Authorization': 'Basic ' + Buffer.from((client_id + ':' + client_secret),'base64')
//   },
//   form: {
//     grant_type: 'client_credentials'
//   },
//   json: true
// };
// async function main() {
//   try {
//     request.post(authOptions, function(error, response, body) {
//       if (!error && response.statusCode === 200) {
//         var token = body.access_token;
//         console.log(token)
//       }
//     });
//   }
//   catch(err){
//     console.log(err)
//   }
// }
// main()
// request.post(authOptions, function(error, response, body) {
//   if (!error && response.statusCode === 200) {

//     // use the access token to access the Spotify Web API
//     var token = body.access_token;
//     var options = {
//       url: 'https://api.spotify.com/v1/users/jmperezperez',
//       headers: {
//         'Authorization': 'Bearer ' + token
//       },
//       json: true
//     };
//     request.get(options, function(error, response, body) {
//       console.log(body);
//     });
//   }
// });



// // const userAction = async () => {
// //     const result = await fetch('https://accounts.spotify.com/api/token', {
// //             method : 'POST',
// //             headers: {
// //                 'Authorization': "Basic" + Buffer.from((CLIENT_ID+":"+CLIENT_SECRET),"base64"),
// //                 'content-type': 'application/x-www-form-urlencoded.'
// //             },
// //             body :'grant_type-client_credentials'
        
// //         })
// //     const data = await result.json()
//     return data

// }

// userAction()


