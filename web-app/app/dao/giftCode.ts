import axios from "axios";
import GiftCodeDto from "~/dto/giftCode.dto";

// BE CAREFUL: these environemnt variables are only acessible from Server Side.
const GIFTCODE_URL = process.env.GIFTCODE_URL;
const ACCESS_TOKEN = process.env.ACCESS_TOKEN;

export default async function allTransactions(dto: GiftCodeDto): Promise<any> {
  try {
    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${ACCESS_TOKEN}`,
    };

    const response = await axios.post(GIFTCODE_URL as string, dto, {
      headers: headers,
    });

    return response;
  } catch (error) {
    console.error("Error getting transactions:", error);
    throw error;
  }
}
