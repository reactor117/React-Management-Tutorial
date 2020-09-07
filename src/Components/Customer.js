import React from 'react';  // react 라이브러리 read

class Customer extends React.Component {    // react.Component 일종의 라이브러리 이자 클래스
    render () {
        return (
            // <div>
            //     <h2>홍길동</h2>
            //     <p>961222</p>
            //     <p>남자</p>
            //     <p>대학생</p>
            // </div> 
            // <div>
            //     <h2>{this.props.name}</h2>
            //     <p>{this.props.birthday}</p>
            //     <p>{this.props.gender}</p>
            //     <p>{this.props.job}</p>
            // </div>
            <div>
                <CustomerProfile
                    id={this.props.id}
                    image={this.props.image}
                    name={this.props.name}
                />

                <Customerinfo
                    birthday={this.props.birthday}
                    gender={this.props.gender}
                    job={this.props.job}
                />          

            </div>

        )
    }
}


class CustomerProfile extends React.Component {    // react.Component 일종의 라이브러리 이자 클래스
    render () {
        return (
            <div>
                <img src={this.props.image} alt="profile"/>
                <h2>{this.props.name}({this.props.id}) </h2>
            </div>
        )
    }
}

class Customerinfo extends React.Component {    // react.Component 일종의 라이브러리 이자 클래스
    render () {
        return (
            <div>
                <p>{this.props.birthday}</p>
                <p>{this.props.gender}</p>
                <p>{this.props.job}</p>
            </div>
        )
    }
}

export default Customer;        // customer 클래스 내보내기
