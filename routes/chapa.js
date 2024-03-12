// import Chapa from 'chapa';
// const api_key = 'CHASECK_TEST-sAZLjV7jiqT7HF5XBFofZxT5Zz416nCn';

// // const tx_ref = await chapa.generateTransactionReference();
// // const data = req.body;
// export const userData =  {
//     amount: data.amount,
//     currency: data.currency,
//     email: data.email,
//     first_name: data.first_name,
//     last_name: data.last_name,
//     // tx_reference: 'tx-ashed-2074-124', // if autoRef is set in the options we dont't need to provide reference, instead it will generate it for us
//     callback_url: 'https://checkout.chapa.co/checkout/payment/:token', // your callback URL,
//     return_url: 'http://localhost:8082/', // your return URL
//     customization: {
//         title: 'I love e-commerce',
//         description: 'It is time to pay'
//     }
// }
// let myChapa = new Chapa( api_key);
// myChapa.initialize(userData, { autoRef: true }).then(response => {
  
//     console.log(response);
//     // console.log(response);
// }).catch(e => console.log(e)) // catch errors

// // async/await

// // let responsed = await myChapa.initialize(data, { autoRef: true })
//  /*
//     response:
//       {
//         message: 'Hosted Link',
//         status: 'success' || 'failed',
//         data: {
//           checkout_url: 'https://checkout.chapa.co/checkout/payment/:token'
//         },
//         tx_ref: 'generated-token' // this will be the auto generated reference
//       }*/
// // // console.log(responsed);
// // myChapa.verify('txn-reference').then(response => {
// //     // console.log(response) // if success
// // }).catch(e => console.log(e)) // catch err

// // // async/await
// // let responses = await myChapa.verify('txn-reference')
// // console.log(responses) // if success
// export default userData;