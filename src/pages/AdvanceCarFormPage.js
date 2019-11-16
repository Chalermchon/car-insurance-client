import React, {useState} from 'react'
import { Transition, Progress } from 'semantic-ui-react'
import '../css/advanceCarFormPage.css'

import FirstStep from '../components/advanceCarForm/FirstStep'
import SecondStep from '../components/advanceCarForm/SecondStep'
import ThirdStep from '../components/advanceCarForm/ThirdStep'
import FourStep from '../components/advanceCarForm/FourStep'
import FifthStep from '../components/advanceCarForm/FifthStep'


export default (props) => {
  const [isShowStepTwo, setIsShowStepTwo] = useState(false)
  const [isShowStepThree, setIsShowStepThree] = useState(false)
  const [isShowStepFour, setIsShowStepFour] = useState(false)
  const [isShowStepFive, setIsShowStepFive] = useState(false)

  return(
    <div>
        <div className="layout">
            <div className="carInfoForm">
                <FirstStep setIsShowStepTwo={() => setIsShowStepTwo(true)} />
                <Transition visible={isShowStepTwo} animation='scale' duration={500}>
                    <SecondStep setIsShowStepThree={() => setIsShowStepThree(true)}/>
                </Transition>
                <Transition visible={isShowStepThree} animation='scale' duration={500}>
                    <ThirdStep setIsShowStepFour={() => setIsShowStepFour(true)}/>
                </Transition>
                <Transition visible={isShowStepFour} animation='scale' duration={500}>
                    <FourStep setIsShowStepFive={() => setIsShowStepFive(true)}/>
                </Transition>
                <Transition visible={isShowStepFive} animation='scale' duration={500}>
                    <FifthStep/>
                </Transition>   
            </div>
        </div>
    </div>
  )
}

