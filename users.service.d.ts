import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersService {
    private users;
    create(createUserDto: CreateUserDto): {
        status: string;
        message: string;
        data: {
            name: string;
            email: string;
            password: string;
            role: string;
            id: number;
        };
    };
    findOne(id: number): {
        status: string;
        message: string;
        data?: undefined;
    } | {
        status: string;
        data: any;
        message?: undefined;
    };
    update(id: number, updateUserDto: UpdateUserDto): {
        status: string;
        message: string;
        data?: undefined;
    } | {
        status: string;
        message: string;
        data: any;
    };
}
