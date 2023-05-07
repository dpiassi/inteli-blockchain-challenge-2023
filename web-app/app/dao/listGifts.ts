import axios from "axios";
import ListGiftsDto from "~/dto/listGifts.dto";
import * as env from "../../config";


const giftlistUrl = env.default.GIFTLIST_URL;
const access_token = env.default.ACCESS_TOKEN;

export default async function listGifts(dto: ListGiftsDto): Promise<any> {
  try {
    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${access_token}`,
    };

    const response = await axios.post(giftlistUrl as string, dto, {
      headers: headers,
    });

    return response;
  } catch (error) {
    console.error("Error getting transactions:", error);
    throw error;
  }
}

