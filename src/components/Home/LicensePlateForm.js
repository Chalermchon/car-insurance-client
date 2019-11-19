import React, { useEffect, useState } from 'react'
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { Form, Card, Button, Icon } from 'semantic-ui-react'

import { setCarLicensePlate } from "../../redux/action";

const provinces = [
    {key: '0', value: 'กระบี่', text: 'กระบี่'},
    {key: '1', value: 'กรุงเทพมหานคร', text: 'กรุงเทพมหานคร'},
    {key: '2', value: 'กาญจนบุรี', text: 'กาญจนบุรี'},
    {key: '3', value: 'กาฬสินธุ์', text: 'กาฬสินธุ์'},
    {key: '4', value: 'กำแพงเพชร', text: 'กำแพงเพชร'},
    {key: '5', value: 'ขอนแก่น', text: 'ขอนแก่น'},
    {key: '6', value: 'จันทบุรี', text: 'จันทบุรี'},
    {key: '7', value: 'ฉะเชิงเทรา', text: 'ฉะเชิงเทรา'},
    {key: '8', value: 'ชลบุรี', text: 'ชลบุรี'},
    {key: '9', value: 'ชัยนาท', text: 'ชัยนาท'},
    {key: '10', value: 'ชัยภูมิ', text: 'ชัยภูมิ'},
    {key: '11', value: 'ชุมพร', text: 'ชุมพร'},
    {key: '12', value: 'เชียงราย', text: 'เชียงราย'},
    {key: '13', value: 'เชียงใหม่', text: 'เชียงใหม่'},
    {key: '14', value: 'ตรัง', text: 'ตรัง'},
    {key: '15', value: 'ตราด', text: 'ตราด'},
    {key: '16', value: 'ตาก', text: 'ตาก'},
    {key: '17', value: 'นครนายก', text: 'นครนายก'},
    {key: '18', value: 'นครปฐม', text: 'นครปฐม'},
    {key: '19', value: 'นครพนม', text: 'นครพนม'},
    {key: '20', value: 'นครราชสีมา', text: 'นครราชสีมา'},
    {key: '21', value: 'นครศรีธรรมราช', text: 'นครศรีธรรมราช'},
    {key: '22', value: 'นครสวรรค์', text: 'นครสวรรค์'},
    {key: '23', value: 'นนทบุรี', text: 'นนทบุรี'},
    {key: '24', value: 'นราธิวาส', text: 'นราธิวาส'},
    {key: '25', value: 'น่าน', text: 'น่าน'},
    {key: '26', value: 'บุรีรัมย์', text: 'บุรีรัมย์'},
    {key: '27', value: 'บึงกาฬ', text: 'บึงกาฬ'},
    {key: '28', value: 'ปทุมธานี', text: 'ปทุมธานี'},
    {key: '29', value: 'ประจวบคีรีขันธ์', text: 'ประจวบคีรีขันธ์'},
    {key: '30', value: 'ปราจีนบุรี', text: 'ปราจีนบุรี'},
    {key: '31', value: 'ปัตตานี', text: 'ปัตตานี'},
    {key: '32', value: 'พะเยา', text: 'พะเยา'},
    {key: '33', value: 'พังงา', text: 'พังงา'},
    {key: '34', value: 'พัทลุง', text: 'พัทลุง'},
    {key: '35', value: 'พิจิตร', text: 'พิจิตร'},
    {key: '36', value: 'พิษณุโลก', text: 'พิษณุโลก'},
    {key: '37', value: 'เพชรบุรี', text: 'เพชรบุรี'},
    {key: '38', value: 'เพชรบูรณ์', text: 'เพชรบูรณ์'},
    {key: '39', value: 'แพร่', text: 'แพร่'},
    {key: '40', value: 'ภูเก็ต', text: 'ภูเก็ต'},
    {key: '41', value: 'มหาสารคาม', text: 'มหาสารคาม'},
    {key: '42', value: 'มุกดาหาร', text: 'มุกดาหาร'},
    {key: '43', value: 'แม่ฮ่องสอน', text: 'แม่ฮ่องสอน'},
    {key: '44', value: 'ยโสธร', text: 'ยโสธร'},
    {key: '45', value: 'ยะลา', text: 'ยะลา'},
    {key: '46', value: 'ร้อยเอ็ด', text: 'ร้อยเอ็ด'},
    {key: '47', value: 'ระนอง', text: 'ระนอง'},
    {key: '48', value: 'ระยอง', text: 'ระยอง'},
    {key: '49', value: 'ราชบุรี', text: 'ราชบุรี'},
    {key: '50', value: 'ลพบุรี', text: 'ลพบุรี'},
    {key: '51', value: 'ลำปาง', text: 'ลำปาง'},
    {key: '52', value: 'ลำพูน', text: 'ลำพูน'},
    {key: '53', value: 'เลย', text: 'เลย'},
    {key: '54', value: 'ศรีสะเกษ', text: 'ศรีสะเกษ'},
    {key: '55', value: 'สกลนคร', text: 'สกลนคร'},
    {key: '56', value: 'สงขลา', text: 'สงขลา'},
    {key: '57', value: 'สตูล', text: 'สตูล'},
    {key: '58', value: 'สมุทรปราการ', text: 'สมุทรปราการ'},
    {key: '59', value: 'สมุทรสงคราม', text: 'สมุทรสงคราม'},
    {key: '60', value: 'สมุทรสาคร', text: 'สมุทรสาคร'},
    {key: '61', value: 'สระแก้ว', text: 'สระแก้ว'},
    {key: '62', value: 'สระบุรี', text: 'สระบุรี'},
    {key: '63', value: 'สิงห์บุรี', text: 'สิงห์บุรี'},
    {key: '64', value: 'สุโขทัย', text: 'สุโขทัย'},
    {key: '65', value: 'สุพรรณบุรี', text: 'สุพรรณบุรี'},
    {key: '66', value: 'สุราษฎร์ธานี', text: 'สุราษฎร์ธานี'},
    {key: '67', value: 'สุรินทร์', text: 'สุรินทร์'},
    {key: '68', value: 'หนองคาย', text: 'หนองคาย'},
    {key: '69', value: 'หนองบัวลำภู', text: 'หนองบัวลำภู'},
    {key: '70', value: 'อยุธยา', text: 'อยุธยา'},
    {key: '71', value: 'อ่างทอง', text: 'อ่างทอง'},
    {key: '72', value: 'อำนาจเจริญ', text: 'อำนาจเจริญ'},
    {key: '73', value: 'อุดรธานี', text: 'อุดรธานี'},
    {key: '74', value: 'อุตรดิตถ์', text: 'อุตรดิตถ์'},
    {key: '75', value: 'อุทัยธานี', text: 'อุทัยธานี'},
    {key: '76', value: 'อุบลราชธานี', text: 'อุบลราชธานี'}
]

function LicensePlateForm() {
    const [alphabet, setAlphabet] = useState('');
    const [number, setNumber] = useState('');
    const [province, setProvince] = useState('');
    const [clicked, setClicked] = useState(false)

    const dispatch = useDispatch();
    const history = useHistory();

    const nextToCarRegisterFormPage = (e) => {
        setClicked(true)
        if (alphabet !== '' && number !== '', province !== '') {
            dispatch(setCarLicensePlate({
                alphabet: alphabet,
                number: number,
                province: province
            }));
            history.push("/car-information");
        }
    }
    const nextToTestPage = (e) => {
        window.location = 'test-page'
    }


    return (
        <div className='lp'>
            <Card centered fluid link raised className='lp-computer-card'>
                <Card.Content>
                    <Form size="massive" unstackable >
                        <Form.Group >
                            <Form.Input fluid width="6"
                                name='alphabet' placeholder='กด'
                                onChange={(e) => setAlphabet(e.target.value)}
                                error={clicked && !alphabet}
                            />
                            <Form.Input fluid width="10"
                                name='number' placeholder='1234'
                                onChange={(e) => setNumber(e.target.value)}
                                error={clicked && !number}
                            />
                        </Form.Group>
                        <Form.Select fluid
                            name='province' placeholder='กรุงเทพมหานคร'
                            options={provinces}
                            onChange={(e, v) => setProvince(v.value)}
                            error={clicked && !province}
                        />
                    </Form>
                </Card.Content>
                <Card.Content extra textAlign="right" className='lp-computer-card-footer' >
                    <Button animated color='teal' onClick={nextToCarRegisterFormPage} role="submit">
                        <Button.Content visible>Next</Button.Content>
                        <Button.Content hidden>
                            <Icon name='arrow right' />
                        </Button.Content>
                    </Button>
                </Card.Content>
            </Card>
        </div>
    )
}

export default LicensePlateForm
