"use client"
import deleteByAdmin from "@/libs/deleteByAdmin"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation";


interface DeleteByAdminFormProps {
    params: {
        bookId: string;
    };
}

export default function DeleteByAdminButton ({ params }: DeleteByAdminFormProps) {
    const {data:session} = useSession();
    const router = useRouter() ;
    async function submit () {
        if (!session || !session.user.token) {
            return ;
        }
        const deleted = await deleteByAdmin(session.user.token , params.bookId)
        console.log(deleted) ;
        if (deleted.success) {
            alert("delete successfully") ;
        }
        else {
            alert("failed to delete") ;
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