import React from "react"
import "../App.css"

const Content = () => {
    return (
        <div className={"content"}>
            <div className={"content__header"}>
                Победите холода вместе с нами!
            </div>
            <div className={"content__wrapper-photo"}>
                <div className={"content__product"}>
                    <a href="#" className={"content__product-item"}>
                        <div className={"content__product-title"}>Шапка «Фречес»</div>
                        <div className={"content__product-price"}>1900 ₽</div>
                    </a>
                    <a href="#" className={"content__product-item"}>
                        <div className={"content__product-title"}>Варежки «Карина»</div>
                        <div className={"content__product-price"}>1400 ₽</div>
                    </a>
                    <a href="#" className={"content__product-item"}>
                        <div className={"content__product-title"}>Свитер «Бирюза»</div>
                        <div className={"content__product-price"}>2900 ₽</div>
                    </a>
                </div>
                <img src={`${process.env.PUBLIC_URL}/photo.png`} alt="photo"/>
            </div>
        </div>
    )
}

export default Content