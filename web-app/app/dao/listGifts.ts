
import axios from "axios";
import ListGiftsDto from "~/dto/listGifts.dto";

// BE CAREFUL: these environemnt variables are only acessible from Server Side.
const GIFT_LIST_URL = process.env.GIFT_LIST_URL;
const ACCESS_TOKEN = process.env.ACCESS_TOKEN;

export default async function ListGifts(dto: ListGiftsDto): Promise<any> {
  try {
    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${ACCESS_TOKEN}`,
    };

    const response = await axios.post(GIFT_LIST_URL as string, dto, {
      headers: headers,
    });

    return response;
  } catch (error) {
    console.error("Error getting transactions:", error);
    throw error;
  }
}

