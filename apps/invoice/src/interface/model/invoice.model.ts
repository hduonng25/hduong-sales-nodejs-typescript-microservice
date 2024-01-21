export interface IInvoice {
    id?: string;

    code?: string;

    status?: string;

    type?: string;

    email_receiver?: string;

    phone_receiver?: number;

    name_receiver?: string;

    adress_receiver?: string;

    discount?: {
        id: string;
        name?: string;
    };

    ship_money?: number;

    reduced_money?: number;

    order_money?: number;

    bill_money?: number;

    details?: {
        id: string;
        quantity?: number;
        price?: number;
        money?: number;
        product: {
            id?: string;
            name?: string;
            color?: string;
            size?: string;
            image?: string;
        };
    }[];

    created_time?: Date;

    created_by?: string;

    is_deleted?: boolean;
}
