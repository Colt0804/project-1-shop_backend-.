import React from 'react';
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product 
          id="123"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses"
          price={29.99}
          image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
          rating={5}
           />
          <Product 
            id="1234"
            title="Philips HL7707/00 Mixer Grinder, 750W, 4 Jars (Black)"
            price={299.99}
            image="https://dwh39hsbrwe7m.cloudfront.net/media/catalog/product/cache/83d1798589160ed719728cafde2f5745/1/2/127__borosil_mixer_grinder_mixergrinder_blender_chutney_silverline.jpg"
            rating={4}
          
          />

        </div>
        <div className="home__row">
          <Product 
            id="1234"
            title="Samsung 23.5 inch (59.8 cm) LED Monitor .."
            price={529.99}
            image="https://sc01.alicdn.com/kf/HTB1FaS5y_lYBeNjSszcq6zwhFXao.jpg_350x350.jpg"
            rating={3}
          />
          <Product 
            id="12345"
            title="All-new Echo Dot (4th Gen) | Next generation smart speaker with powerful bass and Alexa (Black)"
            price={1294.99}
            image="https://www.bhphotovideo.com/images/images2500x2500/amazon_b0794w1skp_echo_plus_2nd_generation_1437070.jpg"
            rating={4}
          />
          <Product 
            id="123456"
            title="Samsung Galaxy Tab A 10.1 (10.1 inch, 32GB, Wi-Fi), Black"
            price={1294.99}
            image="https://m.media-amazon.com/images/I/71PWPoS+NtL._AC_UY218_.jpg"
            rating={3}
          />
        </div>
        <div className="home__row">
          <Product 
            id="1234567"
            title="Acer Nitro 23.8 inch Full HD 1920 x 1080-0.5 MS Response Time - 165 Hz Refresh Rate IPS Gaming Monitor with AMD Radeon Free SYNC Technology -2 X HDMI 1 X Display Port"
            price={1294.99}
            image="https://m.media-amazon.com/images/I/81ON2oIkS0L._AC_UY218_.jpg"
            rating={3}
          />

        </div>
      </div>
    </div>
  );
}

export default Home
