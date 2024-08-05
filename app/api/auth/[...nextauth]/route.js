import NextAuth from 'next-auth'
// import AppleProvider from 'next-auth/providers/apple'
// import FacebookProvider from 'next-auth/providers/facebook'
import GoogleProvider from 'next-auth/providers/google'
// import EmailProvider from 'next-auth/providers/email'
import GitHubProvider from "next-auth/providers/github";
// require('dotenv').config();


export const authoptions = NextAuth({
  providers: [
    GoogleProvider({
      clientId:`${process.env.GOOGLE_CLIENT_ID}`,
          clientSecret:`${process.env.GOOGLE_CLIENT_SECRET}`
        })
        
        // OAuth authentication providers...
        //   Apple
      ]
    })

  export {authoptions as GET, authoptions as POST }