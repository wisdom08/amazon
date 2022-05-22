import React from 'react';
import "../styles/Home.css"
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img className="home_image"
                     src="https://images.idgesg.net/images/article/2017/09/firetvad2-100736366-orig.jpg" alt=""/>

                <div className="home_row">
                    <Product id="2323" title="제품1입니다." price={3000}
                             image="https://en.pimg.jp/024/292/158/1/24292158.jpg"
                             rating={3}
                    />

                    <Product id="2321" title="제품2입니다." price={5000}
                             image="https://en.pimg.jp/024/292/158/1/24292158.jpg"
                             rating={4}
                    />

                </div>

                <div className="home_row">
                    <Product id="2320" title="제품3입니다." price={4000}
                             image="https://en.pimg.jp/024/292/158/1/24292158.jpg"
                             rating={2}
                    />
                    <Product id="2329" title="제품4입니다." price={40000}
                             image="https://en.pimg.jp/024/292/158/1/24292158.jpg"
                             rating={2}
                    />
                    <Product id="2328" title="제품5입니다." price={4500}
                             image="https://en.pimg.jp/024/292/158/1/24292158.jpg"
                             rating={5}
                    />
                </div>

                <div className="home_row">
                    <Product id="2338" title="제품6입니다." price={45000}
                             image="https://en.pimg.jp/024/292/158/1/24292158.jpg"
                             rating={1}
                    />
                </div>

            </div>
        </div>
    );
}

export default Home;
