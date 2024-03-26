export default async function updateDentist (token : string , dentist_id : string ,
    {dentistName , experience , expertise} : 
    {dentistName : string,
    experience : string,
    expertise : string[]
    }) {
        const response = await fetch(`https://presentation-day-1-kkkykkhkhwcr.vercel.app/dentists/${dentist_id}` , {
            method : "PUT",
            headers : {
                "authorization" : `Bearer ${token}` ,
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({
                name : dentistName , 
                experience : experience ,
                expertise : expertise
            })
        }) ;
        if (!response.ok) {
            throw new Error ("Failed to fetch data") ;
        }
        const result = await response.json() ;
        return result ;
}