import dotenv from 'dotenv';
import fetch from 'node-fetch';
import path from 'path';

// Load credentials from .env file

const envPath = path.resolve(__dirname, '../.env');
dotenv.config({ path: envPath });
const clientId = process.env.RELOADLY_CLIENT_ID!;
const clientSecret = process.env.RELOADLY_CLIENT_SECRET!;


// Get access token
const url = 'https://auth.reloadly.com/oauth/token';

const options = {
  method: 'POST',
  headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
  body: JSON.stringify({
    client_id: clientId,
    client_secret: clientSecret,
    grant_type: 'client_credentials',
    audience: 'https://giftcards-sandbox.reloadly.com',
  }),
};

fetch(url, options)
  .then((res) => res.json())
  .then((json) => {
    const accessToken = json.access_token;
    // Set up headers for authorized requests
    const headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${json.access_token}`,
    };      

    // Example: Get gift cards

    const url: string = 'https://giftcards-sandbox.reloadly.com/orders';

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/com.reloadly.giftcards-v1+json',
        Authorization: `Bearer ${json.access_token}`
      },
      body: JSON.stringify({
        productId: 1,
        countryCode: 'BR',
        quantity: 2,
        unitPrice: 5,
        customIdentifier: 'obucks110',
        senderName: 'John Doe',
        recipientEmail: 'anyone@email.com',
        recipientPhoneDetails: {countryCode: 'BR', phoneNumber: '657829900'}
      })
    };

    fetch(url, options)
      .then(res => res.json())
      .then(json => console.log(json))
      .catch(err => console.error('error:' + err));
  })
  .catch((err) => console.error('error:' + err));
