import axios from "axios";
import RedeemInstructionsDto from "~/dto/redeemInstruct.dto";
import * as env from "../../config";

const redeemUrl = env.default.REDEEM_URL;
const access_token = env.default.ACCESS_TOKEN;

export default async function listGifts(
  dto: RedeemInstructionsDto
): Promise<any> {
  try {
    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${access_token}`,
    };

    const response = await axios.post(redeemUrl as string, dto, {
      headers: headers,
    });

    return response;
  } catch (error) {
    console.error("Error getting transactions:", error);
    throw error;
  }
}
