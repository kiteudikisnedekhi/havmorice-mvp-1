import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { CatalogModule } from './catalog/catalog.module';
import { CartModule } from './cart/cart.module';
import { PaymentsModule } from './payments/payments.module';
import { ReferralsModule } from './referrals/referrals.module';

@Module({
  imports: [AuthModule, CatalogModule, CartModule, PaymentsModule, ReferralsModule],
})
export class AppModule { }
