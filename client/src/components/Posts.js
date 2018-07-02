import React from 'react';
import Post from './Post';
import TopFive from './Top-5';
import Styled from 'styled-components';

const Container = Styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const PostBox = Styled.div`
    width: 60%;
`;

const Head = Styled.h2`
    width: 55%;
    font-family: 'Times', serif;
    align-self: flex-start;
`

const Posts = props => {
    return (
        <div>
            <div>
        <TopFive posts={props.posts}/>
        </div>
        <Container>
        <Head>Lambda Times</Head>
        {props.posts.map(post=> {
            return <PostBox><Post post={post} /></PostBox>
        })}
        
        </Container>
        </div>
    )
}
export default Posts;