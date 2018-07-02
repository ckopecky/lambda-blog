import React from 'react';
import Styled from 'styled-components';

const TopFiveContainer = Styled.div`
    display: flex;
    justify-content: space-around;
    margin: 20px;
`;

const BlogBox = Styled.div`
    width: 150px;
    height: 150px
    border: 1px solid lightgray;
`

class TopFive extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            first: '',
            second: '',
            third: '',
            fourth: '',
            fifth: ''
        }
    }

    componentDidMount(props) {
        //filter function to set state to top five posts
    }

    render() {
        return (
            <TopFiveContainer>
            <BlogBox>
            <h4>1st ranked{this.state.first}</h4>
            </BlogBox>
            <BlogBox>
            <h4>2nd ranked{this.state.second}</h4>
            </BlogBox>
            <BlogBox>
            <h4>3rd ranked{this.state.third}</h4>
            </BlogBox>
            <BlogBox>
            <h4>4th ranked{this.state.fourth}</h4>
            </BlogBox>
            <BlogBox>
            <h4>5th ranked{this.state.fifth}</h4>
            </BlogBox>
            </TopFiveContainer>
        )
    }
}

export default TopFive;