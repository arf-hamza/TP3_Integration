import DeveloperCards from "@/components/organisms/developer-cards"
import Style from "./page.module.css"
import WorkDescription from "@/components/organisms/work-description"
import MyMenu from "@/components/molecules/my-menu/my-menu"


export default async function Home(){
    return(
        <main className={Style.main_container}>
            <MyMenu />
            <h1>TP3 - Intégration</h1>
            <DeveloperCards />
            <WorkDescription />
        </main>
    );
};