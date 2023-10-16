import type { UserType, AuthProvider } from ".prisma/client";

export type UserAuthIdType = 'email';
export type UserAuthType = 'password';

export interface UserCreateType {
    email: string;
    firstname: string;
    lastname: string;
    password?: string;
    type: UserType;
    photoUrl?: string;
    birthdate?: Date;
    provider?: AuthProvider;
    providerId?: string;
    phone?: {prefix: string, number: string}
}

export interface UserUpdateType {
    id: number;
    email?: string;
    firstname?: string;
    lastname?: string;
    password?: string;
    hasPassword?: boolean;
    type?: UserType;
    birthdate?: Date;
    phones?: ({prefix: string; number: string, primary: boolean} & ({id: number, delete?: boolean, new?: false} | {new: true}))[]
}