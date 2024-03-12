import initializeChapaPayment from './chapa-wrapper.js';
const userData = {
    amount: '450',
    currency: 'ETB',
    email: 'ashebir@gmail.com',
    first_name: 'Ashebir',
    last_name: 'Diriba',
    // tx_reference: 'tx-ashed-2074-124', // if autoRef is set in the options we dont't need to provide reference, instead it will generate it for us
    callback_url: 'https://checkout.chapa.co/checkout/payment/:token', // your callback URL,
    return_url: 'http://localhost:8082/', // your return URL
    customization: {
        title: 'I love e-commerce',
        description: 'It is time to pay'
    }
};

initializeChapaPayment(userData)
    .then(response => console.log(response)
    .catch(e => console.error(e));
