import React from "react";
import Card from "../Card/Card";

import "./CardList.scss";

const CardList = ({ data, title }) => {
    return (
        <div className="cards-container">
            <div className="cardList-title">
                {title}
            </div>
            <div className="cards-list">
                {data.map((item) => 
                    <Card
                        key={item.id}
                        name={item.name}
                        label={item.label}
                        imgUrl={item.imgUrl}
                        commission={item.commission}
                    />)
                }
            </div>
        </div>
    )
}

export default CardList;
