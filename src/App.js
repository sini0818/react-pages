
import {useState} from 'react';
import './App.css';



function App() {

  let[글제목,글제목변경] = useState(['남자 코트 추천','강남 우동맛집','파이썬독학']);
  let [따봉,따봉변경] = useState(0,0,0);
  let [modal,setModal] = useState('unseen');
  let[title,setTitle] = useState(0);
  let[입력값, 입력값변경] = useState('');
  let current = new Date();
  let date = `${current.getFullYear()}년 ${
    current.getMonth() + 1
    }월 ${current.getDate()}일`;


  
  return (
    <div className="App">
      <div className = "black-nav">
        <h4 style={{color : 'white', fontSize : '16px'}}>ReactBlog</h4>
      </div>
      {/* <div className = "list">
        <h4>{글제목[0]} <span onClick={()=> {따봉변경(따봉+1)}}>👍</span> {따봉} </h4>
        <p>2월 27일 발행</p>
      </div>
      <div className = "list">
        <h4>{글제목[1]}</h4>
        <p>2월 27일 발행</p>
      </div>
      <div className = "list">
        <h4 onClick={() => { 
          if (modal==='unseen'){
            setModal('seen')}
            else{
              setModal('unseen');
            }}}>{글제목[2]}</h4>
        <p>2월 27일 발행</p>
      </div> */}
      
      {
        글제목.map(function(a,i){
          return(
            <div className = "list" key = {i}>
              <h4 onClick={() => { setTitle(i);
          if (modal==='unseen'){
            setModal('seen')}
            else{
              setModal('unseen');
          
            }}}>{글제목[i]}
              <span onClick={(e)=> {
                let copy = [...따봉];
                copy[i] = copy[i]+1;
                e.stopPropagation();
                따봉변경(copy);

                

                }}>👍</span> {따봉[i]}
                </h4>
              <p>{date} 발행</p>
              <button onClick={()=>{
                let copy = [...글제목];
                copy.splice(i,1);
                글제목변경(copy);
              }
              }>삭제</button>  
            </div>
          )
        })
      }
      <input onInput={(e)=>{입력값변경(e.target.value); 
      }}/><button onClick={()=>{
        if (입력값 ===""){
          alert("빈칸입니다.")
        }
        else{
          글제목변경([입력값,...글제목]);

        }
        
      }}>입력</button>
      {/* <button onClick={()=>{setTitle(0)}}>글제목0</button>
      <button onClick={()=>{setTitle(1)}}>글제목1</button>
      <button onClick={()=>{setTitle(2)}}>글제목2</button> */}

      {
        modal==='seen' ? <Modal  글제목 = {글제목} 글제목변경 = {글제목변경} title={title} date = {date}/> : null
      } 
      

{/* 
      <button onClick={()=>{
        let 어레이 = [...글제목];
        어레이.sort();
        글제목변경(어레이);

      }}>가나다순정렬</button> */}
      {/* <button onClick={()=>{
        let copy = [...글제목];
        copy[0] = '여자 코트 추천';
        글제목변경(copy);
      }}>글수정</button>
       */}

    </div>
  );
}



function Modal(props){
  return (
    <div className = "modal">
        <h4>{props.글제목[props.title]}</h4>
        <p>{props.date}</p>
        <p>상세내용</p>
        <button onClick={()=>{
          let copy = [...props.글제목];
          copy[0] = '여자 코트 추천';
          props.글제목변경(copy)}}>글수정</button>
    </div>
    
  )
}

export default App;

