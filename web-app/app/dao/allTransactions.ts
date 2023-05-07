import axios from "axios";
import AllTransactionsDto from "~/dto/allTransactions.dto";
import * as env from "../../config";

// Load credentials from .env file

const transactionsURL = env.default.TRANSACTIONS_URL;
const access_token = env.default.ACCESS_TOKEN;

export default async function allTransactions(
  dto: AllTransactionsDto
): Promise<any> {
  try {
    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${access_token}`,
    };

    const response = await axios.post(transactionsURL as string, dto, {
      headers: headers,
    });

    return response;
  } catch (error) {
    console.error("Error getting transactions:", error);
    throw error;
  }
}
