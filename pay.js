import Chapa from 'chapa';

export let checkoutUrl = '';

export const responseData = (req, res) => {

    let user = req.body;
const api_key = 'CHASECK_TEST-sAZLjV7jiqT7HF5XBFofZxT5Zz416nCn';

const userData =  {
    amount: user.amount,
    currency: user.currency,
    email: user.email,
    first_name: user.first_name,
    last_name: user.last_name,
    // tx_reference: 'tx-ashed-2074-124', // if autoRef is set in the options we dont't need to provide reference, instead it will generate it for us
    callback_url: 'https://checkout.chapa.co/checkout/payment/:token', // your callback URL,
    return_url: 'http://localhost:8082/', // your return URL
    customization: {
        title: 'I love e-commerce',
        description: 'It is time to pay'
        
    }
}
      const chapaResponse = new Chapa(api_key);// Your Chapa API call logic (replace with actual implementation)
      chapaResponse.initialize(userData, { autoRef: true }).then(response => {
        console.log(response);
        if (response.status === 'success') {
            checkoutUrl = response.data.checkout_url;
            return res.json({ success: true, checkoutUrl }); // Send checkoutUrl in response
          } else {
            res.status(500).json({ error: 'Payment initiation failed.' }); // Handle errors
          }

    }).catch(e => console.log(e)) // catch errors
   
   
  }