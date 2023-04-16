import React from 'react';


function Accordion(props: any) {
   console.log('Accordion rendering');
   return <div>
      <AccordionTitle title={props.title}/>
      <AccordionBody />
   </div>
}

function AccordionTitle(props: any) {
   console.log('AccordionTitle rendering');
   return (
      <>
      <h3>Меню</h3>
      {props.title}
      </>
   )
}

function AccordionBody() {
   console.log('AccordionBody rendering');
   return <ul>
         <li>1</li>
         <li>2</li>
         <li>3</li>
      </ul>   
}  

export default Accordion;