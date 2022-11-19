import React, { Fragment, useEffect, useContext, useState } from "react";
import OrderSuccessMessage from "./OrderSuccessMessage";
import { HomeContext } from "./";
import { sliderImages } from "../../admin/dashboardAdmin/Action";
import {Helmet} from "react-helmet";
const apiURL = process.env.REACT_APP_API_URL;


const Slider = (props) => {
  const { data, dispatch } = useContext(HomeContext);
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    sliderImages(dispatch);
    
  }, []);

  // src={`${apiURL}/uploads/customize/${data.sliderImages[1].slideImage}`}

  return (
    <Fragment>
      <div className="relative mt-16 bg-gray-100 border-2">
        <Helmet>
          <script src="./sliderfun.js" type="text/javascript" />
        </Helmet>
        <div className="slider">

          {data.sliderImages.length > 0 ? (

            data.sliderImages.map((slide) => (
              <div class="myslide fade">
                <div class="txt">
                  <h1>IMAGE 1</h1>
                </div>
                <img src={`${apiURL}/uploads/customize/${slide.slideImage}`} alt="img" style={{width:"100%",heigth:"100%"}} /> 
              </div>
            ))

            
          ) : null}  

            <a className="prev" onclick="plusSlides(-1)">&#10094;</a>
            <a className="next" onclick="plusSlides(1)">&#10095;</a>
          
          <div className="dotsbox" style={{textAlign:"center"}}>
            <span className="dot" onclick="currentSlide(1)"></span>
            <span className="dot" onclick="currentSlide(2)"></span>
            <span className="dot" onclick="currentSlide(3)"></span>
            <span className="dot" onclick="currentSlide(4)"></span>
            <span className="dot" onclick="currentSlide(5)"></span>
          </div>
        </div>
        

        {/* {data?.sliderImages?.length > 0 ? autoSlide()  : null} */} 

      </div>
      <OrderSuccessMessage />
    </Fragment>
  );
};

export default Slider;
