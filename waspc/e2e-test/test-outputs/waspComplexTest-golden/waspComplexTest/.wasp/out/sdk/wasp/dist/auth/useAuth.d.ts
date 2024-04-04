import type { AuthUser } from '../server/auth/user.js';
export declare const getMe: () => Promise<AuthUser | null>;
export default function useAuth(queryFnArgs?: unknown, config?: any): import("@tanstack/react-query").UseQueryResult<AuthUser, Error>;
