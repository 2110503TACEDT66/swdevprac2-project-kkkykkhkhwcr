import getDentist from "@/libs/viewAvailableDentist"
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/option"
import updateDentist from "@/libs/updateDentist";
export default async function page ({params} : {params : {dentistId : string}}) {
    const session = await getServerSession(options) ;
    if (!session || !session.user.token) {
        return (
            <div>
                <div className="text-red text-xl font-semibold font-serif justify-center flex items-center mt-10">
                    <div>You are not logged in yet. Please login to view information.</div>
                </div>
            </div>
            )
    }
    console.log(params.dentistId) ;
    const dentistData = await getDentist(session.user.token , params.dentistId) ;
    console.log(dentistData) ;
    // if (!session || !session.user.token) {

    // }
    // const dentistData = getDentist( dentistId) ;
    const renderExpertise = (expertise: string[]) => {
        return expertise.map((exp, index) => (
            <div key={index}>{exp}</div>
        ));
    };
    return (
        <div>
            <div className="text-black text-xl font-semibold font-serif flex justify-center mt-10">
                <strong>Doctor:</strong> {dentistData.data.name}
            </div>
            <div className="flex flex-row justify-center items-center">
            <div className = "h-auto w-1/4 flex flex-col border-solid border-black border-1 m-2 p-2 rounded-lg shadow-lg bg-white shadow-lg bg-white hover:bg-neutral-200 hover:shadow-2xl hover:scale-105">
                    <div><strong>Doctor:</strong> {dentistData.data.name}</div>
                    <div><strong>Work for :</strong> {dentistData.data.experience} years</div>
                    <div>
                        <strong>Expert at :</strong>
                        {renderExpertise(dentistData.data.expertise)}
                    </div>
                </div>
            </div>
        </div>
        
    )
}