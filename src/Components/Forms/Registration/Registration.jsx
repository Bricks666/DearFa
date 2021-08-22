import { SectionHeader } from "../../SectionHeader/SectionHeader";
import { Button } from "../../Button/Button";
import { RenderFields } from "../RenderFields";

import RegistrationStyle from "./Registration.module.css";

export function Registration(props) {
    return (
        <main className={`${props.className ?? ""} ${RegistrationStyle.main}`}>
            <SectionHeader className={RegistrationStyle.header}>
                Регистрация
            </SectionHeader>
            <form className={RegistrationStyle.form}>
                {RenderFields(
                    props.fields,
                    props.enterWords,
                    props.valueFields
                )}
                <Button className={RegistrationStyle.button} type="submit">
                    Зарегистрироваться
                </Button>
            </form>
        </main>
    );
}