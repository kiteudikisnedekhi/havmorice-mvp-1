import { Controller, Post, Delete, Get, Body, Param, UseGuards, Req } from '@nestjs/common';
import { Request } from 'express';  // Add this
// Change @Req() req to @Req() req: Request
import { CartService } from './cart.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard'; // Assume from Day 1

@Controller('cart')
@UseGuards(JwtAuthGuard)
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Post('add')
  async addToCart(@Body() body: { variantId: number; quantity: number; type: string }, @Req() req : Request) {
    return this.cartService.addToCart(req.user.userId, body.variantId, body.quantity, body.type);
  }

  @Delete('remove/:itemId')
  async removeFromCart(@Param('itemId') itemId: number) {
    return this.cartService.removeFromCart(itemId);
  }

  @Get()
  async getCarts(@Req() req) {
    return this.cartService.getCarts(req.user.userId);
  }
}