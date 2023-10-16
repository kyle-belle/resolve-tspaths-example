export type UserAuthIdType = 'email';
export type UserAuthType = 'password';

export interface UserCreateType {
    email: string;
    firstname: string;
    lastname: string;
    password?: string;
    photoUrl?: string;
    birthdate?: Date;
}

export interface UserUpdateType {
    id: number;
    email?: string;
    firstname?: string;
    lastname?: string;
    password?: string;
    hasPassword?: boolean;
    birthdate?: Date;
}