import { FormData } from "@/components/RegisterForm";

export default async function postDataToDatabase(data: FormData) {
    const response = await fetch("http://localhost:3000/register", {
        method: "POST",
        body: JSON.stringify({
            name: data.name,
            tel : data.telephone,
            email: data.email,
            password: data.password,
            role: "user"
        }),
        headers: {
            "Content-Type": "application/json"
        }
    });

    if (!response.ok) {
        throw new Error("Failed to fetch data");
    }

    let result = await response.json();
    return result;
}
