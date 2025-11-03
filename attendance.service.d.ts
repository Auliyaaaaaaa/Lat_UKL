import { PrismaService } from 'src/prisma/prisma.service';
import { CreateAttendanceDto } from './dto/create-attendance.dto';
export declare class AttendanceService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: CreateAttendanceDto): Promise<{
        status: string;
        message: string;
        data: {
            attendance_id: number;
            user_id: number;
            date: string;
            time: string;
            status: string;
        };
    }>;
    findHistory(userId: number): Promise<{
        status: string;
        message: string;
        data: {
            attendance_id: number;
            user_id: number;
            date: string;
            time: string;
            status: string;
        }[];
    }>;
    findSummary(userId: number, month: number, year: number): Promise<{
        status: string;
        message: string;
        data: {
            month: number;
            year: number;
            totalDays: number;
            presentDays: number;
            absentDays: number;
            lateDays: number;
        };
    }>;
    analyze(userId: number): Promise<{
        status: string;
        message: string;
        data: {
            userId?: undefined;
            totalRecords?: undefined;
            presentRatio?: undefined;
            performance?: undefined;
        };
    } | {
        status: string;
        message: string;
        data: {
            userId: number;
            totalRecords: number;
            presentRatio: string;
            performance: string;
        };
    }>;
}
