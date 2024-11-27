import NextAuth from "next-auth"
import Google from "next-auth/providers/google"

export const { handlers, signIn, signOut, auth } = NextAuth({
    secret: process.env.AUTH_SECRET as string,
    providers: [
        Google({
            clientId: process.env.AUTH_GOOGLE_ID as string,
            clientSecret: process.env.AUTH_GOOGLE_SECRET as string,
        }),
    ],
    callbacks: {
        async redirect({ url, baseUrl }) {
            // Asegúrate de que el redirect vuelva a la URL base
            return url.startsWith(baseUrl) ? url : baseUrl;
        },
    },
    pages: {
        signIn: "/login",
    }

})