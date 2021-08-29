import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Header } from "../Header/Header";
import { Navigation } from "../Navigation/Navigation";
import { FavoritFriends } from "../FavoritFriends/FavoritFriends";
import { Main } from "../Main/Main";

import { Provider } from "../../Context";

import PageStyle from "./Page.module.css";

function Page(props) {
    return (
        <Provider store={props.store}>
            <Router>
                <div className={PageStyle.page}>
                    <h1 className="visibility-hidden">Dear.Fa</h1>
                    <Header className={PageStyle.header} />
                    <Navigation
                        className={PageStyle.nav}
                        navigationItems={props.store.getState().navigation}
                    />
                    <Main
                        className={PageStyle.main}
                        state={props.store.getState()}
                    />
                    <Switch>
                        <Route path={["/login", "/registration"]} />
                        <Route path="">
                            <FavoritFriends
                                className={PageStyle.lastFriends}
                                friends={props.store.getState().friends}
                            />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </Provider>
    );
}

export { Page };
