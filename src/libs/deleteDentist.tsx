export default async function deleteDentist (token : string , dentistId : string) {
    const response = await fetch (`https://presentation-day-1-kkkykkhkhwcr.vercel.app/dentists/${dentistId}` , {
        method : "DELETE",
        headers : {
            "authorization" : `Bearer ${token}`
        }
    })
    if (!response.ok) {
        throw new Error ("Failed to fetch data") ;
    }
    const result = await response.json() ;
    return result ;
}