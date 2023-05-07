import axios from "axios";
import RedeemInstructionsDto from "~/dto/redeemInstruct.dto";

// BE CAREFUL: these environemnt variables are only acessible from Server Side.
const REDEEM_URL = process.env.REDEEM_URL;
const ACCESS_TOKEN = process.env.ACCESS_TOKEN;

export default async function listGifts(
  dto: RedeemInstructionsDto
): Promise<any> {
  try {
    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${ACCESS_TOKEN}`,
    };

    const response = await axios.post(REDEEM_URL as string, dto, {
      headers: headers,
    });

    return response;
  } catch (error) {
    console.error("Error getting transactions:", error);
    throw error;
  }
}
