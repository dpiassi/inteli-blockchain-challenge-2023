const env = {
    DATABASE_URL:"file:dev.db",
    SESSION_SECRET:"super-duper-s3cret",
    ORDER_URL:"https://giftcards-sandbox.reloadly.com/orders",
    GIFTLIST_URL:"https://giftcards-sandbox.reloadly.com/products?countryCode=BR",
    REDEEM_URL:"https://giftcards-sandbox.reloadly.com/redeem-instructions/%7BbrandId%7D",
    TRANSACTIONS_URL:"https://giftcards-sandbox.reloadly.com/reports/transactions",
    GIFTCODE_URL:"https://giftcards-sandbox.reloadly.com/orders/transactions/%7BtransactionId%7D/cards",
    ACCESS_TOKEN:"eyJraWQiOiJjNGE1ZWU1Zi0xYmE2LTQ1N2UtOTI3Yi1lYzdiODliNzcxZTIiLCJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxOTc1OCIsImlzcyI6Imh0dHBzOi8vcmVsb2FkbHktc2FuZGJveC5hdXRoMC5jb20vIiwiaHR0cHM6Ly9yZWxvYWRseS5jb20vc2FuZGJveCI6dHJ1ZSwiaHR0cHM6Ly9yZWxvYWRseS5jb20vcHJlcGFpZFVzZXJJZCI6IjE5NzU4IiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIiwiYXVkIjoiaHR0cHM6Ly9naWZ0Y2FyZHMtc2FuZGJveC5yZWxvYWRseS5jb20iLCJuYmYiOjE2ODMzNzc5NzUsImF6cCI6IjE5NzU4Iiwic2NvcGUiOiJkZXZlbG9wZXIiLCJleHAiOjE2ODM0NjQzNzUsImh0dHBzOi8vcmVsb2FkbHkuY29tL2p0aSI6ImU4MzZmMDZiLTY0ZWYtNDE3NS05MzBmLTFlYjljNTVhNGVhNyIsImlhdCI6MTY4MzM3Nzk3NSwianRpIjoiOTdhZGQ3MzctNzU1MS00OGUxLWJiNWYtNTk3M2FhODU0YjE3In0.f9aQZIM-q9HR1CUlB9JCer8YMdqBt8OiuXXf_baGcKM"
}

export default env