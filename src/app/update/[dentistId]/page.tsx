"use client"
import UpdateDentistForm from "@/components/UpdateDentistForm";

export default function page ({params} : {params : {dentistId : string}}) {
    
    return (
        <UpdateDentistForm params = {params}/>
    )
}