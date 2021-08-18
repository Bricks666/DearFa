import React from "react";
import { Switch, Route } from "react-router";
import { DialogList } from "../DialogList/DialogList";
import { SectionHeader } from "../SectionHeader/SectionHeader";
import { RenderChat } from "./RenderChat";

import DialogsStyle from "./Dialogs.module.css";

function Dialogs(props) {
    return (
        <main className={`${props.className ?? ""} ${DialogsStyle.dialogs}`}>
            <SectionHeader className={DialogsStyle.heading}>
                Диалоги
            </SectionHeader>
            <DialogList
                className={DialogsStyle.dialogList}
                data={props.chats}
            />
            <Switch>{RenderChat(props.chats)}</Switch>
        </main>
    );
}

export { Dialogs };
