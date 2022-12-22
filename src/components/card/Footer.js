import React from "react";
import "./Footer.css";
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { FiFacebook } from "react-icons/fi";
import { FaTelegramPlane, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <div>
      <footer>
        <div className="footer-top">
          <div className="question">
            <h3>Savolingiz bormi? Qo'ng'iroq qiling</h3>
            <p>
              <FiPhoneCall size={24} style={{ marginRight: 10 }} />
              <a href="tel:+998901930535">+99890 193 05 35</a>
            </p>
            <p>
              <HiOutlineMail size={24} style={{ marginRight: 10 }} />
              <a href="#">info@goodzone.uz</a>
            </p>
            <div className="social-icon">
              <a href="https://www.facebook.com/goodzone.uzbekistan" target="blank"><FiFacebook className="network-icon" /></a>
              <a href="https://t.me/goodzone_uzbekistan" target="blank"><FaTelegramPlane className="network-icon" /></a>
              <a href="https://www.instagram.com/goodzone.uzbekistan/" target="blank"><FaInstagram className="network-icon" /></a>
              <a href="https://www.youtube.com/channel/UC9Oe_qny-IZnTuvc0xwwz2Q" target="blank"><FaYoutube className="network-icon" /></a>
            </div>
          </div>
          <div className="company">
            <h3>Kompaniya</h3>
            <p>
              <a href="https://goodzone.uz/uz/about">Kompaniya haqida</a>
            </p>
            <p>
              <a href="https://goodzone.uz/uz/shops">Do'kon manzillari</a>
            </p>
            <p>
              <a href="https://goodzone.uz/uz/vacancies">Vakansiyalar</a>
            </p>
          </div>
          <div className="client">
            <h3>Xaridorga yordam</h3>
            <p>
              <a href="https://goodzone.uz/uz/faq">Savol va javob</a>
            </p>
            <p>
              <a href="https://goodzone.uz/uz/how-to-order">
                Saytda qanday buyurtma berish kerak{" "}
              </a>
            </p>
            <p>
              <a href="https://goodzone.uz/uz/exchange-return-repair">
                Tovarlarni almashtirish,qaytarish va ta'mirlash
              </a>
            </p>
          </div>
          <div className="information">
            <h3>Ma'lumot</h3>
            <p>
              <a href="https://goodzone.uz/uz/payment-plan">Muddatli to'lov</a>
            </p>
            <p>
              <a href="https://goodzone.uz/uz/delivery">Yetkazib berish</a>
            </p>
            <p>
              <a href="https://goodzone.uz/uz/feedback">Izoh qoldirish</a>
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="left-footer-card">
            <img src="https://goodzone.uz/icons/payme.png" alt="img card" />
            <img src="https://goodzone.uz/icons/click.png" alt="img card" />
            <img src="https://goodzone.uz/icons/uzcard.png" alt="img card" />
            <img src="https://goodzone.uz/icons/apelsin.png" alt="img card" />
            <img src="https://goodzone.uz/icons/humo.png" alt="img card" />
            <img src="https://goodzone.uz/icons/paybox.svg" alt="img card" />
            <img src="https://goodzone.uz/icons/visa.svg" alt="img card" />
            <img
              src="https://goodzone.uz/icons/mastercard.svg"
              alt="img card"
            />
            <img src="https://goodzone.uz/icons/payze.svg" alt="img card" />
          </div>
          <div className="right-footer-card">
            <img src="https://goodzone.uz/icons/VIDJET.svg" alt="img card" />
            <img
              src="https://goodzone.uz/icons/alif-nasiya-logo-b.svg"
              alt="img card"
            />
            <img
              src="https://goodzone.uz/images/payment_logo/zoodpay.png"
              alt="img card"
            />
          </div>
        </div>
        <p style={{color:"gray",fontFamily:"poppins,sans-serif"}}>
        2022 © goodzone.uz. Barcha huquqlar himoyalangan. Tovarlarning
          ko'rsatilgan qiymati va ularni sotib olish shartlari joriy sanaga amal
          qiladi
        </p>
      </footer>
    </div>
  );
}