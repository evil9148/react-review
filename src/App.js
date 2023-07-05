/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { createContext, useState } from 'react';
import List from './components/List';
import Modal from './components/Modal';
export const AppContext = createContext()
function App() {
  let [title, setTitle] = useState(['강남 우동맛집', '강서 라면맛집', '강북 짜장맛집'])
  let [like, setLike] = useState([0,0,0])
  let [modal, setModal] = useState(false)



  let [a, b] = [1, 2] //destructuring 변수 생성 함수나 객체에서 자주 사용하는 값을 변수 선언하는 방법

  const titleChange = () => {
    let copy = [...title]
    copy[0] = '남자코드보기'
    setTitle(copy)
  }
  const titleSort = () => {
    let copy = [...title]
    setTitle(copy.sort())
  }

  return (
    <AppContext.Provider value={{
      title, setTitle, like, setLike, modal, setModal
    }}>
      <div className="App">
        <div className='black-nav'>
          <h4>블로그임</h4>
        </div>
        {title.map((c,idx)=><List idx={idx} title ={c} />)}
        <button onClick={titleChange}>제목변경</button>
        <button onClick={titleSort}>가나다순</button>
        {modal && <Modal />}
      </div>
    </AppContext.Provider>
  );
}






export default App;
