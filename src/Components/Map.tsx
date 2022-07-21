import React from "react";
import "../App.css"
import Vk from "../icons/vk";
import Facebook from "../icons/facebook";
import Telegram from "../icons/telegram";

const Map = () => {
    return (
        <div className={"contacts"}>
            <div className={"contacts__text"}>
                <div>
                    <div className={"contacts__header"}>
                        Магазин в Рязане
                    </div>
                    <div className={"contacts__content"}>
                        <div className={"contacts__content--item"}>ул. Маяковского, 12/59</div>
                        <div className={"contacts__content--item"}>
                            <div>Работаем ежедневно</div>
                            <div>10:00 - 19:00</div>
                        </div>
                        <div className={"contacts__content--item"}>
                            <div>+7 983 194 82 78</div>
                            <div>vyasan@mail.ru</div>
                        </div>
                    </div>
                </div>
                <div className={"contacts__links"}>
                    <Vk/>
                    <Facebook/>
                    <Telegram/>
                </div>
            </div>
            <div className={"contacts__map"}>
                <img src={`${process.env.PUBLIC_URL}/map.png`} alt="map"/>
            </div>
        </div>
    )
}

export default Map