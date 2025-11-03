import { AttendanceService } from './attendance.service';
import { CreateAttendanceDto } from './dto/create-attendance.dto';
export declare class AttendanceController {
    private readonly attendanceService;
    constructor(attendanceService: AttendanceService);
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
    findHistory(user_id: number): Promise<{
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
    findSummary(user_id: number, month: string, year: string): Promise<{
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
    analyze(user_id: number): Promise<{
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
