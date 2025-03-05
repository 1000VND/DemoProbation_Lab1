import { User } from "../models/user";

export const Users: User[] = [
    { id: 1, username: 'admin', password: '123', roles: ['admin'], isActive: true },
    { id: 2, username: 'test', password: '123', roles: ['user'], isActive: false },
    { id: 3, username: 'guest', password: '123', roles: ['guest'], isActive: true }
];
