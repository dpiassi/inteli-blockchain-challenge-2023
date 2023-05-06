export default interface listGiftsDto {
    productId: number,
    countryCode?: string,
    quantity: number,
    unitPrice: number,
    customIdentifier?: string,
    senderName: string,
    recipientEmail: string,
    recipientPhoneDetails?: {
        countryCode: string, 
        phoneNumber: string
    }
}