"use client";

import DeveloperCards from "@/components/organisms/developer-cards"
import Style from "./page.module.css"
import WorkDescription from "@/components/organisms/work-description"
import MyMenu from "@/components/molecules/my-menu/my-menu"

import { useTranslation } from 'react-i18next';
import "../../i18n"


export default function Home(){
    const { t } = useTranslation();
    return(
        <main className={Style.main_container}>
            <MyMenu />
            <h1>{t('home.title')}</h1>
            <DeveloperCards />
            <WorkDescription />
        </main>
    );
};