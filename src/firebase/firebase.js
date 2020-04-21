import * as firebase from 'firebase'
 
const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_ID,
    appId: process.env.FIREBASE_APP_ID
  }

firebase.initializeApp(config)

const database = firebase.database()

export { firebase, database as default } 
//child_removed
//child_changed
//child_added
// database.ref('expenses')
//         .on('child_changed',
//             (snapshot) => console.log(snapshot.key, snapshot.val()),
//             (e) => console.log('Failed to fetch data', e)
//         )

// database.ref('expenses')
//   .on(  'value',
//         (snapshot) => {
//             const expenses = []
//             snapshot.forEach( (childSnapshot) => {
//                 expenses.push({
//                     id: childSnapshot.key,
//                     ...childSnapshot.val()
//                 })
//             })
//             console.log(expenses)
//         },
//         (e) => console.log('Failed to fetch data: ', e)
//     )

// database.ref('expenses')
//   .once('value')
//   .then( (snapshot) => {
//     const expenses = []
//     snapshot.forEach( (childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     })
//     console.log(expenses)
//   })

// const expenses = [{
//     description: 'Water',
//     note: 'Pay water bill',
//     amount: 10000,
//     createdAt: 1234567   
// }, {
//     description: 'Electricity',
//     note: 'pay electricity bill',
//     amount: 12900,
//     createdAt: 1234345
// }, {
//     description: 'Easter Candy',
//     note: 'buy candy',
//     amount:  5000,
//     createdAt: 12323456
// }]

// expenses.forEach( (expense) => {
//     database.ref('expenses').push(expense)
// })

// database.ref().set({
//     name: 'Joseph Chandler',
//     age: 41,
//     job: {
//         title: 'Software Developer',
//         company: 'Google'
//     },
//     stressLevel: 6,
//     location: {
//         city: 'Aston',
//         state: 'Pennsylvania'
//     }
// }).then( () => {
//     console.log('Data saved')
// }).catch( (e) => {
//     console.log('This failed: ', e)
// })

// // database.ref('isSingle').remove()
// //                         .then( () => console.log('Data removed') )
// //                         .catch( (e) => console.log('This failed: ', e))

// // database.ref('isSingle').set(null) // equivalent to remove() call

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle',
//     'location/state': 'Washington'
// })

// database.ref()
//         .once('value')
//         .then( (snapshot) => {
//             const val = snapshot.val()
//             console.log(val)
//         })
//         .catch( (e) => {
//             console.log('Failed to fetch data: ', e)
//         })

// const onValueChange = database.ref()
//                               .on('value', 
//                                 (snapshot) => {
//                                     const val = snapshot.val()
//                                     const name = val.name
//                                     const title = val.job.title
//                                     const company = val.job.company
//                                     console.log(`${name} is a ${title} at ${company}.`)
//                                 },
//                                 (e) => console.log('Failed to fetch data: ', e))
