import axios from "axios";
import CreateOrderDto from "~/dto/createOrder.dto";
import * as env from "../../config";

export default async function createOrder(dto: CreateOrderDto): Promise<any> {
  const accessToken = env.default.ACCESS_TOKEN;
  console.log(dto)
  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: env.default.ORDER_URL,
    headers: { 
      'Content-Type': 'application/json', 
      'Authorization': `Bearer ${accessToken}`
    },
    data : JSON.stringify(dto)
  };
  
  const response = await axios.request(config)
  .then((response) => {
    const responseDate = {
      status: response.status,
      message: 'Your purchase was successful',
      transactionId: response.data.transactionId,
      totalAmount: response.data.amount,
      email: response.data.recipientEmail,
      phone: response.data.recipientPhone
    }
    return responseDate
  })
  .catch((error) => {
    console.log(error)
    const errorMsg = 'There was an error with your purchase, please check that the number of cards and price are correct.'
    return {
      status: error.response.status,
      message: errorMsg
    }
  });

  return response;
  
}

