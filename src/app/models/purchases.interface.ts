//import {}  
export interface Purchase {
    idProduct: number;
    fk_idUser: number;
    purchaseDate : string;
    productName: string;
    price: number;
    paymentMethod: string;
    quantityOfMonths : number | null;
    typePurchase: string | null;
    totalToPay:number;
    paymentPerMonth: number | null; 
    dateToPay: Date | null;
    status: string;
    registrationDate: Date;
    fk_idCategory: number;

}