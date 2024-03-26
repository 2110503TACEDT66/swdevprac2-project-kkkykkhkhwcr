import RegisterForm from "@/components/RegisterForm"
import styles from "./page.module.css"

export default function page () {

    return (
        // <div className = "w-[400px] h-[600px] border-solid border-black">
        //     <MyInput label = "Name"/>
        //     <MyInput label = "Telephone"/>
        //     <MyInput label = "Email"/>
        //     <MyInput label = "Password"/>
        //     <MyInput label = ""/>
        // </div>
        <div className = {`${styles.container} w-fit flex justify-center items-center h-full border-solid border-2 border-yellow-600 p-10 bg-green`}>
            <RegisterForm/>
        </div>
    )
}