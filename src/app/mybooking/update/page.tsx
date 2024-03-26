import UpdateForm from "@/components/UpdateForm";

export default function page() {
    return (
        <div className = "flex flex-row items-center" style={{margin: "20px", display:"flex",flexDirection: "row", alignContent:"space-around",justifyContent: "space-around",flexWrap: "wrap"}}>
            <div className = "h-auto w-1/3 flex flex-col border-solid border-black border-1 m-2 p-4 rounded-lg shadow-lg bg-white shadow-lg bg-white">
                <div className="text-black text-xl font-semibold font-serif flex justify-center my-2">
                Edit your booking
                    </div>
                <UpdateForm/>
            </div>
        </div>
    )
}