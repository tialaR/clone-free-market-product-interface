import React from 'react';
import {
  HiOutlineHeart as HeartIcon,
  HiOutlineCheck as CheckIcon,
  HiOutlineShieldCheck as ShieldIcon,
 } from 'react-icons/hi';

import './productAction.scss';

const ProductAction: React.FC = () => {
  return (
    <section className="productActionContainer">
      <span>Novo  |  1 vendido</span>

      <div className="titleContainer">
        <h1>Ajazz 308i Bluetooth 10m Teclado Pontiagudo Redondo</h1>
        <HeartIcon size={30} color="#3483fa" style={{ flexShrink: 0 }} />
      </div>

      <div className="dispatchTag">
        Enviado normalmente
      </div>

      <div className="priceCard">
        <div className="price">
          <span className="symbol">R$</span>
          <span className="fraction">197</span>
          <span className="cents">39</span>
        </div>
        <div className="installmentsInfo">
          <span>em 12x R$16,44 sem juros</span>
        </div>

        <p>Estoque disponível</p>

        <div className="methodCard">
            <CheckIcon size={24} color="#00A650" />
          <div>
            <span className="title">Frete grátis</span>
            <span className="details">Beneício Lorem Ipsum</span>
            <a href="#" className="more">Ver mais opções</a>
          </div>
        </div>
      </div>

      <div className="actions">
        <button type="submit" className="solid">Comprar agora</button>
        <button type="submit">Adicionar ao carrinho</button>
      </div>

      <ul className="benefits">
        <li>
          <ShieldIcon size={20} color="#666" style={{ flexShrink: 0 }} />
          <p>Compra GarantidaAbrirá em uma nova janela, receba o produto que está esperando ou devolvemos o dinheiro.</p>
        </li>
      </ul>
    </section>
  );
}

export default ProductAction;
