import React from "react";
import { Messages } from "../Messages/Messages";
import { Link } from "react-router-dom";

import ChatStyle from "./Chat.module.css";
import { MakeMessageContainer } from "../MakeMessage/MakeMessageContainer";
import { MyContext } from "../../Context";

function Chat(props) {
    return (
        <section className={`${props.className} ${ChatStyle.chat}`}>
            <Link className={ChatStyle.cross} to="/dialogs" />
            <Messages className={ChatStyle.messages} chat={props.chat} />

            <MyContext.Consumer>
                {(value) => {
                    return (
                        <MakeMessageContainer
                            className={ChatStyle.makeMessage}
                            placeholder="Ваше сообщение"
                            buttonMessage="Отправить"
                            content={props.chat.newMessageContent}
                            dispatch={value.dispatch}
                        />
                    );
                }}
            </MyContext.Consumer>
        </section>
    );
}

export { Chat };
