import Image from 'next/image'
import InteractiveCard from "./InteractiveCard"

export default function Card ({topic,description,imgSrc}:{topic:string,description:string, imgSrc:string}){
    return(
        <InteractiveCard contentTopic = {topic} contentDes = {description}>
            <div className="w-full h-[45%] relative rounded-t-lg">
                <Image src ={imgSrc}
                    alt = 'Hospital Picture'
                    fill = {true}
                    objectFit='cover'
                    className='object-cover rounded-t-lg'
                />
            </div>
            <div className="p-[10px] relative items-center justify-center text-black">
                <div className="h-[10%] text-black text-xl font-semibold font-serif">{topic}</div>
                <div className="h-[45%] text-black text-sm font-serif">{description}</div>
            </div>
        </InteractiveCard>
    )
}