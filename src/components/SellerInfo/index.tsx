import React from 'react';
import {
  HiOutlineLocationMarker as LocationIcon,
  HiOutlineChatAlt2 as SupportIcon,
  HiOutlineClock as ClockIcon,
} from 'react-icons/hi';

import './sellerinfo.scss';

const SellerInfo: React.FC = () => {
  return(
    <section className="sellerInfoContainer">
      <h2>Informações sobre o vendedor</h2>

      <div className="locationCardContainer">
        <LocationIcon size={20} />
        <div>
          <p>Localização</p>
          <p>Salvador - BA</p>
        </div>
      </div>

        <div className="reputationCard">
          <ol className="reputationThermometer">
            <li />
            <li />
            <li />
            <li />
            <li className="active" />
          </ol>

          <ul className="reputationRow">
            <li>
              <strong>561</strong>
              <span>Vendas nos últimos 60 dias</span>
            </li>
            <li>
              <strong><SupportIcon size={28} /></strong>
              <span>Presta bom atendimento</span>
            </li>
            <li>
              <strong><ClockIcon size={28} /></strong>
              <span>Entrega os produtos dentro do prazo</span>
            </li>
          </ul>
        </div>

      <a href="#" className="sellerMoreInfo">Ver mais dados deste vendedor</a>
    </section>
  );
}

export default SellerInfo;
