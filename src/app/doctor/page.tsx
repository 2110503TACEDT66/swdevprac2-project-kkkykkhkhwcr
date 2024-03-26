import getMe from "@/libs/getMe";
import { options } from "../api/auth/[...nextauth]/option";
import getDentists from "@/libs/viewAvaliableDentists";
import { getServerSession } from "next-auth";
import Link from "next/link";
interface Dentist {
    _id : string ;
    name: string;
    experience: string;
    expertise: string[];
}

export default async function () {
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
    const dentistsData = await getDentists(session.user.token);
    const user = await getMe(session.user.token) ;
    // Function to render expertise array into divs
    const renderExpertise = (expertise: string[]) => {
        return expertise.map((exp, index) => (
            <div key={index}>{exp}</div>
        ));
    };

    return (
        <div>
            <div className="text-black text-xl font-semibold font-serif flex justify-center mt-10">
                List of Dentists who joined us
            </div>
            <div className = "flex flex-row items-center gap-6"
                    style={{margin: "20px", display:"flex",flexDirection: "row", alignContent:"space-around",justifyContent: "space-around",flexWrap: "wrap"}}>
                {dentistsData.data.map((dentist: Dentist, index: number) => (
                    <div className = "h-auto w-1/5 flex flex-col border-solid border-black border-1 m-2 p-2 rounded-lg shadow-lg bg-white shadow-lg bg-white hover:bg-neutral-200 hover:shadow-2xl hover:scale-105" key={index}>
                        <div className="font-semibold font-serif flex justify-center">
                            Dentist {index+1}
                        </div>
                        <div><strong>Name:</strong> {dentist.name}</div>
                        <div><strong>Experience:</strong> {dentist.experience} years</div>
                        <div>
                            <strong>Expertise:</strong>
                            {renderExpertise(dentist.expertise)}
                        </div>
                        <div className="font-serif flex justify-center">
                            <Link href = {`doctor/${dentist._id}`}>See more</Link>
                        </div>
                        <div className="font-serif flex justify-center">
                        {
                            user.data.role === "admin" ? <Link className='z-30 text-sm text-white px-2 py-1 bg-sky-500 rounded-2xl m-1' href = {`/update/${dentist._id}`}>
                                Update Doctor
                                </Link>
                            : null
                        }
                        {
                            user.data.role === "admin" ? <Link className= 'z-30 text-sm text-white px-2 py-1 bg-red-600 rounded-2xl m-1' href = {`/delete/${dentist._id}`}>
                                Delete Doctor
                                </Link>
                            : null
                        }
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
