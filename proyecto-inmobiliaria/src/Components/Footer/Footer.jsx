import React from "react";
import "./styleFooter.css";
import {
  MailOutlined,
  InstagramOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="nombreLogoFooter">
          <img
            src="/Images/Logo_Inmobiliaria-sinBg.png"
            alt="Footer"
            className="logoFooter"
          />
          <h1 className="nombreFooter">MONÓPOLIS INMOBILIARIA</h1>
        </div>
        <div className="infoFooter">
          <p>
            Teléfono: 2123.0020 - 099.121.688 <br /> Dirección: Fausto 641
            <br /> E-mail: contacto@monopolis.com.uy
          </p>
        </div>
        <div className="redesSocialesFotter">
          <a href="https://api.whatsapp.com/send/?phone=59899123321&text&type=phone_number&app_absent=0">
            <WhatsAppOutlined className="iconFooter" />
          </a>
          <InstagramOutlined className="iconFooter" />
          <MailOutlined className="iconFooter" />
        </div>
      </div>
    </>
  );
}
export default Footer;
