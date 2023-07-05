import React, { useContext } from 'react';
import { AppContext } from '../App';

const List = ({title, idx}) => {
  const { like, setLike } = useContext(AppContext)
  const fnLikeHandler = ()=>{
    let likeCopy = [...like]
    likeCopy[idx]++
    setLike(likeCopy)
  }
  return (
    <>
      <div className='list'>
        <h4>{title}</h4>
        <p>7월 5일 발행 <span onClick={fnLikeHandler}>👍</span> {like[idx]}</p>
      </div>
    </>
  );
};

export default List;