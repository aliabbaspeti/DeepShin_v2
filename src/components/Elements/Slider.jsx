import React from "react";
import { NavLink } from "react-router-dom";

class Slider extends React.Component {
  componentDidMount() {
    function loadScript(src) {
      return new Promise(function (resolve, reject) {
        var script = document.createElement("script");
        script.src = src;
        script.addEventListener("load", function () {
          resolve();
        });
        script.addEventListener("error", function (e) {
          reject(e);
        });
        document.body.appendChild(script);
        document.body.removeChild(script);
      });
    }

    loadScript("./assets/js/rev-script-1.js");
  }

  render() {
    return (
      <>
        <div
          id="welcome_wrapper"
          className="rev_slider_wrapper fullscreen-container"
          data-alias="goodnews-header"
          data-source="gallery"
          style={{ background: "#eeeeee", padding: 0 }}
        >
          <div
            id="welcome"
            className="rev_slider fullscreenbanner"
            style={{ display: "none" }}
            data-version="5.4.3.1"
          >
            <ul>
              {/* SLIDE 1 */}
              <li
                data-index="rs-901"
                data-transition="fade"
                data-slotamount="default"
                data-hideafterloop={0}
                data-hideslideonmobile="off"
                data-easein="default"
                data-easeout="default"
                data-masterspeed="default"
                data-thumb={require("./../../images/main-slider/slider1/slide1.jpg")}
                data-rotate={0}
                data-fstransition="fade"
                data-fsmasterspeed={300}
                data-fsslotamount={7}
                data-saveperformance="off"
                data-title
                data-param1
                data-param2
                data-param3
                data-param4
                data-param5
                data-param6
                data-param7
                data-param8
                data-param9
                data-param10
                data-description
              >
                {/* MAIN IMAGE */}
                <img
                  src={require("./../../images/main-slider/slider1/slide1.jpg")}
                  alt=""
                  data-lazyload={require("./../../images/main-slider/slider1/slide1.jpg")}
                  data-bgposition="center center"
                  data-bgfit="cover"
                  data-bgparallax={4}
                  className="rev-slidebg"
                  data-no-retina
                />
                {/* LAYERS */}
                {/* LAYER NR. 1 [ for overlay ] */}
                <div
                  className="tp-caption tp-shape tp-shapewrapper "
                  id="slide-901-layer-0"
                  data-x="['center','center','center','center']"
                  data-hoffset="['0','0','0','0']"
                  data-y="['middle','middle','middle','middle']"
                  data-voffset="['0','0','0','0']"
                  data-width="full"
                  data-height="full"
                  data-whitespace="nowrap"
                  data-type="shape"
                  data-basealign="slide"
                  data-responsive_offset="off"
                  data-responsive="off"
                  data-frames='[
                         {"from":"opacity:0;","speed":1000,"to":"o:1;","delay":0,"ease":"Power4.easeOut"},
                         {"delay":"wait","speed":1000,"to":"opacity:0;","ease":"Power4.easeOut"}
                         ]'
                  data-textalign="['left','left','left','left']"
                  data-paddingtop="[0,0,0,0]"
                  data-paddingright="[0,0,0,0]"
                  data-paddingbottom="[0,0,0,0]"
                  data-paddingleft="[0,0,0,0]"
                  style={{
                    zIndex: 1,
                    backgroundColor: "rgba(255, 255, 255, 0.3)",
                    borderColor: "rgba(0, 0, 0, 0)",
                    borderWidth: 0,
                  }}
                ></div>
                {/* LAYER NR. 4 [ for title ] */}
                <div
                  className="tp-caption   tp-resizeme"
                  id="slide-901-layer-2"
                  data-x="['left','left','left','left']"
                  data-hoffset="['50','130','130','130']"
                  data-y="['top','top','top','top']"
                  data-voffset="['240','240','180','200']"
                  data-fontsize="['72','72','62','52']"
                  data-lineheight="['82','82','72','62']"
                  data-width="['700','700','700','500']"
                  data-height="['none','none','none','none']"
                  data-whitespace="['normal','normal','normal','normal']"
                  data-type="text"
                  data-responsive_offset="on"
                  data-frames='[{"delay":"+790","speed":1500,"sfxcolor":"#fff","sfx_effect":"blockfromleft","frame":"0","from":"z:0;","to":"o:1;","ease":"Power4.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                  data-textalign="['left','left','left','left']"
                  data-paddingtop="[5,5,5,5]"
                  data-paddingright="[0,0,0,0]"
                  data-paddingbottom="[0,0,0,0]"
                  data-paddingleft="[0,0,0,0]"
                  style={{
                    zIndex: 13,
                    whiteSpace: "normal",
                    fontWeight: 700,
                    color: "#111",
                    borderWidth: 0,
                    fontFamily: '"Poppins", sans-serif',
                    textTransform: "uppercase",
                  }}
                >
                  <div>Where Cleanliness Meets Excellence</div>
                </div>
                {/* LAYER NR. 5 [ for block] */}
                <div
                  className="tp-caption rev-btn  tp-resizeme slider-block"
                  id="slide-901-layer-3"
                  data-x="['left','left','left','left']"
                  data-hoffset="['0','80','80','60']"
                  data-y="['middle','middle','middle','middle']"
                  data-voffset="['0','0','0','0']"
                  data-width="none"
                  data-height="none"
                  data-whitespace="nowrap"
                  data-type="button"
                  data-responsive_offset="on"
                  data-frames='[{"from":"y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":1000,"ease":"Power3.easeInOut"},
                             {"delay":"wait","speed":500,"to":"y:[-100%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power1.easeIn"}]'
                  data-textalign="['left','left','left','left']"
                  data-paddingtop="[250,250,250,200]"
                  data-paddingright="[150,150,150,150]"
                  data-paddingbottom="[250,250,250,200]"
                  data-paddingleft="[150,150,150,150]"
                  style={{ zIndex: 8 }}
                >
                  <div
                    className="rs-wave"
                    data-speed={1}
                    data-angle={0}
                    data-radius="2px"
                  />
                </div>
                {/* LAYER NR. 5 [ for block] */}
                <div
                  className="tp-caption   tp-resizeme"
                  id="slide-901-layer-4"
                  data-x="['left','left','left','left']"
                  data-hoffset="['50','130','130','130']"
                  data-y="['top','top','top','top']"
                  data-voffset="['410','410','350','340']"
                  data-fontsize="['20','20','30','30']"
                  data-lineheight="['28','28','48','38']"
                  data-width="['600','600','700','600']"
                  data-height="['none','none','none','none']"
                  data-whitespace="['normal','normal','normal','normal']"
                  data-type="text"
                  data-responsive_offset="on"
                  data-frames='[{"delay":"+790","speed":1500,"sfxcolor":"#fff","sfx_effect":"blockfromleft","frame":"0","from":"z:0;","to":"o:1;","ease":"Power4.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                  data-textalign="['left','left','left','left']"
                  data-paddingtop="[5,5,5,5]"
                  data-paddingright="[0,0,0,0]"
                  data-paddingbottom="[0,0,0,0]"
                  data-paddingleft="[0,0,0,0]"
                  style={{
                    zIndex: 13,
                    whiteSpace: "normal",
                    fontWeight: 500,
                    color: "#111",
                    borderWidth: 0,
                    fontFamily: '"Poppins", sans-serif',
                  }}
                ></div>
                {/* LAYER NR. 6 [ for see all service botton ] */}
                <div
                  className="tp-caption tp-resizeme"
                  id="slide-901-layer-5"
                  data-x="['left','left','left','left']"
                  data-hoffset="['50','130','130','130']"
                  data-y="['top','top','top','top']"
                  data-voffset="['500','520','500','480']"
                  data-lineheight="['none','none','none','none']"
                  data-width="['300','300','300','300']"
                  data-height="['none','none','none','none']"
                  data-whitespace="['normal','normal','normal','normal']"
                  data-type="text"
                  data-responsive_offset="on"
                  data-frames='[ 
                         {"from":"y:100px(R);opacity:0;","speed":2000,"to":"o:1;","delay":2000,"ease":"Power4.easeOut"},
                         {"delay":"wait","speed":1000,"to":"y:-50px;opacity:0;","ease":"Power2.easeInOut"}
                         ]'
                  data-textalign="['left','left','left','left']"
                  data-paddingtop="[0,0,0,0]"
                  data-paddingright="[0,0,0,0]"
                  data-paddingbottom="[0,0,0,0]"
                  data-paddingleft="[0,0,0,0]"
                  style={{ zIndex: 100, textTransform: "uppercase" }}
                >
                  <NavLink
                    to="/services"
                    className="site-button-secondry btn-effect"
                  >
                    More About
                  </NavLink>
                </div>
              </li>
              {/* SLIDE 2 */}
              <li
                data-index="rs-902"
                data-transition="fade"
                data-slotamount="default"
                data-hideafterloop={0}
                data-hideslideonmobile="off"
                data-easein="default"
                data-easeout="default"
                data-masterspeed="default"
                data-thumb={require("./../../images/main-slider/slider1/slide2.jpg")}
                data-rotate={0}
                data-fstransition="fade"
                data-fsmasterspeed={300}
                data-fsslotamount={7}
                data-saveperformance="off"
                data-title
                data-param1
                data-param2
                data-param3
                data-param4
                data-param5
                data-param6
                data-param7
                data-param8
                data-param9
                data-param10
                data-description
              >
                {/* MAIN IMAGE */}
                <img
                  src={require("./../../images/main-slider/slider1/slide2.jpg")}
                  alt=""
                  data-lazyload={require("./../../images/main-slider/slider1/slide2.jpg")}
                  data-bgposition="center center"
                  data-bgfit="cover"
                  data-bgparallax={4}
                  className="rev-slidebg"
                  data-no-retina
                />
                {/* LAYERS */}
                {/* LAYER NR. 1 [ for overlay ] */}
                <div
                  className="tp-caption tp-shape tp-shapewrapper "
                  id="slide-902-layer-0"
                  data-x="['center','center','center','center']"
                  data-hoffset="['0','0','0','0']"
                  data-y="['middle','middle','middle','middle']"
                  data-voffset="['0','0','0','0']"
                  data-width="full"
                  data-height="full"
                  data-whitespace="nowrap"
                  data-type="shape"
                  data-basealign="slide"
                  data-responsive_offset="off"
                  data-responsive="off"
                  data-frames='[
                         {"from":"opacity:0;","speed":1000,"to":"o:1;","delay":0,"ease":"Power4.easeOut"},
                         {"delay":"wait","speed":1000,"to":"opacity:0;","ease":"Power4.easeOut"}
                         ]'
                  data-textalign="['left','left','left','left']"
                  data-paddingtop="[0,0,0,0]"
                  data-paddingright="[0,0,0,0]"
                  data-paddingbottom="[0,0,0,0]"
                  data-paddingleft="[0,0,0,0]"
                  style={{
                    zIndex: 1,
                    backgroundColor: "rgba(255, 255, 255, 0.3)",
                    borderColor: "rgba(0, 0, 0, 0)",
                    borderWidth: 0,
                  }}
                ></div>
                {/* LAYER NR. 4 [ for title ] */}
                <div
                  className="tp-caption   tp-resizeme"
                  id="slide-902-layer-2"
                  data-x="['left','left','left','left']"
                  data-hoffset="['50','130','130','130']"
                  data-y="['top','top','top','top']"
                  data-voffset="['240','240','180','200']"
                  data-fontsize="['72','72','62','52']"
                  data-lineheight="['82','82','72','62']"
                  data-width="['700','700','700','500']"
                  data-height="['none','none','none','none']"
                  data-whitespace="['normal','normal','normal','normal']"
                  data-type="text"
                  data-responsive_offset="on"
                  data-frames='[{"delay":"+790","speed":1500,"sfxcolor":"#fff","sfx_effect":"blockfromleft","frame":"0","from":"z:0;","to":"o:1;","ease":"Power4.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                  data-textalign="['left','left','left','left']"
                  data-paddingtop="[5,5,5,5]"
                  data-paddingright="[0,0,0,0]"
                  data-paddingbottom="[0,0,0,0]"
                  data-paddingleft="[0,0,0,0]"
                  style={{
                    zIndex: 13,
                    whiteSpace: "normal",
                    fontWeight: 700,
                    color: "#111",
                    borderWidth: 0,
                    fontFamily: '"Poppins", sans-serif',
                    textTransform: "uppercase",
                  }}
                >
                  <div>Clean You Can See, Feel, and Trust.</div>
                </div>
                {/* LAYER NR. 5 [ for block] */}
                <div
                  className="tp-caption rev-btn  tp-resizeme slider-block"
                  id="slide-902-layer-3"
                  data-x="['left','left','left','left']"
                  data-hoffset="['0','80','80','60']"
                  data-y="['middle','middle','middle','middle']"
                  data-voffset="['0','0','0','0']"
                  data-width="none"
                  data-height="none"
                  data-whitespace="nowrap"
                  data-type="button"
                  data-responsive_offset="on"
                  data-frames='[{"from":"y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":1000,"ease":"Power3.easeInOut"},
                             {"delay":"wait","speed":500,"to":"y:[-100%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power1.easeIn"}]'
                  data-textalign="['left','left','left','left']"
                  data-paddingtop="[250,250,250,200]"
                  data-paddingright="[150,150,150,150]"
                  data-paddingbottom="[250,250,250,200]"
                  data-paddingleft="[150,150,150,150]"
                  style={{ zIndex: 8 }}
                >
                  <div
                    className="rs-wave"
                    data-speed={1}
                    data-angle={0}
                    data-radius="2px"
                  />
                </div>
                {/* LAYER NR. 5 [ for block] */}
                <div
                  className="tp-caption   tp-resizeme"
                  id="slide-902-layer-4"
                  data-x="['left','left','left','left']"
                  data-hoffset="['50','130','130','130']"
                  data-y="['top','top','top','top']"
                  data-voffset="['410','410','350','340']"
                  data-fontsize="['20','20','30','30']"
                  data-lineheight="['28','28','48','38']"
                  data-width="['600','600','700','600']"
                  data-height="['none','none','none','none']"
                  data-whitespace="['normal','normal','normal','normal']"
                  data-type="text"
                  data-responsive_offset="on"
                  data-frames='[{"delay":"+790","speed":1500,"sfxcolor":"#fff","sfx_effect":"blockfromleft","frame":"0","from":"z:0;","to":"o:1;","ease":"Power4.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                  data-textalign="['left','left','left','left']"
                  data-paddingtop="[5,5,5,5]"
                  data-paddingright="[0,0,0,0]"
                  data-paddingbottom="[0,0,0,0]"
                  data-paddingleft="[0,0,0,0]"
                  style={{
                    zIndex: 13,
                    whiteSpace: "normal",
                    fontWeight: 500,
                    color: "#111",
                    borderWidth: 0,
                    fontFamily: '"Poppins", sans-serif',
                  }}
                ></div>
                {/* LAYER NR. 6 [ for see all service botton ] */}
                <div
                  className="tp-caption tp-resizeme"
                  id="slide-902-layer-5"
                  data-x="['left','left','left','left']"
                  data-hoffset="['50','130','130','130']"
                  data-y="['top','top','top','top']"
                  data-voffset="['500','520','500','480']"
                  data-lineheight="['none','none','none','none']"
                  data-width="['300','300','300','300']"
                  data-height="['none','none','none','none']"
                  data-whitespace="['normal','normal','normal','normal']"
                  data-type="text"
                  data-responsive_offset="on"
                  data-frames='[ 
                         {"from":"y:100px(R);opacity:0;","speed":2000,"to":"o:1;","delay":2000,"ease":"Power4.easeOut"},
                         {"delay":"wait","speed":1000,"to":"y:-50px;opacity:0;","ease":"Power2.easeInOut"}
                         ]'
                  data-textalign="['left','left','left','left']"
                  data-paddingtop="[0,0,0,0]"
                  data-paddingright="[0,0,0,0]"
                  data-paddingbottom="[0,0,0,0]"
                  data-paddingleft="[0,0,0,0]"
                  style={{ zIndex: 100, textTransform: "uppercase" }}
                >
                  <NavLink
                    to="/services"
                    className="site-button-secondry btn-effect"
                  >
                    More About
                  </NavLink>
                </div>
              </li>
              {/* SLIDE 3*/}
              <li
                data-index="rs-903"
                data-transition="fade"
                data-slotamount="default"
                data-hideafterloop={0}
                data-hideslideonmobile="off"
                data-easein="default"
                data-easeout="default"
                data-masterspeed="default"
                data-thumb={require("./../../images/main-slider/slider1/slide3.jpg")}
                data-rotate={0}
                data-fstransition="fade"
                data-fsmasterspeed={300}
                data-fsslotamount={7}
                data-saveperformance="off"
                data-title
                data-param1
                data-param2
                data-param3
                data-param4
                data-param5
                data-param6
                data-param7
                data-param8
                data-param9
                data-param10
                data-description
              >
                {/* MAIN IMAGE */}
                <img
                  src={require("./../../images/main-slider/slider1/slide3.jpg")}
                  alt=""
                  data-lazyload={require("./../../images/main-slider/slider1/slide3.jpg")}
                  data-bgposition="center center"
                  data-bgfit="cover"
                  data-bgparallax={4}
                  className="rev-slidebg"
                  data-no-retina
                />
                {/* LAYERS */}
                {/* LAYER NR. 1 [ for overlay ] */}
                <div
                  className="tp-caption tp-shape tp-shapewrapper "
                  id="slide-903-layer-0"
                  data-x="['center','center','center','center']"
                  data-hoffset="['0','0','0','0']"
                  data-y="['middle','middle','middle','middle']"
                  data-voffset="['0','0','0','0']"
                  data-width="full"
                  data-height="full"
                  data-whitespace="nowrap"
                  data-type="shape"
                  data-basealign="slide"
                  data-responsive_offset="off"
                  data-responsive="off"
                  data-frames='[
                         {"from":"opacity:0;","speed":1000,"to":"o:1;","delay":0,"ease":"Power4.easeOut"},
                         {"delay":"wait","speed":1000,"to":"opacity:0;","ease":"Power4.easeOut"}
                         ]'
                  data-textalign="['left','left','left','left']"
                  data-paddingtop="[0,0,0,0]"
                  data-paddingright="[0,0,0,0]"
                  data-paddingbottom="[0,0,0,0]"
                  data-paddingleft="[0,0,0,0]"
                  style={{
                    zIndex: 1,
                    backgroundColor: "rgba(255, 255, 255, 0.3)",
                    borderColor: "rgba(0, 0, 0, 0)",
                    borderWidth: 0,
                  }}
                ></div>
                {/* LAYER NR. 4 [ for title ] */}
                <div
                  className="tp-caption   tp-resizeme"
                  id="slide-903-layer-2"
                  data-x="['left','left','left','left']"
                  data-hoffset="['50','130','130','130']"
                  data-y="['top','top','top','top']"
                  data-voffset="['240','240','180','200']"
                  data-fontsize="['72','72','62','52']"
                  data-lineheight="['82','82','72','62']"
                  data-width="['700','700','700','500']"
                  data-height="['none','none','none','none']"
                  data-whitespace="['normal','normal','normal','normal']"
                  data-type="text"
                  data-responsive_offset="on"
                  data-frames='[{"delay":"+790","speed":1500,"sfxcolor":"#fff","sfx_effect":"blockfromleft","frame":"0","from":"z:0;","to":"o:1;","ease":"Power4.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                  data-textalign="['left','left','left','left']"
                  data-paddingtop="[5,5,5,5]"
                  data-paddingright="[0,0,0,0]"
                  data-paddingbottom="[0,0,0,0]"
                  data-paddingleft="[0,0,0,0]"
                  style={{
                    zIndex: 13,
                    whiteSpace: "normal",
                    fontWeight: 700,
                    color: "#111",
                    borderWidth: 0,
                    fontFamily: '"Poppins", sans-serif',
                    textTransform: "uppercase",
                  }}
                >
                  <div>Unleash the Sparkle with DeepShine Cleaning</div>
                </div>
                {/* LAYER NR. 5 [ for block] */}
                <div
                  className="tp-caption rev-btn  tp-resizeme slider-block"
                  id="slide-903-layer-3"
                  data-x="['left','left','left','left']"
                  data-hoffset="['0','80','80','60']"
                  data-y="['middle','middle','middle','middle']"
                  data-voffset="['0','0','0','0']"
                  data-width="none"
                  data-height="none"
                  data-whitespace="nowrap"
                  data-type="button"
                  data-responsive_offset="on"
                  data-frames='[{"from":"y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":1000,"ease":"Power3.easeInOut"},
                             {"delay":"wait","speed":500,"to":"y:[-100%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power1.easeIn"}]'
                  data-textalign="['left','left','left','left']"
                  data-paddingtop="[250,250,250,200]"
                  data-paddingright="[150,150,150,150]"
                  data-paddingbottom="[250,250,250,200]"
                  data-paddingleft="[150,150,150,150]"
                  style={{ zIndex: 8 }}
                >
                  <div
                    className="rs-wave"
                    data-speed={1}
                    data-angle={0}
                    data-radius="2px"
                  />
                </div>
                {/* LAYER NR. 5 [ for block] */}
                <div
                  className="tp-caption   tp-resizeme"
                  id="slide-903-layer-4"
                  data-x="['left','left','left','left']"
                  data-hoffset="['50','130','130','130']"
                  data-y="['top','top','top','top']"
                  data-voffset="['410','410','350','340']"
                  data-fontsize="['20','20','30','30']"
                  data-lineheight="['28','28','48','38']"
                  data-width="['600','600','700','600']"
                  data-height="['none','none','none','none']"
                  data-whitespace="['normal','normal','normal','normal']"
                  data-type="text"
                  data-responsive_offset="on"
                  data-frames='[{"delay":"+790","speed":1500,"sfxcolor":"#fff","sfx_effect":"blockfromleft","frame":"0","from":"z:0;","to":"o:1;","ease":"Power4.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                  data-textalign="['left','left','left','left']"
                  data-paddingtop="[5,5,5,5]"
                  data-paddingright="[0,0,0,0]"
                  data-paddingbottom="[0,0,0,0]"
                  data-paddingleft="[0,0,0,0]"
                  style={{
                    zIndex: 13,
                    whiteSpace: "normal",
                    fontWeight: 500,
                    color: "#111",
                    borderWidth: 0,
                    fontFamily: '"Poppins", sans-serif',
                  }}
                ></div>
                {/* LAYER NR. 6 [ for see all service botton ] */}
                <div
                  className="tp-caption tp-resizeme"
                  id="slide-903-layer-5"
                  data-x="['left','left','left','left']"
                  data-hoffset="['50','130','130','130']"
                  data-y="['top','top','top','top']"
                  data-voffset="['500','520','500','480']"
                  data-lineheight="['none','none','none','none']"
                  data-width="['300','300','300','300']"
                  data-height="['none','none','none','none']"
                  data-whitespace="['normal','normal','normal','normal']"
                  data-type="text"
                  data-responsive_offset="on"
                  data-frames='[ 
                         {"from":"y:100px(R);opacity:0;","speed":2000,"to":"o:1;","delay":2000,"ease":"Power4.easeOut"},
                         {"delay":"wait","speed":1000,"to":"y:-50px;opacity:0;","ease":"Power2.easeInOut"}
                         ]'
                  data-textalign="['left','left','left','left']"
                  data-paddingtop="[0,0,0,0]"
                  data-paddingright="[0,0,0,0]"
                  data-paddingbottom="[0,0,0,0]"
                  data-paddingleft="[0,0,0,0]"
                  style={{ zIndex: 100, textTransform: "uppercase" }}
                >
                  <NavLink
                    to="/services"
                    className="site-button-secondry btn-effect"
                  >
                    More About
                  </NavLink>
                </div>
              </li>
            </ul>
            <div
              className="tp-bannertimer tp-bottom"
              style={{ visibility: "hidden !important" }}
            />
            <div className="multi-line-animation">
              <div className="multi-line-one">
                <div className="animation-block1 bounce-1" />
              </div>
              <div className="multi-line-two">
                <div className="animation-block2 bounce-2" />
              </div>
              <div className="multi-line-three">
                <div className="animation-block1 bounce-1" />
              </div>
              <div className="multi-line-four">
                <div className="animation-block2 bounce-2" />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Slider;
