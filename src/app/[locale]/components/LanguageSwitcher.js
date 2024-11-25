'use client'
import {routing} from '@/i18n/routing'
import { useLocale,useTranslations } from "use-intl";
import LanguageSwitcherSelect from './LanguageSwitcherSelect';

export default function LanguageSwitcher (params){
    const t = useTranslations("LocaleSwitcher");
    const locale = useLocale();
    

    return(
        <LanguageSwitcherSelect defaultValue = {locale} label={t('label')} >
            {routing.locales.map((val)=>{
                
               return <option key={val} value={val}>
                    {t("locale",{locale:val})}
                    
                </option>
            })}
        </LanguageSwitcherSelect>
    )
}