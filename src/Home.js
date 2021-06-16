import React from 'react'
import "./Home.css"
import Product from "./Product";
function Home() {
    return (
        <div className="home">
        <div className="home_container">
            <img className="home_image" alt="image " src="https://indiaeducationdiary.in/wp-content/uploads/2021/01/North_Banner_1100x600-with-CTA.jpg"/>
        </div>
        <div className="home_row">
        <Product title="information about the Products" price={1249} 
            image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg" 
            id={1}
            rating={3}
        />
        <Product title="Best Mobile Phone Images · 100% Free Downloa" price={14999} 
           image= "https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
            id={2}
            rating={5}/>
        </div>
        
        <div className="home_row">
        <Product title="Men Black Analogue Watch WRG00043C" price={1990}
            image="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/13036780/2021/1/6/aa944cd1-5de1-4b6d-a792-6bdcbeb3242a1609906008342-WROGN-Men-Black-Analogue-Watch-WRG00043C-4111609906007378-1.jpg" 
             
            id={3}
            rating={4}/>
        <Product title="Alibaba High Quality Women Clothes Simple Party Sexy Long Slee" price={1999} 
            image="https://sc02.alicdn.com/kf/HTB1FiTdE9tYBeNjSspaq6yOOFXa2/232995706/HTB1FiTdE9tYBeNjSspaq6yOOFXa2.jpg_.webp" 
            id={4}
            rating={5}/>
        <Product title="Gadgets 360 Sony SRS XB-10 Wireless Bluetooth Speaker" price={1299} 
            image="https://i.gadgets360cdn.com/products/audio/large/1552567155_832_sony_srs-xb-10-wireless-bluetooth-speaker.jpg" 
            id={5}
            rating={5}/>
        </div>
        <div className="home_row">
        <Product title="Gadgets 360 OLED vs QLED vs LED: Which Type of TV Should You Buy? | NDTV" price={99998} 
            image="https://i.gadgets360cdn.com/large/sony_a9g_oled_tv_main_1564405958192.jpg" 
            id={6}
            rating={4}/>
        </div>
        
        </div>
            
    )
}

export default Home
