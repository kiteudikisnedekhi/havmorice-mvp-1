"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const auth_service_1 = require("../src/auth/auth.service");
describe('AuthService', () => {
    let service;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [auth_service_1.AuthService],
        }).compile();
        service = module.get(auth_service_1.AuthService);
    });
    it('should send OTP', async () => {
        const result = await service.sendOtp('+911234567890');
        expect(result.message).toBe('OTP sent');
    });
    it('should verify OTP and create user', async () => {
    });
});
//# sourceMappingURL=auth.spec.js.map