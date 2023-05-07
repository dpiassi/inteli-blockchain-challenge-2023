import axios from "axios";
import CreateOrderDto from "~/dto/createOrder.dto";

// BE CAREFUL: these environemnt variables are only acessible from Server Side.
const ORDER_URL = process.env.ORDER_URL;
const ACCESS_TOKEN = process.env.ACCESS_TOKEN;

export default async function createOrder(dto: CreateOrderDto): Promise<any> {
  try {
    console.warn("ORDER_URL:", ORDER_URL);
    console.warn("ACCESS_TOKEN:", ACCESS_TOKEN);

    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${ACCESS_TOKEN}`,
    };

    const response = await axios.post(ORDER_URL as string, dto, {
      headers: headers,
    });

    return response;
  } catch (error) {
    console.error("Error creating order:", error);
    throw error;
  }
}

