import axios from "axios";
import CreateOrderDto from "~/dto/createOrder.dto";
import * as env from "../../config";

export default async function createOrder(dto: CreateOrderDto): Promise<any> {
  const accessToken = env.default.ACCESS_TOKEN;
  
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
    console.log(JSON.stringify(response.data));
  })
  .catch((error) => {
    console.log(error);
    return error
  });

  return response;
  
}

