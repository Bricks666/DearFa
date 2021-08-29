import { Chat } from "../Chat/Chat";
import { Route } from "react-router-dom";

export const RenderChat = (chats, dispatch) => {
  return chats.map((chat) => {
    return (
      <Route path={`/dialogs/${chat.id}`}>
        <Chat chat={chat} />
      </Route>
    );
  });
};
