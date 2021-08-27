import { SectionHeader } from "../../SectionHeader/SectionHeader";
import { Button } from "../../Button/Button";
import { RenderFields } from "../RenderFields";

import RegistrationStyle from "./Registration.module.css";
import { inputRegActionCreator } from "../../../Redux/ActionCreators/inputRegActionCreator";

export function Registration(props) {
    return (
        <main className={`${props.className ?? ""} ${RegistrationStyle.main}`}>
            <SectionHeader className={RegistrationStyle.header}>
                Регистрация
            </SectionHeader>
            <form className={RegistrationStyle.form}>
                {RenderFields(
                    props.fields,
                    props.dispatch,
                    inputRegActionCreator
                )}
                <Button className={RegistrationStyle.button} type="submit">
                    Зарегистрироваться
                </Button>
            </form>
        </main>
    );
}
