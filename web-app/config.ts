const env = {
    DATABASE_URL:"file:dev.db",
    SESSION_SECRET:"super-duper-s3cret",
    ORDER_URL:"https://giftcards-sandbox.reloadly.com/orders",
    GIFTLIST_URL:"https://giftcards-sandbox.reloadly.com/products?countryCode=BR",
    REDEEM_URL:"https://giftcards-sandbox.reloadly.com/redeem-instructions/%7BbrandId%7D",
    TRANSACTIONS_URL:"https://giftcards-sandbox.reloadly.com/reports/transactions",
    GIFTCODE_URL:"https://giftcards-sandbox.reloadly.com/orders/transactions/%7BtransactionId%7D/cards",
    ACCESS_TOKEN:"eyJraWQiOiJjNGE1ZWU1Zi0xYmE2LTQ1N2UtOTI3Yi1lYzdiODliNzcxZTIiLCJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxOTc1MiIsImlzcyI6Imh0dHBzOi8vcmVsb2FkbHktc2FuZGJveC5hdXRoMC5jb20vIiwiaHR0cHM6Ly9yZWxvYWRseS5jb20vc2FuZGJveCI6dHJ1ZSwiaHR0cHM6Ly9yZWxvYWRseS5jb20vcHJlcGFpZFVzZXJJZCI6IjE5NzUyIiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIiwiYXVkIjoiaHR0cHM6Ly9naWZ0Y2FyZHMtc2FuZGJveC5yZWxvYWRseS5jb20iLCJuYmYiOjE2ODM0NjA3MTYsImF6cCI6IjE5NzUyIiwic2NvcGUiOiJkZXZlbG9wZXIiLCJleHAiOjE2ODM1NDcxMTYsImh0dHBzOi8vcmVsb2FkbHkuY29tL2p0aSI6ImYwYmJkNzZlLWJlMjktNDIyNi1hOGQ2LThkYTMzYjE3N2RhNyIsImlhdCI6MTY4MzQ2MDcxNiwianRpIjoiMjdhYTgzNTQtMDM3MS00N2FjLThiNzktMWEzODMzZmNhZmFhIn0.k4qzYyYMYls33U3Z3ZnftQ-5Zj_BwmzcRCWsfXr4KR4"
}

export default env