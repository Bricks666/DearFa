import { inputLoginActionCreator } from "../../../Redux/ActionCreators/inputLoginActionCreator";
import { SectionHeader } from "../../SectionHeader/SectionHeader";
import { RenderFields } from "../RenderFields";

import LoginStyle from "./Login.module.css";

export function Login(props) {
    return (
        <main className={`${props.className} ${LoginStyle.main}`}>
            <SectionHeader className={LoginStyle.header}>Вход</SectionHeader>
            <form className={LoginStyle.form}>
                {RenderFields(
                    props.fields,
                    inputLoginActionCreator,
                    LoginStyle.field
                )}
            </form>
        </main>
    );
}
