import React, { useContext } from 'react';
import { AppContext } from '../App';

const List = ({idx}) => {
  const { like, setLike, title, modal, setModal } = useContext(AppContext)
  const fnLikeHandler = ()=>{
    let likeCopy = [...like]
    likeCopy[idx]++
    setLike(likeCopy)
  }

  const fnSlideHandler = (e)=>{
    console.log(e.target)
  }

  return (
    <>
      <div className='list'>
        <h4 onClick={fnSlideHandler}>{title[idx]}</h4>
        <p>7월 5일 발행 <span onClick={fnLikeHandler}>👍</span> {like[idx]}</p>
      </div>
    </>
  );
};

export default List;