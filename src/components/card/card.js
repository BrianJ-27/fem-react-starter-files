import React from "react";
import styled from "styled-components";

const Card = styled.article``;

const CardContainer = () => {
  return (
    <Card>
      <header className="card__header">
        <figure className="card__figure">
          <img src="https://satyr.io/400x200?text=card__image" alt="card ima" />
        </figure>
      </header>

      <div className="card__body">
        <h2 className="card__title">Card Title</h2>
        <h3 className="card__subtitle"> Card Subtitle </h3>
        <p className="card__copy"> Lorem ipsum dolor sit amet consectetur</p>
      </div>

      <footer className="card__footer">
        <div className="card__actions">
          <button className="button"> Button </button>
        </div>
      </footer>
    </Card>
  );
};

export default CardContainer;
