import dotenv from "dotenv";
import path from "path";
import axios from "axios";
import GiftCodeDto from "~/dto/giftCode.dto";

// Load credentials from .env file

const envPath = path.resolve(__dirname, "../.env");
dotenv.config({ path: envPath });
const giftcodeUrl = process.env.GIFTCODE_URL;
const access_token = process.env.ACCESS_TOKEN;

export default async function allTransactions (dto: GiftCodeDto): Promise<any> {
  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `Bearer ${access_token}`,
  };

  const response = await axios.post(giftcodeUrl as string, dto, {
    headers: headers,
  });

  return response;
}
