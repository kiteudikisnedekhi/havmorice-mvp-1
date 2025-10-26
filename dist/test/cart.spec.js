"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const cart_service_1 = require("../src/cart/cart.service");
describe('CartService', () => {
    let service;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [cart_service_1.CartService],
        }).compile();
        service = module.get(cart_service_1.CartService);
    });
    it('should add to cart', async () => {
    });
});
//# sourceMappingURL=cart.spec.js.map