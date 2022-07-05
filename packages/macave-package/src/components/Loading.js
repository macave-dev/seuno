import React from "react"
import { styled, keyframes, connect } from "frontity"

const Loading = () => {
  return(
    <Loader>
      <Circle/>
      <Circle/>
      <Circle/>
    </Loader>
  )
}

export default Loading

const Loader = styled.div`
  height: 100px;
  width: 100px;
  border-radius: 50%;
  display: flex;
  max-width: 800px;
  margin: 0 auto;
`

const Circle = styled.div`
  background: #bc1d27;
  width: 20px;
  height: 20px;
  margin: 0 4px;
  border-radius: 50%;
  animation: animate 2s infinite linear;
  
  &::nth-of-type(1){
    animation-delay: 0.5s;
  }

  &:nth-of-type(2){
    animation-delay: 1s;
  }

  &:nth-of-type(3){
    animation-delay: 1.5s;
  }


@keyframes animate {
  0%, 100%{
      opacity: 0;
  }
  50%{
      opacity: 1;
  }
}
`

