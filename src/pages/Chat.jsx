import React, { useContext } from 'react'
import '../App.css'
import { dataContext, prevUser } from '../Context/UserContext';

const Chat = () => {

  let {input, setInput, showResult, setShowResult, feature, setFeature,
      prevFeature, setPrevFeature, genImgUrl, setGenImgUrl} = useContext(dataContext);

  return (
    <div className='chat-page'>
        <div className="user">
          {prevFeature === "upImg" ? <><img src={prevUser.imgUrl} alt="" />
          <span>{prevUser.prompt}</span></>: <span>{prevUser.prompt}</span>}
        </div>

        <div className="ai">
          {prevFeature === "genImg" ? 
          <>
          {!genImgUrl ? <span>Generating Image...</span>:<img src={genImgUrl} alt="" />}</>
          :!showResult ?
           <span>Loading...</span>:<span>{showResult}</span>}
        </div>
    </div>
  )
}

export default Chat