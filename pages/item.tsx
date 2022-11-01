import type { NextPage } from 'next'
import fs from 'fs';
import { Loading, Text } from '@nextui-org/react';
import Application from './application'
import { FaFire, FaRoad } from 'react-icons/fa'
import { GiOilDrum, GiGears, GiCommercialAirplane } from 'react-icons/gi'
import { RiGasStationFill } from 'react-icons/ri'
import { BiNetworkChart } from 'react-icons/bi'
import CustomCard from '../components/home-page/CustomCard';
import { useMediaQuery } from '../public/useMediaQuery';



const Item: NextPage = ({ data }: any) => {
    const isMd = useMediaQuery(960);



    if (data) {

        return (
            <div style={{
                paddingBottom: '100px',
                margin:'10px'
            }}>
                <Text h2>
                    {data.mainHeader}
                </Text>
                {data.blocks.map((item: any) => <>
                    <div style={{
                        marginTop: "40px"
                    }}>
                        <Text h3>{item.header}</Text>
                        <article style={{
                            width: isMd ? '100%' : '700px'
                        }}>
                            {item.text}
                        </article>
                    </div>
                </>)}

                <div style={{
                    display: 'flex'
                }}>
                    <Application />
                </div>
            </div>
        )
    }

    return (
        <div style={{
            height: '100vh',
            width: '100%',
            display: 'flex',
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Loading size='xl' />
        </div>
    )
}


export async function getServerSideProps(context: any) {

    const array = [
        {
            id: 'Авиационное топливо',
            mainHeader: "Авиационное топливо",
            blocks: [
                {
                    "header": "Авиакеросин или авиационное топливо",
                    "text": "Одним из наиболее востребованных нефтепродуктов является керосин. Он изготавливается в процессе ректификации или перегонки нефти. Также керосин получается и при вторичной обработке нефти. Если возникает необходимость, то состав подвергают гидроочистке. В итоге получается горючая смесь жидких углеводородов. Температура кипения находится в диапазоне 150-250 градусов. Данный нефтепродукт благодаря своим эксплуатационным качествам широко применяется во многих отраслях и сферах. При этом он не ограничивается лишь сырьем для осветительного оборудования, авиакеросин широко применяется в таких сферах как: авиация, ракетостроение, производство и другие."
                },
                {
                    "header": "Купить авиационное топливо от производителя",
                    "text": "Мы предлагаем своим клиентам оптовые поставки авиационного топлива ТС-1 и РТ от крупнейших российских НПЗ по выгодным ценам. Авиакеросин отгружается напрямую от заводов-производителей, где цистерны проходят тщательнейшую пропарку, что исключает смешивание разных видов топлива, а герметичный налив обеспечивает защиту от попадания в топливо влаги и инородных тел. Таким образом, все компании приобретающие авиационное топливо у нашей компании могут быть уверены в его исключительном качестве и, следовательно, в безопасности использования. Актуальные цены на авиакеросин, способы отгрузки и оплаты вы можете уточнить у специалистов нашей компании заполнив форму обратной связи или заказав звонок. Мы непременно свяжемся с вами."
                }
            ]
        },
        {
            id: 'Автобензин',
            mainHeader: "Автобензин",
            blocks: [
                {
                    "header": "Что такое бензин?",
                    "text": "На сегодняшний день из нефти производят огромное количество нефтепродуктов, которые используются повсеместно. И самым популярным производным ресурсом является, конечно же, бензин. Он представляет собой горючую смесь лёгких углеводородов. Температура кипения находится в пределах от 33 до 205 градусов (зависит от имеющихся примесей). Плотность составляет порядка 0,71 г на см кубический. Бензин в наше время используется повсеместно в качестве топлива для транспорта, оборудования. Им заправляют легковые и грузовые авто, авиационную технику, Ж/Д транспорт, разнообразные электроустановки и так далее. Также из него изготавливают растворители, парафин и другие вещества."
                },
                {
                    "header": "Типы дизельного топлива",
                    "text": "На сегодняшний день основными типами данного вида нефтепродукта являются: • АИ-92 • АИ-95 • АИ-98 • АИ-100 ООО «Игорь И Компания» предлагает своим клиентам оптовые поставки бензинов всех марок от ведущих российских производителей. Приобретение ресурса самостоятельно на таких биржах как АО «СПбМТСБ» позволяет нам предлагать конкурентные цены, а отгрузка напрямую с заводов гарантирует качество товара и соответствие его ГОСТам. Благодаря собственной логистической службе мы в оперативном режиме контролируем сроки и очередность отгрузок, выполняя тем самым все поставленные перед нами задачи по обеспечению топливом автозаправочных, лесозаготовительных, горно-добывающих и прочих комплексов. Актуальные цены на автобензин, способы отгрузки и оплаты вы можете уточнить у специалистов нашей компании заполнив форму обратной связи или заказав звонок. Мы непременно свяжемся с вами."
                }
            ]
        },
        {
            id: 'Битум',
            mainHeader: "Битум",
            blocks: [
                {
                    "header": "Что такое битум?",
                    "text": "Битумы – это смесь высокомолекулярных углеводородов и асфальто-смолистых веществ. Качество битумов определяют такими показателями как: твёрдость, вязкость, растяжимость, температура размягчения, влагостойкость."
                },
                {
                    "header": "Как выбрать лучший битум?",
                    "text": "Лучшими считаются битумы, имеющие максимальную растяжимость, т. е. эластичные, хорошо работающие на изгиб. Битумы используют в строительстве дорог, гидротехнических сооружений, гидроизоляции различных сооружений, как компонент кровельных материалов."
                },
                {
                    "header": "Основные типы битума",
                    "text": "На сегодняшний день основными типами данного вида нефтепродукта являются: • Дорожный битум (ссылка на соответствующую страницу). • Строительный битум (ссылка на соответствующую страницу)."
                },
                {
                    "header": "Заказать битум от производителя",
                    "text": "ООО «Игорь И Компания» осуществляет поставки темных нефтепродуктов, таких как битум от различных российских производителей. Продукты отгружаются жд цистернами или в фасовке по согласованию с клиентом. Некоторые темные нефтепродукты приобретаются нами на бирже, другие по прямым контрактам с заводами-производителями, неизменными остаются справедливые цены, четкость логистики и проверенное качество. Мы готовы в полном объеме удовлетворить потребности дорожных служб, строительных, судоходных и сельскохозяйственных компаний и всех кому для ведения бизнеса необходимы битумы. Актуальные цены на битумы, способы отгрузки и оплаты вы можете уточнить у специалистов нашей компании заполнив форму обратной связи или заказав звонок. Мы непременно свяжемся с вами."
                }
            ]
        },
        {
            id: 'ДТ',
            mainHeader: "Дизельное топливо",
            blocks: [
                {
                    "header": "Что такое дизельное топливо и как оно производится?",
                    "text": "Нефть в современном понимании - это крайне ценный ресурс, из которого получают самое разнообразное топливо и смазочные материалы. Посредством специальных химических преобразований и обработки изготавливаются бензин, керосин, мазут, масла и, конечно же, дизельное топливо (ДТ). Последний ресурс получается в процессе прямой перегонки нефти из керосиново-газойлевых фракций. Он в наши дни широко используется во многих сферах, например, в качестве горючего для автомобилей или для различных установок."
                },
                {
                    "header": "Где применяется дизельное топливо (ДТ)?",
                    "text": "Дизельное топливо чаще всего используется в качестве горючего для Ж/Д и авто транспорта, водной и военной техники. Также ему нашли применение в производстве и сельском хозяйстве в качестве топлива для электрогенераторов и прочего оборудования."
                },
                {
                    "header": "Типы дизельного топлива",
                    "text": "На сегодняшний день различают различные типы данного вида нефтепродукта: • Летнее • Зимнее • Арктическое"
                },
                {
                    "header": "Заказать дизельное топливо (летнее, зимнее, арктика) от производителя",
                    "text": "ООО «Игорь И Компания» предлагает своим клиентам оптовые поставки дизельного топлива всех видов от ведущих российских производителей. Приобретение ресурса самостоятельно на таких биржах как АО «СПбМТСБ» позволяет нам предлагать конкурентные цены, а отгрузка напрямую с заводов гарантирует качество товара и соответствие его ГОСТам. Благодаря собственной логистической службе мы в оперативном режиме контролируем сроки и очередность отгрузок, выполняя тем самым все поставленные перед нами задачи по обеспечению топливом автозаправочных, лесозаготовительных, горно-добывающих и прочих комплексов. Актуальные цены на дизельное топливо, способы отгрузки и оплаты вы можете уточнить у специалистов нашей компании заполнив форму обратной связи или заказав звонок. Мы непременно свяжемся с вами."
                }
            ]
        },
        {
            id: 'Мазут',
            mainHeader: "Мазуты",
            blocks: [
                {
                    "header": "Что такое мазут?",
                    "text": "Мазут представляет собой темно-коричневую густую жидкость, которая выступает производным от бензина, газойля и керосина. Иными словами, она получается после переработки нефти или нефтепродуктов. Помимо этого, известны способы получения мазута из горючих сланцев и каменного угля, однако они не имеют широкого распространения из-за ограниченности использования. Данное вещество обладает рядом полезных свойств и качеств, благодаря чему широко применяется во многих современных отраслях."
                },
                {
                    "header": "Где применяется мазут?",
                    "text": "Мазут в основном применяется в качестве топлива. Его нередко используют речной и морской флоты, предприятия сферы промышленности, а также объекты ЖКХ. Если быть более точным, то данное сырье используется в качестве: • топлива для котлов и котельных установок; • сырья для изготовления тяжелого моторного топлива, бункерного топлива и флотского мазута; • сырья для производства кокса, смазочных масел и битума."
                },
                {
                    "header": "Купить мазут от производителя",
                    "text": "ООО «Игорь И Компания» осуществляет поставки темных нефтепродуктов, таких как мазут от различных российских производителей. Продукты отгружаются жд цистернами или в фасовке по согласованию с клиентом. Некоторые темные нефтепродукты приобретаются нами на бирже, другие по прямым контрактам с заводами-производителями, неизменными остаются справедливые цены, четкость логистики и проверенное качество. Мы готовы в полном объеме удовлетворить потребности всех компаний, которым для ведения бизнеса необходим мазут. Актуальные цены на мазут, способы отгрузки и оплаты вы можете уточнить у специалистов нашей компании заполнив форму обратной связи или заказав звонок. Мы непременно свяжемся с вами."
                }
            ]
        },
        {
            id: 'Масла',
            mainHeader: "Масла",
            blocks: [
                {
                    "header": "Для чего используются масла?",
                    "text": "Смазочные масла являются наиболее популярным видом жидких смазок для узлов трения машин и механизмов, выполняют функции рабочего тела в гидравлических приводах и амортизаторах, используются в качестве СОЖ при металлообработке, охлаждающей и изолирующей жидкости в масляных трансформаторах."
                },
                {
                    "header": "Смазочные масла от Солид-Сибирь",
                    "text": "ООО «Игорь И Компания» осуществляет поставки светлых нефтепродуктов, таких как смазочные масла от различных российских производителей. Продукты отгружаются жд цистернами или в фасовке по согласованию с клиентом. Некоторые нефтепродукты приобретаются нами на бирже, другие по прямым контрактам с заводами-производителями, неизменными остаются справедливые цены, четкость логистики и проверенное качество. Мы готовы в полном объеме удовлетворить потребности всех компаний, которым для ведения бизнеса необходимы смазочные масла. Актуальные цены, способы отгрузки и оплаты вы можете уточнить у специалистов нашей компании заполнив форму обратной связи или заказав звонок. Мы непременно свяжемся с вами."
                }
            ]
        },
        {
            id: 'Полимеры',
            mainHeader: "Полимеры",
            blocks: [
                {
                    "header": "Что такое полимеры?",
                    "text": "Полимеры — это как органические, так и неорганические, кристаллические и аморфные вещества, которые состоят из «мономерных звеньев», соединенных между собой либо координационными, либо химическими связями, образуя длинные макромолекулы."
                },
                {
                    "header": "Из чего состаят полимеры?",
                    "text": "Полимер представляет собой высокомолекулярное соединение, в нем количество мономерных звеньев (степень полимеризации) является достаточно большим. Как правило, количество звеньев считается достаточным для отнесения молекулы к полимерам, когда добавление нового мономерного звена не ведет к изменению молекулярных свойств. Молекулярная масса полимеров может быть от нескольких тыс. до нескольких млн."
                },
                {
                    "header": "Почему стоит купить полимеры именно у нас?",
                    "text": "Производители полимерных материалов заинтересованы в высоком качестве выпускаемой продукции, а ООО «Игорь И Компания» поставляет для этого качественное полимерное сырье. Прямые контракты с заводами-производителями и хорошие финансовые возможности позволяют нам предлагать оптимальные цены и товарные кредиты малым предприятиям."
                },
                {
                    "header": "Купить вспенивающийся полистрирол и ПВД от производителя",
                    "text": "Предлагаем к поставке следующие полимеры: вспенивающийся полистирол производства АО «Ангарский завод полимеров», АО «СИБУР-Химпром». Отгрузка осуществляется ж/д и авто транспортом, а также на условиях самовывоза с завода. Приглашаем к сотрудничеству производителей из всех регионов. Актуальные цены на полимеры, способы отгрузки и оплаты вы можете уточнить у специалистов нашей компании заполнив форму обратной связи или заказав звонок. Мы непременно свяжемся с вами."
                }
            ]
        },
        {
            id: "СУГ",
            mainHeader: "Сжиженные углеводородные газы",
            blocks: [
                {
                    "header": "Что такое сжиженные углеводородные газы (СУГ)?",
                    "text": "СУГ (сжиженный углеводородный газ) – это углеводородные газы, которые получают из широкой фракции легких углеводородов, которая, в свою очередь, выделяется из попутного нефтяного газа. Он используется для отопления домов, как автомобильное топливо, а также для производства нефтехимической продукции. Сжиженный углеводородный газ - это смесь пропана (С3Н8), бутана (С4Н10) и непредельных углеводородов (примерно 1%)."
                },
                {
                    "header": "Главные свойства СУГ",
                    "text": "Одно из главных свойств сжиженного газа - высокий КПД в отоплении. Кроме того, СУГ – экологичное топливо, при его сжигании не выделяет вредных компонентов, потому как его основные составляющие, пропан и бутан, очищаются от сернистых соединений, щелочи, воды и прочего."
                },
                {
                    "header": "Купить СУГ всех марок от производителя",
                    "text": "ООО «Игорь И Компания» предлагает своим клиентам оптовые поставки сжиженных углеводородных газов всех марок от ведущих российских производителей. Приобретение ресурса самостоятельно на таких биржах как АО «СПбМТСБ» позволяет нам предлагать конкурентные цены, а отгрузка напрямую с заводов гарантирует качество товара и соответствие его ГОСТам. Благодаря собственной логистической службе мы в оперативном режиме контролируем сроки и очередность отгрузок, выполняя тем самым все поставленные перед нами задачи по обеспечению топливом автозаправочных и прочих комплексов. /n Актуальные цены, способы отгрузки и оплаты вы можете уточнить у специалистов нашей компании заполнив форму обратной связи или заказав звонок. Мы непременно свяжемся с вами."
                }
            ]
        }
    ]
    const id = context.query.id
    const data = array.find(x => x.id == id)


    return {
        props: {
            data: data
        }
    }
}

export default Item

