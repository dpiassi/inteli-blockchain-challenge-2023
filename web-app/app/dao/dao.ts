import dotenv from 'dotenv';
import path from 'path';
import axios from 'axios'
import CreateOrderDto from '~/dto/createOrder.dto';

// Load credentials from .env file

const envPath = path.resolve(__dirname, '../.env');
dotenv.config({ path: envPath });
const orderUrl = process.env.ORDER_URL
const access_token = process.env.ACCESS_TOKEN


export default async function createOrder(dto: CreateOrderDto): Promise<any> {

  const headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: `Bearer ${access_token}`,
  };     

  const response = await axios.post(orderUrl as string, dto, {
    headers: headers
  });

  return response
}