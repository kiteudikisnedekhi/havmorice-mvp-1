import { CartService } from './cart.service';
export declare class CartController {
    private readonly cartService;
    constructor(cartService: CartService);
    addToCart(body: {
        variantId: number;
        quantity: number;
        type: string;
    }, req: any): Promise<{
        message: string;
    }>;
    removeFromCart(itemId: number): Promise<{
        message: string;
    }>;
    getCarts(req: any): Promise<any[]>;
}
