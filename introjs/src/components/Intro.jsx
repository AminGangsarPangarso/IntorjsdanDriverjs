// import { useEffect } from 'react';
// import introJs from 'intro.js';
// import 'intro.js/introjs.css';

import { driver } from "driver.js";
import "driver.js/dist/driver.css";

const IntroContoh = () => {
//   useEffect(() => {
//     const intro = introJs();
//     introJs().setOptions({
//         showButtons: false
//       }).start()
//     intro.setOptions({
//       steps: [
//         {
//           element: document.querySelector('.step-1'),
//           intro: 'Ini adalah langkah pertama.',
//           position: 'bottom',
//         },
//         {
//           element: document.querySelector('.step-2'),
//           intro: 'Ini adalah langkah kedua.',
//           position: 'top',
//         },
//         {
//           element: document.querySelector('.step-3'),
//           intro: 'Ini adalah langkah ketiga.',
//           position: 'left',
//         },
//       ],
//     });

//     intro.start();

//     return () => {
//       intro.exit();
//     };
//   }, []);

const divStyle = {
   width:'60px'
  };

const driverObj = driver({
    showProgress: true,
    showButtons: ['next', 'previous'],
    steps: [
      { element: '.step-1', popover: { title: 'fadsfasdf', description: 'loremasdfasddfasd' , side: "right", align: 'start'} },
      { element: '.step-2', popover: { title: 'Title', description: 'Description', side: "bottom", align: 'center' } },
      { element: '.step-3', popover: { title: 'Title', description: 'Description' , side: "right", align: 'end'} },
      
    ]
  });
  
  driverObj.drive();
  return (
    <div>
        <center>
        <h1>Contoh Penggunaan Intro.js dengan React</h1>
      <p className="step-1">Langkah pertama</p>
      <p className="step-2"style={divStyle}>Langkah kedua</p>
      <p className="step-3">Langkah ketiga</p>
        </center>
   
    </div>
  );
};

export default IntroContoh;
