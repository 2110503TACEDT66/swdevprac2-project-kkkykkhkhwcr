export default async function updateBooking (token : string , 
    {date , dentistName} : {date:Date , dentistName : string}) {
        const response = await fetch ("http://localhost:3000/booked/" , {
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
            throw new Error("Failed to fetch data") ;
        }
        let result = await response.json() ;
        return result ;
}