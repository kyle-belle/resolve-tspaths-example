import { UserWithoutSensitiveData } from '@app/api/src/utils/auth';

declare module 'express-session' {
    interface SessionData {
      user?: UserWithoutSensitiveData | null;
    }
}

export {};