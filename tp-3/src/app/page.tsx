import DeveloperCards from "@/components/organisms/developer-cards"
import Style from "./page.module.css"
import WorkDescription from "@/components/organisms/work-description"


export default async function Home(){
    return(
        <main className={Style.main_container}>
            <h1>TP 3 - Intégration</h1>
            <DeveloperCards />
            <WorkDescription />
        </main>
    )
}