import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from '../src/auth/auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthService],
    }).compile();

    service = module.get<AuthService>(AuthService);
  });

  it('should send OTP', async () => {
    const result = await service.sendOtp('+911234567890');
    expect(result.message).toBe('OTP sent');
  });

  it('should verify OTP and create user', async () => {
    // Mock DB and test logic
  });
});