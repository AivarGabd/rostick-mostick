import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";


export default function CustomSwiperPartners() {
    const partners = [
        'https://solid-sibir.ru/img/home/partners/partners-1.jpg?_v=1634118736682',
        'https://solid-sibir.ru/img/home/partners/partners-2.jpg?_v=1634118736682',
        'https://solid-sibir.ru/img/home/partners/partners-3.jpg?_v=1634118736682',
        'https://solid-sibir.ru/img/home/partners/partners-4.jpg?_v=1634118736682',
        'https://solid-sibir.ru/img/home/partners/partners-5.jpg?_v=1634118736682',
        'https://solid-sibir.ru/img/home/partners/partners-6.jpg?_v=1634118736682',
        'https://solid-sibir.ru/img/home/partners/partners-7.jpg?_v=1634118736682',
        'https://solid-sibir.ru/img/home/partners/partners-8.jpg?_v=1634118736682',
        'https://solid-sibir.ru/img/home/partners/partners-9.jpg?_v=1634118736682',
        'https://solid-sibir.ru/img/home/partners/partners-10.jpg?_v=1634118736682',
        'https://solid-sibir.ru/img/home/partners/partners-11.jpg?_v=1634118736682',
        'https://solid-sibir.ru/img/home/partners/partners-12.jpg?_v=1634118736682',
        'https://solid-sibir.ru/img/home/partners/partners-13.jpg?_v=1634118736682',
        'https://solid-sibir.ru/img/home/partners/partners-14.jpg?_v=1634118736682',
        'https://solid-sibir.ru/img/home/partners/partners-15.jpg?_v=1634118736682',
        'https://solid-sibir.ru/img/home/partners/partners-16.jpg?_v=1634118736682',
        'https://solid-sibir.ru/img/home/partners/partners-17.jpg?_v=1634118736682',
        'https://solid-sibir.ru/img/home/partners/partners-18.jpg?_v=1634118736682',
        'https://solid-sibir.ru/img/home/partners/partners-19.jpg?_v=1634118736682',
        'https://solid-sibir.ru/img/home/partners/partners-20.jpg?_v=1634118736682',
        'https://solid-sibir.ru/img/home/partners/partners-21.jpg?_v=1634118736682',
        'https://solid-sibir.ru/img/home/partners/partners-22.jpg?_v=1634118736682',
        'https://solid-sibir.ru/img/home/partners/partners-23.jpg?_v=1634118736682'
    ]

    return (
        <>
            <Swiper
                slidesPerView={3}
                grid={{
                    rows: 2,
                }}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                modules={[Grid, Pagination]}
                className="mySwiper"
            >
                {partners.map((x, index) => (
                    <SwiperSlide key={index}>
                        <img src={x} alt="" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}
