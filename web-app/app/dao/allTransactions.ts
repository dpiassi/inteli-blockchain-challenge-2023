import axios from "axios";
import AllTransactionsDto from "~/dto/allTransactions.dto";

// BE CAREFUL: these environemnt variables are only acessible from Server Side.
const TRANSACTIONS_URL = process.env.TRANSACTIONS_URL;
const ACCESS_TOKEN = process.env.ACCESS_TOKEN;

export default async function allTransactions(
  dto: AllTransactionsDto
): Promise<any> {
  try {
    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${ACCESS_TOKEN}`,
    };

    const response = await axios.post(TRANSACTIONS_URL as string, dto, {
      headers: headers,
    });

    return response;
  } catch (error) {
    console.error("Error getting transactions:", error);
    throw error;
  }
}
