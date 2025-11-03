import { LoginDto } from './dto/login.dto';
export declare class AuthService {
    login(loginDto: LoginDto): Promise<{
        status: string;
        message: string;
        token: string;
    }>;
}
