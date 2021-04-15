import React from 'react';

function GridLayout2(props) {
    return (
       <section className={`l2-container`}>
           <div className="A container">
               <div className={`overflow-hidden`}>
                   <img src="images/14.jpg" alt=""/>
               </div>
           </div>
           <div className="B container">
               <div className="overflow-hidden">
                   <img src="images/building.jpg" alt=""/>
               </div>
           </div>
           <div className="C">
               <div className="overflow-hidden">
                   <img src="https://www.clipartkey.com/mpngs/m/291-2911974_tower-clipart-tall-thing-building.png" alt=""/>
               </div>
           </div>
           <div className="D">
               <div className="overflow-hidden">
                   <img src="https://www.clipartkey.com/mpngs/m/291-2911974_tower-clipart-tall-thing-building.png" alt=""/>
               </div>
           </div>
       </section>
    );
}

export default GridLayout2;
