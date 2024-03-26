export default async function updateByAdmin (token:string , bookId : string , 
    {date , dentistName} : {date:Date , dentistName : string}
    ) {
    const response = await fetch(`https://presentation-day-1-kkkykkhkhwcr.vercel.app/booked/${bookId}` , {
        method : "PUT",
        headers : {
            "authorization" : `Bearer ${token}`,
            "Content-Type" : "application/json"
        },
        body : JSON.stringify({
            date : date,
            dentistName : dentistName
        })
    }) 
    if (!response.ok) {
        throw new Error ("Failed to fetch data") ;
    }

    let result = await response.json() ;
    return result ;
}
