import { Card, Textarea, useInput, Text, Col, Input, Button } from '@nextui-org/react'
import type { NextPage } from 'next'
import { useMemo, useState } from 'react';
import { isValidPhoneNumber } from 'react-phone-number-input'


const Application: NextPage = () => {
    const { value, reset, bindings } = useInput("");
    const [phoneNumber, setPhoneNumber] = useState<any>(null)

    const validateEmail = (value: any) => {
        return value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);
    };

    const helper: any = useMemo(() => {
        if (!value)
            return {
                isValid: null,
                color: "",
            };
        const isValid = validateEmail(value);
        return {
            isValid: isValid,
            color: isValid ? "success" : "error",
        };
    }, [value]);


    const phoneHelper: any = useMemo(() => {
        if (phoneNumber == null)
            return {
                isValid: null,
                color: "",
            };
        const isValid = isValidPhoneNumber(`+${phoneNumber.target.value}`);
        return {
            isValid: isValid,
            color: isValid ? "success" : "error",
        };
    }, [phoneNumber]);

    return (
        <div style={{
            display: 'flex',
  
            justifyContent: 'center',
            alignContent: "center",
            textAlign: 'center',
            alignItems: 'center',
        }}>
            <Card css={{
                w: '500px',
                textAlign: 'left',
                mt:'50px'
            }}>
                <Card.Header>
                    <Col>
                        <Text h2>Оставить заявку</Text>
                        <Text>
                            Заполните заявку и мы свяжемся с Вами, чтобы назначить встречу. Или позвоните нам по телефону
                        </Text>
                    </Col>

                </Card.Header>
                <Card.Body css={{
                    pt:'0'
                }}>
                    <Input
                        {...bindings}
                        clearable
                        shadow={false}
                        onClearClick={reset}
                        status={helper.color}
                        color={helper.color}
                        helperColor={helper.color}
                        type="email"
                        label="Email"
                        css={{ w: '250px',mt:'10px' }}
                    />
                    <Input
                        labelLeft="+"
                        clearable
                        type="tel" id="phone" name="phone"
                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                        required
                        status={phoneHelper.color}
                        color={phoneHelper.color}
                        helperColor={phoneHelper.color}
                        label="Номер телефона"
                        onChange={setPhoneNumber}
                        css={{ w: '250px',mt:'10px' }}
                    />

                    <Textarea
                    css={{
                        mt:'10px'
                    }}
                        label="Комментарий или вопрос"
                    />

                    <Button color='success' auto css={{
                        width: "50px",
                        mt: '20px'
                    }}
                        disabled={phoneNumber == null || isValidPhoneNumber(`+${phoneNumber.target.value}`) == false || helper.isValid == null}
                    >

                        Оставить заявку
                    </Button>
                </Card.Body>
            </Card>
        </div>
    )

}

export default Application