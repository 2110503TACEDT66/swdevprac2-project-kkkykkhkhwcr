import { getServerSession } from "next-auth"
import { options } from "../api/auth/[...nextauth]/option"
import viewMyBooking from "@/libs/viewMyBooking"
import { useRouter } from 'next/router';
import UpdateForm from "@/components/UpdateForm";
import Link from "next/link";
import getMe from "@/libs/getMe";
// import { formatDate } from "@/libs/formatDate"
interface Booking {
    name : {
        _id : string ,
        name : string
    },
    date : string ,
    dentistName : {
        _id : string ,
        name : string 
    } ,
    createTime : string 
}

export default async function page() {
    const session = await getServerSession(options);
    if (!session || !session.user.token) {
        return (
            <div>
                <div className="text-red text-xl font-semibold font-serif justify-center flex items-center mt-10">
                    <div>You are not logged in yet. Please login to view information.</div>
                </div>
            </div>
            )
    }
    const myBooking = await viewMyBooking(session.user.token);
    const user = await getMe(session.user.token) ;
    if (!myBooking || !myBooking.data || myBooking.data.length === 0) {
        return <div className="text-red text-xl font-semibold font-serif justify-center flex items-center mt-10">
                No booking found
            </div>;
    }
    console.log(myBooking) ;
    
    // console.log(typeof(myBooking.data[0].date)) ;
    return (
        <div>
            {session && user.data.role === 'admin' ? (
                    <div className="text-black text-xl font-semibold font-serif flex justify-center mt-7">
                        List of Booking
                    </div>
                ) : session && user.data.role === 'user' ? (
                    <div className="text-black text-xl font-semibold font-serif flex justify-center mt-7">
                        Your Booking
                    </div>
                ) : null}
        <div className = "flex flex-row items-center gap-6"
            style={{margin: "20px", display:"flex",flexDirection: "row", alignContent:"space-around",justifyContent: "space-around",flexWrap: "wrap"}}>
            {myBooking.data.map((booking: Booking, index: number) => (
                <div className = "h-auto w-1/3 flex flex-col border-solid border-black border-1 m-2 p-2 rounded-lg shadow-lg bg-white shadow-lg bg-white hover:bg-neutral-200 hover:shadow-2xl hover:scale-105" key={index}>
                    <div><strong>Name:</strong> {booking.name.name}</div>
                    <div><strong>Date:</strong> {booking.date}</div>
                    <div><strong>DentistName:</strong> {booking.dentistName.name}</div>
                    <div><strong>CreateTime:</strong> {booking.createTime}</div>
                    <div>
                    {
                        user.data.role !== "admin" ?
                        <Link className='z-30 text-sm text-white px-2 py-1 bg-sky-500 rounded-2xl' href = "/mybooking/update">Change Booking</Link> : null
                    }
                    {
                        user.data.role !== "admin" ?
                        <Link className='z-30 text-sm text-white px-2 py-1 bg-red-600 rounded-2xl m-1' href = "/mybooking/delete">Delete Booking</Link> : null
                    }
                    </div>
                    <div>
                        {user.data.role === "admin" ? 
                            <Link className='z-30 text-sm text-white px-2 py-1 bg-sky-500 rounded-2xl' href={`/mybooking/update/${myBooking.data[0]._id}`}>Admin Update</Link> : null
                        }
                        {user.data.role === "admin" ? 
                            <Link className='z-30 text-sm text-white px-2 py-1 bg-red-600 rounded-2xl m-1' href={`/mybooking/delete/${myBooking.data[0]._id}`}>Admin Delete</Link> : null
                        }
                    </div>
                </div>
            ))}
        </div>
        </div>
    );
}
