import React from 'react';

type OnOffclickPropsType = {
   click: boolean
}

function OnOffclick(props: OnOffclickPropsType) {
   return (<div>
      {props.click && <OnOff1 /> || <OnOff2 />}
   </div>

   )
}

function OnOff1() {
   return (
      <>
         <div className="div1">
            <div id="squareOn1">on</div>
            <div id="squareOff1">off</div>
            <div id="circle1"></div>
         </div>
      </>
   )
}

function OnOff2() {
   return (
      <>
         <div className="div2">
            <div id="squareOn2">on</div>
            <div id="squareOff2">off</div>
            <div id="circle2"></div>
         </div>
      </>
   )
}


export default OnOffclick;