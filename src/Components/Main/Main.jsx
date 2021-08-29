import { Switch, Route } from "react-router";
import { Dialogs } from "../Dialogs/Dialogs";
import { Friends } from "../Friends/Friends";
import { News } from "../News/News";
import { NotFound } from "../NotFound/NotFound";
import { Login } from "../Forms/Login/Login";
import { Registration } from "../Forms/Registration/Registration";
import { Profile } from "../Profile/Profile";

export function Main(props) {
    return (
        <Switch>
            <Route exact path="/profile/1">
                <Profile
                    user={props.state.user}
                    className={props.className}
                    posts={props.state.posts}
                />
            </Route>
            <Route path="/dialogs">
                <Dialogs
                    className={props.className}
                    chats={props.state.chats}
                />
            </Route>
            <Route exact path="/friends">
                <Friends
                    className={props.className}
                    friends={props.state.friends}
                />
            </Route>
            <Route exact path="/news">
                <News className={props.className} posts={props.state.posts} />
            </Route>
            <Route exact path="/login">
                <Login
                    className={props.className}
                    fields={props.state.loginFields}
                />
            </Route>
            <Route exact path="/registration">
                <Registration
                    className={props.className}
                    fields={props.state.registrationFields}
                />
            </Route>
            <Route>
                <NotFound className={props.className} />
            </Route>
        </Switch>
    );
}
