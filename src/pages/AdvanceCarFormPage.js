import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Transition, Progress } from 'semantic-ui-react'
import '../css/advanceCarFormPage.css'

import FirstStep from '../components/advanceCarForm/FirstStep'
import SecondStep from '../components/advanceCarForm/SecondStep'
import ThirdStep from '../components/advanceCarForm/ThirdStep'
import FourStep from '../components/advanceCarForm/FourStep'
import FifthStep from '../components/advanceCarForm/FifthStep'


export default () => {
    const [isShowStepTwo, setIsShowStepTwo] = useState(false)
    const [isShowStepThree, setIsShowStepThree] = useState(false)
    const [isShowStepFour, setIsShowStepFour] = useState(false)
    const [isShowStepFive, setIsShowStepFive] = useState(false)

    const carInformation = useSelector(state => state.carInformation)

    const history = useHistory();

    useEffect(() => {
        if (
            carInformation.licensePlate.alphabet === '' ||
            carInformation.licensePlate.number === '' ||
            carInformation.licensePlate.province === '' ||
            carInformation.brand === '' ||
            carInformation.model === '' ||
            carInformation.year === '' ||
            carInformation.detail === '' ||
            carInformation.carSeryId === ''

        ) {
            history.push('/')
        }
    }, [])

    return (
        <div>
            <div className="layout">
                <div className="carInfoForm">
                    <FirstStep handleNextToStepTwo={setIsShowStepTwo} />
                    <Transition visible={isShowStepTwo} animation='scale' duration={500}>
                        <SecondStep setIsShowStepThree={() => setIsShowStepThree(true)} />
                    </Transition>
                    <Transition visible={isShowStepThree} animation='scale' duration={500}>
                        <ThirdStep setIsShowStepFour={() => setIsShowStepFour(true)} />
                    </Transition>
                    <Transition visible={isShowStepFour} animation='scale' duration={500}>
                        <FourStep setIsShowStepFive={() => setIsShowStepFive(true)} />
                    </Transition>
                    <Transition visible={isShowStepFive} animation='scale' duration={500}>
                        <FifthStep />
                    </Transition>
                </div>
            </div>
        </div>
    )
}

