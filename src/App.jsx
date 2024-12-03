import "./index.css";
import Canvas from "./Canvas";
import data from "./data";
import LocomotiveScroll from "locomotive-scroll";
import { useEffect, useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Circ, Expo } from "gsap/all";

function App() {
  const [showCanvas, setShowCanvas] = useState(false);
  const headingref = useRef(null);
  const growingSpan = useRef(null);

  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
  }, []);

  useEffect(() => {
    const handleClick = (e) => {
      setShowCanvas((prevShowCanvas) => {
        if (!prevShowCanvas) {
          gsap.set(growingSpan.current, {
            top: e.clientY,
            left: e.clientX,
          });

          gsap.to("body", {
            color: "#000",
            backgroundColor: "#fd2c2a",
            duration: 1.2,
            ease: "power2.inOut",
          });

          gsap.to(growingSpan.current, {
            scale: 1000,
            duration: 2,
            ease: "power2.inOut",
            onComplete: () => {
              gsap.set(growingSpan.current, {
                scale: 0,
                clearProps: "all",
              });
            },
          });
        } else {
          gsap.to("body", {
            color: "#fff",
            backgroundColor: "#000",
            duration: 1.2,
            ease: "power2.inOut",
          });
        }

        return !prevShowCanvas;
      });
    };

    const headingElement = headingref.current;
    headingElement.addEventListener("click", handleClick);

    // Clean up event listener on unmount
    return () => headingElement.removeEventListener("click", handleClick);
  }, []);

  return (
    <>
      <span
        ref={growingSpan}
        className="growing rounded-full block fixed top-[-20px] left-[-20px] w-5 h-5"
      ></span>
      <div className="w-full relative min-h-screen font-['Helvetica_Now_Display']">
        {showCanvas &&
          data[0].map((canvasdets, index) => <Canvas details={canvasdets} />)}
        <div className="w-full relative z-[1] h-screen ">
          <nav className="w-full p-8 flex justify-between z-50">
            <div className="brand text-2xl font-md">Thirtysixstudio</div>
            <div className="links flex gap-10">
              {[
                "What we do",
                "Who we are",
                "How we give back",
                "Talk to us",
              ].map((link, index) => (
                <a
                  key={index}
                  href={`#${link.toLowerCase()}`}
                  className="text-md hover:text-gray-300"
                >
                  {link}
                </a>
              ))}
            </div>
          </nav>
          <div className="textcontainer  w-full px-[20%]">
            <div className="text w-[50%]">
              <h3 className="text-4xl leading-[1.2]">
                At Thirtysixstudio, we build immersive digital experiences for
                brands with a purpose.
              </h3>
              <p className="text-2xl w-[80%] mt-10 font-normal">
                We are a team of designers, developers, and strategists who are
                passionate about creating digital experiences that are both
                beautiful and functional.
              </p>
              <p className="text-md mt-10">scroll</p>
            </div>
          </div>
          <div className="w-full absolute bottom-0 left-0">
            <h1
              ref={headingref}
              className="text-[14rem] font-normal tracking-tight leading-none pl-5"
            >
              Thirtysixstudios
            </h1>
          </div>
        </div>
      </div>
      <div className="w-full relative h-screen  mt-32 px-10">
        {showCanvas &&
          data[1].map((canvasdets, index) => <Canvas details={canvasdets} />)}
        <h1 className="text-4xl tracking-tighter">About The Brand</h1>
        <p className="text-2xl leading-[1.8] w-[80%] mt-10 font-light">
          we are a team of designers, developers, and strategists who are
          passionate about creating digital experiences that are both beautiful
          and functional, we are a team of designers, developers, and
          strategists who are passionate about creating digital experiences that
          are both beautiful and functional.
        </p>

        <img
          className="w-[80%] mt-10"
          src="https://directus.funkhaus.io/assets/b3b5697d-95a0-4af5-ba59-b1d423411b1c?withoutEnlargement=true&fit=outside&width=1400&height=1400"
          alt=""
        />
      </div>
    </>
  );
}

export default App;

// import './index.css';
// import Canvas from './Canvas';
// import data from "./data";
// import LocomotiveScroll from 'locomotive-scroll';
// import { useEffect, useState, useRef } from 'react';
// import { useGSAP } from '@gsap/react';
// import gsap from 'gsap';

// function App() {
//   const [showCanvas, setShowCanvas] = useState(false);
//   const headingRef = useRef(null);
//   const growingSpan = useRef(null);

//   useEffect(() => {
//     // Initialize LocomotiveScroll
//     const locomotiveScroll = new LocomotiveScroll();

//     // Add click event to heading
//     //   headingRef.current.addEventListener("click", (e) => {
//     //     gsap.set(
//     //     growingSpan.current,{
//     //       top:e.clientY,
//     //       left:e.clientX,
//     //     }
//     //     )
//     //     gsap.to(growingSpan.current,{
//     //       scale:10,
//     //       duration:1,
//     //       ease:"power2.inOut",
//     //     })
//     //     console.log(e.clientX,e.clientY)
//     //     setShowCanvas(!showCanvas);
//     //   });



//     // }, [showCanvas]);
//   }, []);

//   useGSAP(() => {
//     //   gsap.set(growinSpan)
//     // gsap.to(growingSpan.current,{
//     //     scale:10,
//     //     duration:0.5,
//     //     ease:"power2.inOut"
//     //   })
//     //  Add click event to heading
//     headingRef.current.addEventListener("click", (e) => {
//       setShowCanvas(!showCanvas);
//       gsap.set(growingSpan.current, {
//         top: e.clientY,
//         left: e.clientX,
//       });

//     //   gsap.to(growingSpan.current, {
//     //     scale: 1000,
//     //     duration: 1.2,
//     //     ease: "power2.inOut",
//     //   });
//     // });
//     gsap.t0("body",{
//       color:'#000',
//       duration:2,
//       ease:"power2.inOut",
//     });
//     gsap.to(growingSpan.current,{
//       scale:1000,
//       duration:1,
//       ease:"power2.inOut",
//       onComplete:()=>{
//         gsap.set(growingSpan.current,{
//           scale:0,
//           clearProps:'all',
//         });
//         // gsap.set("body",{
//         //  backgroundColor:"#fs2c2a",
//         // //  color:"#000",
//         // });
//       },
//     });
//   });
//   }, [showCanvas]);


//   return (
//     <>
//       <span ref={growingSpan} className='growing rounded-full  block fixed top-[-20px] left-[-20px] w-5 h-5'></span>
//       {/* Main container with LocomotiveScroll support */}
//       <div data-scroll-container className="w-full relative min-h-screen font-['Helvetica_Now_Display'] pt-20">
//         {/* Render Canvas only when showCanvas is true */}
//         {showCanvas && data[0].map((canvasDets, index) => (
//           <Canvas key={index} details={canvasDets} />
//         ))}

//         {/* Navbar */}
//         <div className="w-full relative z-[1] h-screen text-white">
//           <nav className="fixed top-0 left-0 w-full p-8 flex justify-between z-50">
//             <div className="brand text-4xl font-regular">Thirtysixstudio</div>
//             <div className="links flex gap-10 text-2xl">
//               {["Home", "About", "Project", "Contacts"].map((link, index) => (
//                 <a
//                   key={index}
//                   href={`#${link.toLowerCase()}`}
//                   className="text-md hover:text-gray-300"
//                 >
//                   {link}
//                 </a>
//               ))}
//             </div>
//           </nav>

//           {/* Hero Section */}
//           <div className="textcontainer w-full px-[20%]">
//             <div className="text w-[50%]">
//               <h3 className="text-4xl leading-[1.2]">
//                 At ThirtySixStudios, we build immersive digital experiences for brands with a purpose.
//               </h3>
//               <p className="text-lg w-[80%] mt-10 font-normal">
//                 We are a team of designers, developers, and strategists who are passionate about creating digital experiences that are both beautiful and functional.
//               </p>
//               <p className="text-md mt-10">scroll</p>
//             </div>
//           </div>

//           {/* Large Heading */}
//           <div className="w-full absolute bottom-0 left-10">
//             <h1
//               ref={headingRef}
//               className="text-[14rem] font-normal tracking-tight leading-none pl-5"
//             >
//               Thirtysixstudios
//             </h1>
//           </div>
//         </div>
//       </div>

//       {/* About Section */}
//       <div className="w-full relative h-screen text-white mt-32 px-10">
//         {data[1].map((canvasDets, index) => (
//           <Canvas key={index} details={canvasDets} />
//         ))}

//         <h1 className="text-4xl tracking-tighter">About the Brand</h1>
//         <p className="text-2xl leading-[1.8] w-[80%] mt-10 font-light">
//           We are a team of designers, developers, and strategists who are passionate about creating digital experiences that are both beautiful and functional.
//         </p>
//         <img
//           className="w-[80%]  mt-10"
//           src="https://directus.funkhaus.io/assets/b3b5697d-95a0-4af5-ba59-b1d423411b1c?withoutEnlargement=true&fit=outside&width=1400&height=1400"
//           alt="Brand"
//         />
//       </div>

//     </>
//   );
// }

// export default App;
