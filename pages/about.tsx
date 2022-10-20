import type { NextPage } from 'next'

import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

const About: NextPage = () => (
    <div>
        <table>
            <tr>
                <td>Полное наименование</td>
                <td>Общество с ограниченной ответственностью «Игорь И Компания»</td>
            </tr>
            <tr>
                <td>Краткое наименование </td>
                <td>ООО «И И К»</td>
            </tr>
            <tr>
                <td>Юридический адрес</td>
                <td>Республика Башкортостан, Благоварский р-он, с. Пришиб, ул. Ленина, д. 42/1</td>
            </tr>
            <tr>
                <td>Почтовый адрес</td>
                <td>452746, Р. Б., Благоварский р-он, с. Пришиб, ул. Ленина 42/1</td>
            </tr>
            <tr>
                <td>Тел</td>
                <td>89961007863</td>
            </tr>
            <tr>
                <td>ОГРН</td>
                <td>1060216000701</td>
            </tr>
            <tr>
                <td>ИНН</td>
                <td>0214004281</td>
            </tr>
            <tr>
                <td>ОКПО</td>
                <td>94262640</td>
            </tr>
            <tr>
                <td>ОКВЭД (вид деятельности)</td>
                <td>52.11.2</td>
            </tr>
        </table>
        <YMaps>
            <div>

                <Map defaultState={{ center: [54.842812, 55.157897], zoom: 9 }}
                    width={'100%'}
                    height={'600px'}
                >
                    <Placemark
                        geometry={[54.842812, 55.157897]}
                    />
                </Map>
            </div>
        </YMaps>
    </div>

)


export default About 