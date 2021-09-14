import React from 'react';
import './product.scss';

import tshirtImage from '../../assets/tshirt.png';
import SellerInfo from '../SellerInfo';
import ProductAction from '../ProductAction';

const Product: React.FC = () => {
  return (
    <div className="productContainer">
      <div className="row">
        <a href="#">Compartilhar</a>
        <a href="#">Vender um igual</a>
      </div>
      <div className="panel">
        <div className="column">
          <div className="galery">
            <img src={tshirtImage} alt="T-shirt" />
          </div>

          <Info />
        </div>
        <div className="column">
          <ProductAction />
          <SellerInfo />
          <WarrantySection />
        </div>
      </div>
    </div>
  );
}

const WarrantySection: React.FC = () => {
  return(
    <section className="warrantySectionContainer">
      <h4>Garantia</h4>

      <div>
        <span>
          <p className="title">Compra garantida com o Lorem Ipsum</p>
          <p className="description">Receba o produto que está esperando ou devolvemos o seu dinheiro</p>
        </span>
        <span>
          <p className="title">Garantia do vendedor</p>
          <p className="description">Garantia do vendedor: 1 mês</p>
        </span>
      </div>

      <a href="#">Saiba mais sobre garantia</a>
    </section>
  );
}

const Info: React.FC = () => {
  return(
    <section className="productDescriptionContainer">
      <h2>Descrição</h2>

      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. In massa turpis,
      accumsan nec commodo id, faucibus sed ipsum. Curabitur luctus mollis risus,
      non dictum erat feugiat in. Pellentesque porta, velit a efficitur euismod,
      elit sapien maximus erat, quis blandit velit lacus ut lacus. Orci varius
      natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
      Aenean neque magna, pharetra ut elit eget, tempor posuere mi. Vivamus imperdiet
      dictum aliquet. Nullam volutpat bibendum tempor.Maecenas posuere, leo at consequat
      sagittis, nulla lacus efficitur diam, eget facilisis felis risus vel ante. Proin ut
      enim bibendum, luctus purus vel, consectetur arcu.
      <br />
      <br />
      Itens inclusos: <br />
      - 1x LED <br />
      - 1x LED <br />
      - 1x LED <br />
      - 1x LED <br />
      - 1x LED <br />
      - 1x LED <br />
      <br />
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. In massa turpis,
      accumsan nec commodo id, faucibus sed ipsum. Curabitur luctus mollis risus,
      non dictum erat feugiat in. Pellentesque porta, velit a efficitur euismod,
      elit sapien maximus erat, quis blandit velit lacus ut lacus. Orci varius
      natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
      Aenean neque magna, pharetra ut elit eget, tempor posuere mi. Vivamus imperdiet
      dictum aliquet. Nullam volutpat bibendum tempor.Maecenas posuere, leo at consequat
      sagittis, nulla lacus efficitur diam, eget facilisis felis risus vel ante. Proin ut
      enim bibendum, luctus purus vel, consectetur arcu.
      </p>
    </section>
  );
}

export default Product;
