"use client"
import deleteBooking from "@/libs/deleteBooking";
import deleteByAdmin from "@/libs/deleteByAdmin"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation";


export default function DeleteButton () {
    const {data:session} = useSession();
    const router = useRouter() ;
    async function submit () {
        if (!session || !session.user.token) {
            return ;
        }
        const deleted = await deleteBooking(session.user.token)
        console.log(deleted) ;
        if (deleted.success) {
            alert("delete successfully") ;
        }
        else {
            alert("failed to delete")
        }
        router.push("/mybooking") ;
        router.refresh() ;
    }

    return (
        <button
      name="Delete Dentist"
      className="my-5 block rounded-md bg-red-500 hover:bg-indigo-600 px-3 py-2 shadow-sm text-white"
      onClick={submit}
    >
        Delete This
    </button>
    )
}



// interface DeleteButtonProps {
//     onDelete: () => Promise<void>;
// }

// const DeleteButton = ({ onDelete }: DeleteButtonProps) => {
//     const handleClick = async () => {
//         await onDelete();
//     };

//     return <button onClick={handleClick}>Delete</button>;
// };

// export default DeleteButton;
