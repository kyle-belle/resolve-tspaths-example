import { checkAuth, signInHandler, signOutHandler, signUpHandler } from "@app/api/src/express/handlers/auth";

export type SignInResponse = Awaited<ReturnType<typeof signInHandler>>;
export type SignUpResponse = Awaited<ReturnType<typeof signUpHandler>>;
export type SignOutResponse = Awaited<ReturnType<typeof signOutHandler>>;
export type checkAuthResponse = Awaited<ReturnType<typeof checkAuth>>;