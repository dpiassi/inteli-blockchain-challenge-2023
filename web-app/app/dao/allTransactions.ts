import axios from "axios";
import dotenv from "dotenv";
import path from "path";
import AllTransactionsDto from "~/dto/allTransactions.dto";

// Load credentials from .env file

const envPath = path.resolve(__dirname, "../.env");
dotenv.config({ path: envPath });
const transactionsURL = process.env.TRANSACTIONS_URL;
const access_token = process.env.ACCESS_TOKEN;

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
