"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttendanceService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let AttendanceService = class AttendanceService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(data) {
        const attendance = await this.prisma.attendance.create({
            data: {
                userId: data.user_id,
                date: new Date(`${data.date}T${data.time}`),
                status: data.status,
            },
        });
        return {
            status: 'success',
            message: 'Presensi berhasil dicatat',
            data: {
                attendance_id: attendance.id,
                user_id: attendance.userId,
                date: data.date,
                time: data.time,
                status: attendance.status,
            },
        };
    }
    async findHistory(userId) {
        const records = await this.prisma.attendance.findMany({
            where: { userId },
            orderBy: { date: 'desc' },
        });
        return {
            status: 'success',
            message: 'Riwayat presensi berhasil diambil',
            data: records.map((r) => ({
                attendance_id: r.id,
                user_id: r.userId,
                date: r.date.toISOString().split('T')[0],
                time: r.date.toISOString().split('T')[1].substring(0, 8),
                status: r.status,
            })),
        };
    }
    async findSummary(userId, month, year) {
        const startDate = new Date(year, month - 1, 1);
        const endDate = new Date(year, month, 0);
        const records = await this.prisma.attendance.findMany({
            where: {
                userId,
                date: { gte: startDate, lte: endDate },
            },
        });
        const totalDays = records.length;
        const presentDays = records.filter((r) => r.status === 'hadir').length;
        const absentDays = records.filter((r) => r.status === 'absen').length;
        const lateDays = records.filter((r) => r.status === 'terlambat').length;
        return {
            status: 'success',
            message: 'Rekap bulanan berhasil diambil',
            data: { month, year, totalDays, presentDays, absentDays, lateDays },
        };
    }
    async analyze(userId) {
        const all = await this.prisma.attendance.findMany({ where: { userId } });
        if (all.length === 0) {
            return {
                status: 'failed',
                message: 'Belum ada data presensi',
                data: {},
            };
        }
        const presentRatio = (all.filter((a) => a.status === 'hadir').length / all.length) * 100;
        let performance = 'Baik';
        if (presentRatio < 80)
            performance = 'Perlu diperbaiki';
        if (presentRatio < 50)
            performance = 'Buruk';
        return {
            status: 'success',
            message: 'Analisis kehadiran berhasil dihitung',
            data: {
                userId,
                totalRecords: all.length,
                presentRatio: `${presentRatio.toFixed(2)}%`,
                performance,
            },
        };
    }
};
exports.AttendanceService = AttendanceService;
exports.AttendanceService = AttendanceService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AttendanceService);
;
//# sourceMappingURL=attendance.service.js.map