import userLogin from "@/libs/userLogin";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider  from "next-auth/providers/credentials";

export const options : NextAuthOptions = {
    providers : [
        CredentialsProvider({
            name : 'Credentials',
            credentials : {
                email : {label : "Email" , type : "text" , placeholder : "Please Enter your email"},
                password : {label : "Password" , type : "password"}
            },
            async authorize (credentials , req) {
                if (!credentials) {
                    return null ;
                }
                console.log(credentials) ;
                const res = await userLogin(credentials.email , credentials.password)
                if (res) {
                    return res ;
                }
                else {
                    return null ;
                }
            }
        })
    ],session :{strategy : "jwt"},
    callbacks : {
        async jwt({token,user}) {
            return {...token , ...user}
        },
        async session({session , token , user}) {
            session.user = token as any ;
            return session ;
        }
    }
}
