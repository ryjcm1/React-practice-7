import React from 'react'
import MyParagraph from './MyParagraph'

const DemoOutput = (props) =>{
    console.log('DemoOuput Running')
    return <MyParagraph>{props.show ? 'This is new!' : ''}</MyParagraph>

}

//only for functional components
//prevents re-rendering when there are no changes
//should be used based on the complexity of the component as there is cost related to this functionality 
export default React.memo(DemoOutput)