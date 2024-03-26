import styles from './page.module.css'
import Banner from '../components/Banner'
import Card from '@/components/Card'
export default function Home() {
  return (
  <div>
    <Banner/>
    <div style={{margin: "20px", display:"flex",flexDirection: "row",
        alignContent:"space-around",justifyContent: "space-around",flexWrap: "wrap"}}>
      <Card topic = 'Who are we?' description = 'We are Ministry of Promotion of Learning and Experience of Jura Kites. We are a small community that wants to promote learning of Jura. This time we are here to promote your oral health.' imgSrc='/img/card1.png'/>
      <Card topic = 'Why should we help you take care of your mouth?' description = 'Because we believe that maintaining good oral health is essential for overall well-being and quality of life and learning.' imgSrc='/img/card2.png'/>
      <Card topic = 'The point where we stand out.' description = 'We have dentists with more than 6 years of experience, and they are passionate about taking care of your mouth and making you want to learn and expand your knowledge and experience.' imgSrc='/img/card3.jpg'/>
      <Card topic = 'Very impressive service.' description = "We don't just take care of your mouth, we want to give advice on care and how to increase your knowledge and experience effectively." imgSrc='/img/card4.jpg'/>
    </div>
  </div>
  )
}

