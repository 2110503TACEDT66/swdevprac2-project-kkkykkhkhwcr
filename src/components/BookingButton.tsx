"use client"
import { options } from "@/app/api/auth/[...nextauth]/option";
import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import React , {RefObject , useRef} from "react" ;
import createBooking from "@/libs/createBooking";
import { useRouter } from "next/navigation";
export default function BookingButton ({dentistNameRef , dateTimeRef} : {dentistNameRef : RefObject<HTMLInputElement> , dateTimeRef : RefObject<HTMLInputElement>}) {
    const {data:session} = useSession();
    const router = useRouter() ;
    async function submit () {
        // console.log("fdsjiofjisdofiosjdi")
        // console.log("session",session)
        if (!session || !session.user.token) {
            return ;
        }
        if (!dentistNameRef.current) {
            return ;
        }
        const dentistName = dentistNameRef.current.value ;
        const dateTime = dateTimeRef.current!.value ;
        const date = new Date(dateTime) ;
        const BookingForm = {
            date : date ,
            dentistName : dentistName
        }
        const booked = await createBooking(session.user.token , BookingForm)
        console.log(booked)
        if (booked.success) {
            alert("booking successfully") ;
        }
        router.push("/mybooking") ;
        router.refresh() ;
    }


    return (
        <button name = "Book Dentist" className = "my-5 block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 shadow-sm text-white"
        onClick = {submit}>
            Book Dentist
        </button>
    )
}