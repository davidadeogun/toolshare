
import NextAuth, { NextAuthOptions } from "next-auth";
import type { Adapter } from "next-auth/adapters";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "@/lib/prisma";
import GoogleProvider from "next-auth/providers/google";

export const authConfig = {
    //secret: process.env.NEXTAUTH_SECRET,
    providers: [GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID as string,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
       
    }),
    ],
    callbacks: {
       
        async redirect({ url, baseUrl }) {
            if (url.startsWith("/")) return `${baseUrl}${url}`
            else if (new URL(url).origin === baseUrl) return url
            return baseUrl
        }
    },
    adapter: PrismaAdapter(prisma) as Adapter
} satisfies NextAuthOptions;

export default NextAuth(authConfig); 




