import {inferRouterInputs, inferRouterOutputs} from "@trpc/server";
import type { AppRouter } from "@app/api/src/trpc";

export * from "./user"
export * from "./auth"
export * from "./google/auth"
export * from "./facebook/auth";

/**
 * Inference helpers for input types
 * @example type HelloInput = RouterInputs['example']['hello']
 **/
export type RouterInputs = inferRouterInputs<AppRouter>;

/**
 * Inference helpers for output types
 * @example type HelloOutput = RouterOutputs['example']['hello']
 **/
export type RouterOutputs = inferRouterOutputs<AppRouter>;