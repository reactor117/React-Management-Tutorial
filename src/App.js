import React, { Component } from 'react';
import logo from './logo.svg';
import Customer from './Components/Customer'
import './App.css';

// 동빈나 - 강의소소
// class App extends Component { 
//   render() {
//     return (
//       <customer/>
//     );
//   }
// }

// function App() {
//   return (
//       <div className="gray-background">
//         <img src={logo} lat="loge"/>      
//         <h2>develop management</h2>    
//       </div>  
//   );
// }

// node.js : 12.8.1

// customer 변수선언 (Customer함수와는 다름, 대소문자구분됨)
// const customer = {
//   'id'        : 1
//   , 'image'   : 'https://placeimg.com/64/64/any'
//   , 'name'    : '홍길동'
//   , 'birthday': '961222'
//   , 'gender'  : '남자'
//   , 'job'     : '대학생'
// }




// function App() {
//   return (
//     //<Customer/>
//     <Customer
//       id={customer.id}
//       image={customer.image}
//       name={customer.name}
//       birthday={customer.birthday}
//       gender={customer.gender}
//       job={customer.job}
//     />
//   );
// }


// function App() {
//   return (
//     //<Customer/>
//   <div>
//     <Customer
//       id={customers[0].id}
//       image={customers[0].image}
//       name={customers[0].name}
//       birthday={customers[0].birthday}
//       gender={customers[0].gender}
//       job={customers[0].job}
//     />
//     <Customer
//       id={customers[1].id}
//       image={customers[1].image}
//       name={customers[1].name}
//       birthday={customers[1].birthday}
//       gender={customers[1].gender}
//       job={customers[1].job}
//     />
//     <Customer
//       id={customers[2].id}
//       image={customers[2].image}
//       name={customers[2].name}
//       birthday={customers[2].birthday}
//       gender={customers[2].gender}
//       job={customers[2].job}
//     />
//   </div>
//   );
// }


function App() {
    return (
      //<Customer/
    <div>
      {
        customers.map(c => {    // map 함수 (=파이선, c#과도 문법 동일사용됨)
          return (
            <Customer
              key={c.id}  // map 함수는 "key" 필드가 필요함
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
            />
          )
        })
      }
    </div>
    );
  }


const customers = [
{
  'id'        : 1
  , 'image'   : 'https://placeimg.com/64/64/1'
  , 'name'    : '홍길동'
  , 'birthday': '961222'
  , 'gender'  : '남자'
  , 'job'     : '대학생'
}
, {
  'id'        : 2
  , 'image'   : 'https://placeimg.com/64/64/2'
  , 'name'    : '임꺽정'
  , 'birthday': '960305'
  , 'gender'  : '남자'
  , 'job'     : '프로그래머'
}
, {
  'id'        : 3
  , 'image'   : 'https://placeimg.com/64/64/3'
  , 'name'    : '장희빈'
  , 'birthday': '961205'
  , 'gender'  : '여자'
  , 'job'     : '직장인'
}
]



export default App;
