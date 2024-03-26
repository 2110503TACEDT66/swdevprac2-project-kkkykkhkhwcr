export default async function (email : string , password : string) {
    const response = await fetch ("http://localhost:3000/login" , {
        method : "POST" ,
        body : JSON.stringify({
            email : email ,
            password : password
        }),
        headers : {
            "Content-Type" : "application/json"
        }
    })
    if (!response.ok) {
        throw new Error("Failed to fetch data") ;
    }
    let result = await response.json() ;
    return result ;
}