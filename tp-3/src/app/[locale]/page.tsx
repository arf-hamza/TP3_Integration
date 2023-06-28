import DeveloperCards from "@/components/organisms/developer-cards"
import WorkDescription from "@/components/organisms/work-description"
import { useTranslations } from "next-intl";

export default async function Home(){
    const t = useTranslations();

    return(
        <>
            <h1>{ t('home.title') }</h1>
            <DeveloperCards />
            <WorkDescription />
        </>
    )
}
