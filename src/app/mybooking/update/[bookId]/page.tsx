import { options } from "@/app/api/auth/[...nextauth]/option";
import { getServerSession } from "next-auth";
import UpdateForm from "@/components/UpdateForm";
import updateByAdmin from "@/libs/updateByAdmin";
import UpdateByAdminForm from "@/components/UpdateByAdminForm";

export default async function page ({params} : {params : {bookId : string}}) {
    const session = await getServerSession(options) ;
    if (!session || !session.user.token) {
        return ;
    }

    return (
        <div className = "flex flex-row items-center" style={{margin: "20px", display:"flex",flexDirection: "row", alignContent:"space-around",justifyContent: "space-around",flexWrap: "wrap"}}>
            <div className = "h-auto w-1/3 flex flex-col border-solid border-black border-1 m-2 p-4 rounded-lg shadow-lg bg-white shadow-lg bg-white">
                <div className="text-black text-xl font-semibold font-serif flex justify-center my-2">
                Edit this booking
                    </div>
                <UpdateByAdminForm params={{ bookId: params.bookId }}/>
            </div>
        </div>
    )
}