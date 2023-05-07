import axios from "axios";
import GiftCodeDto from "~/dto/giftCode.dto";
import * as env from "../../config";

const giftcodeUrl = env.default.GIFTCODE_URL;
const access_token = env.default.ACCESS_TOKEN;

export default async function allTransactions(dto: GiftCodeDto): Promise<any> {
  try {
    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${access_token}`,
    };

    const response = await axios.post(giftcodeUrl as string, dto, {
      headers: headers,
    });

    return response;
  } catch (error) {
    console.error("Error getting transactions:", error);
    throw error;
  }
}
