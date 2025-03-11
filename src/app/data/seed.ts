import { User } from "../models/user";

/**
 * Dữ liệu người dùng
 */
export const Users: User[] = [
    { id: 1, username: 'admin', password: '123', isActive: true },
    { id: 2, username: 'test', password: '123', isActive: false },
    { id: 3, username: 'guest', password: '123', isActive: true },
    { id: 4, username: 'john_doe', password: 'password123', isActive: true },
    { id: 5, username: 'jane_doe', password: 'qwerty123', isActive: true },
    { id: 6, username: 'dev_user', password: 'devPass2024', isActive: false },
    { id: 7, username: 'support', password: 'helpMe123', isActive: true },
    { id: 8, username: 'manager', password: 'manage2024', isActive: true },
    { id: 9, username: 'editor', password: 'editThis!', isActive: false },
    { id: 10, username: 'superadmin', password: 'superSecurePass', isActive: true },
    { id: 11, username: 'mod_user', password: 'moderate123', isActive: true },
    { id: 12, username: 'tester', password: 'testCase#456', isActive: false },
    { id: 13, username: 'viewer', password: 'viewOnly2024', isActive: true },
    { id: 14, username: 'contributor', password: 'contributeNow', isActive: true },
    { id: 15, username: 'marketing', password: 'market@2024', isActive: false },
    { id: 16, username: 'sales', password: 'sellStuff', isActive: true },
    { id: 17, username: 'hr_manager', password: 'hirePeople', isActive: true },
    { id: 18, username: 'finance', password: 'moneyMatters', isActive: false },
    { id: 19, username: 'it_support', password: 'fixIssues', isActive: true },
    { id: 20, username: 'security', password: 'secureMe2024', isActive: true }
];
