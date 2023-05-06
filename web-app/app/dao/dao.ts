import dotenv from 'dotenv';
import fetch from 'node-fetch';
import path from 'path';
import CreateOrderDto from '~/dto/createOrder.dto';

// Load credentials from .env file

const envPath = path.resolve(__dirname, '../.env');
dotenv.config({ path: envPath });
const clientId = process.env.RELOADLY_CLIENT_ID!;
const clientSecret = process.env.RELOADLY_CLIENT_SECRET!;
const url = process.env.TOKEN_URL


export default function createOrder(dto: CreateOrderDto) {
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
  
  fetch(url as string, options)
    .then((res) => res.json())
    .then((json: any) => {
      const accessToken = json.access_token;
      // Set up headers for authorized requests
      const headers = {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${json.access_token}`,
      };      
  
      // Example: Get gift cards
  
      const url = 'https://giftcards-sandbox.reloadly.com/orders';
  
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/com.reloadly.giftcards-v1+json',
          Authorization: `Bearer ${json.access_token}`
        },
        body: JSON.stringify(dto)
      };
  
      fetch(url, options)
        .then(res => res.json())
        .then(json => console.log(json))
        .catch(err => console.error('error:' + err));
    })
    .catch((err) => console.error('error:' + err));
  
}