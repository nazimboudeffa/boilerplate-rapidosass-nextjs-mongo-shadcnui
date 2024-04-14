"use client";
import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'
import { SessionProvider } from "next-auth/react";

export const AuthProvider = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

if (typeof window !== 'undefined') {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
  })
}
export function CSPostHogProvider({ children }) {
    return <PostHogProvider client={posthog}>{children}</PostHogProvider>
}