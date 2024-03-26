export default async function createBooking (token : string , 
    {date , dentistName} : {date:Date , dentistName : string}) {
        const response = await fetch("http://localhost:3000/booked/" ,{
            method : "POST" ,
            body : JSON.stringify({
                date : date,
                dentistName : dentistName
            }),
            headers : {
                "authorization" : `Bearer ${token}`,
                "Content-Type" : "application/json"
            }
        })

        if (!response.ok) {
            throw new Error("Failed to fetch data") ;
        }
        let result = response.json() ;
        return result ;
}