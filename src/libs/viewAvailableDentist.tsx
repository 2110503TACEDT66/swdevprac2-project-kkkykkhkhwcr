export default async function getDentist(token : string , dentistId : string) {
    const response = await fetch (`http://localhost:3000/dentists/${dentistId}` , {
        method : "GET",
        headers : {
            "authorization" : `Bearer ${token}`
        }
    }) 
    // console.log( await response.json()) ;
    if (!response.ok) {
        throw new Error ("Failed to fetch data") ;
    }
    let result = await response.json() ;
    return result ;
}