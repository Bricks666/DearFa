import { CreatedPosts } from "../CreatedPosts/CreatedPosts";
import { SectionHeader } from "../SectionHeader/SectionHeader";
import { MakePostContainer } from "../MakePost/MakePostContainer";
import { MyContext } from "../../Context";

export function News(props) {
    return (
        <main className={props.className}>
            <SectionHeader>Новости</SectionHeader>
            <MyContext.Consumer>
                {(value) => {
                    return (
                        <MakePostContainer
                            placeholder="Чем вы хотите поделиться сегодня"
                            buttonMessage="Опубликовать"
                            id={props.id}
                            content={props.posts.newPostContent}
                            dispatch={value.dispatch}
                        />
                    );
                }}
            </MyContext.Consumer>
            <CreatedPosts posts={props.posts.list} />
        </main>
    );
}
