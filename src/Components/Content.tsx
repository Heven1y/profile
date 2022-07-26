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
                        <div>Шапка «Фречес»</div>
                        <b>1900 ₽</b>
                    </a>
                    <a href="#" className={"content__product-item"}>
                        <div>Варежки «Карина»</div>
                        <b>1400 ₽</b>
                    </a>
                    <a href="#" className={"content__product-item"}>
                        <div>Свитер «Бирюза»</div>
                        <b>2900 ₽</b>
                    </a>
                </div>
                <img src={`${process.env.PUBLIC_URL}/photo.png`} alt="photo"/>
            </div>
        </div>
    )
}

export default Content