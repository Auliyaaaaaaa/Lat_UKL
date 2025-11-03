import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
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
    findOne(id: string): {
        status: string;
        message: string;
        data?: undefined;
    } | {
        status: string;
        data: any;
        message?: undefined;
    };
    update(id: string, updateUserDto: UpdateUserDto): {
        status: string;
        message: string;
        data?: undefined;
    } | {
        status: string;
        message: string;
        data: any;
    };
}
