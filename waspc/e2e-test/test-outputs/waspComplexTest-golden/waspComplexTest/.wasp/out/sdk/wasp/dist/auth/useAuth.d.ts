import type { AuthUser } from 'wasp/auth';
export declare const getMe: () => Promise<AuthUser | null>;
export default function useAuth(queryFnArgs?: unknown, config?: any): import("@tanstack/react-query").UseQueryResult<{
    identities: {
        google: {
            id: string;
            data: import("./utils").OAuthProviderData;
        };
    };
    getFirstProviderUserId: () => string;
    _rawUser: import("@prisma/client/runtime").GetResult<{
        id: number;
        username: string;
        password: string;
    }, unknown> & {} & {
        auth: import("@prisma/client/runtime").GetResult<{
            id: string;
            userId: number;
        }, unknown> & {} & {
            identities: (import("@prisma/client/runtime").GetResult<{
                providerName: string;
                providerUserId: string;
                providerData: string;
                authId: string;
            }, unknown> & {})[];
        };
    };
    id: number;
    username: string;
    password: string;
}, Error>;
