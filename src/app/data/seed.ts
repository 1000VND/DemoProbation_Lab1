import { User } from "../models/user";

/**
 * Dữ liệu người dùng
 */
export const Users: User[] = [
    { id: 1, username: 'admin', password: '123', isActive: true },
    { id: 2, username: 'test', password: '123', isActive: false },
    { id: 3, username: 'guest', password: '123', isActive: true }
];
