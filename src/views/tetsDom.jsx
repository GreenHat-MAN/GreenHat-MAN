import React, {Component} from 'react';

class TestDom extends Component {
    render() {
        return (
            <div>
                <h1>我是第一个react组件</h1>
                <hr/>
                <OneTest></OneTest>
            </div>
        );
    }
}

const OneTest = ()=>{
    return(
        <div>
            <h1>我是第一个测试用的子组件</h1>
        </div>
    )
}

export default TestDom;
