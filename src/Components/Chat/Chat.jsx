import React from "react";
import { Messages } from "../Messages/Messages";
import { Link } from "react-router-dom";
import { MakeMessageContainer } from "../MakeMessage/MakeMessageContainer";

import ChatStyle from "./Chat.module.css";

function Chat(props) {
    return (
        <section className={`${props.className} ${ChatStyle.chat}`}>
            <Link className={ChatStyle.cross} to="/dialogs" />
            <Messages className={ChatStyle.messages} chat={props.chat} />
            <MakeMessageContainer
                className={ChatStyle.makeMessage}
                placeholder="Ваше сообщение"
                buttonMessage="Отправить"
                content={props.chat.newMessageContent}
            />
        </section>
    );
}

export { Chat };
