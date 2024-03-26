import Image from "next/image"
import MenuItem from "./MenuItem"
import { getServerSession } from "next-auth"
import { options } from "@/app/api/auth/[...nextauth]/option"
import getMe from "@/libs/getMe"
import Link from "next/link"
import { Menu } from "@nextui-org/react"

export default async function () {
    const session = await getServerSession(options)
    let user ;
    if(!session||!session.user.token) {
        // return ;
    }
    else {
        user = await getMe(session.user.token)
    }

    // console.log(user) ;
    return (
        <div className = "h-[70px] bg-sky-600 text-white fixed top-0 right-0 left-0 z-30 flex flex-row justify-between">
            <div>
                <Image className = "h-full w-fit"
                src = "/img/logo.png" 
                width = {0} 
                height = {0} 
                alt = "logo" 
                sizes = "100vh"/>
                <div className='my-1 mx-1'>
                {session && user.data.role === 'admin' ? (
                    <Link className='z-30 font-semibold text-white px-2 py-1 text-xl bg-sky-500 rounded-lg' href = "/">
                        Welcome, Admin {user.data.name}
                    </Link>
                ) : session && user.data.role === 'user' ? (
                    <Link className='z-30 font-semibold text-white px-2 py-1 text-xl bg-sky-500 rounded-lg' href = "/">
                        Welcome, {user.data.name}
                    </Link>
                ) : null}
                </div>
            </div>
            <div className = "flex items-center gap-8">
                {session && user.data.role === 'admin' ? (
                    <MenuItem link = "/mybooking" label = "All-Booking"></MenuItem>
                ) : session && user.data.role === 'user' ? (
                    <MenuItem link = "/mybooking" label = "My-Booking"></MenuItem>
                ) : null}

                {
                    session && user.data.role !== "admin" && <MenuItem link="/booking" label="Book-Date"></MenuItem>
                }

                <MenuItem link = "/api/auth/register" label = "Register"/>

                {
                    session && user.data.role === "admin" ? <MenuItem link = "/createDoctor" label = "Create-Dentist"/> :
                    null
                }
                
                <MenuItem link = "/doctor" label = "Available-Doctor"></MenuItem>
                {
                    session? <MenuItem link = "/api/auth/signout" label = "Sign-Out" />
                    : <MenuItem link = "/api/auth/signin" label = "Sign-In" />
                }
            </div>
        </div>
    )
}