export default async function deleteByAdmin (token:string , bookId : string) {
    const response = await fetch(`http://localhost:3000/booked/${bookId}` , {
        method : "DELETE",
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
