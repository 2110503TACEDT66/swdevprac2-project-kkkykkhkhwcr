export default async function createDentist (token : string , {dentistName , experience , expertise} : 
    {dentistName : string,
    experience : string,
    expertise : string[]
    }) {
        const response = await fetch("https://presentation-day-1-kkkykkhkhwcr.vercel.app/dentists/" ,{
            method : "POST" ,
            body : JSON.stringify({
                name : dentistName,
                experience : experience,
                expertise : expertise
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