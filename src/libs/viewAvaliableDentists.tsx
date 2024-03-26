export default async function getDentists(token : string) {
    const response = await fetch ("https://presentation-day-1-kkkykkhkhwcr.vercel.app/dentists" , {
        method : "GET",
        headers : {
            "authorization" : `Bearer ${token}`
        }
    })
    if (!response.ok) {
        throw new Error ("Failed to fetch data") ;
    }
    let result = await response.json() ;
    return result ;
}