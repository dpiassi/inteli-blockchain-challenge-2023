
import dotenv from "dotenv";
import path from "path";
import axios from "axios";
import ListGiftsDto from "~/dto/listGifts.dto";

// Load credentials from .env file

const envPath = path.resolve(__dirname, "../.env");
dotenv.config({ path: envPath });
const giftlistUrl = process.env.GIFT_LIST_URL;
const access_token = process.env.ACCESS_TOKEN;

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

