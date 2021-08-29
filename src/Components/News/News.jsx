import { CreatedPosts } from "../CreatedPosts/CreatedPosts";
import { SectionHeader } from "../SectionHeader/SectionHeader";
import { MakePostContainer } from "../MakePost/MakePostContainer";

export function News(props) {
    return (
        <main className={props.className}>
            <SectionHeader>Новости</SectionHeader>
            <MakePostContainer
                placeholder="Чем вы хотите поделиться сегодня"
                buttonMessage="Опубликовать"
                id={props.id}
                content={props.posts.newPostContent}
            />

            <CreatedPosts posts={props.posts.list} />
        </main>
    );
}
