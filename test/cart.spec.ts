import { Test, TestingModule } from '@nestjs/testing';
import { CartService } from '../src/cart/cart.service';

describe('CartService', () => {
  let service: CartService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CartService],
    }).compile();

    service = module.get<CartService>(CartService);
  });

  it('should add to cart', async () => {
    // Mock and test
  });
});