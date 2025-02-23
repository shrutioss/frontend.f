// import React, { useContext } from "react";
// import { AppContext } from "../context/App_Context";

// const Home = () => {
//   const { recipe } = useContext(AppContext);

//   return (
//     <div className="text-center mx-auto" style={{ width: "1200px" }}>
//       <div className="row d-flex justify-content-center align-items-center">
//         {recipe.map((data) => (
//           <div key={data._id} className="col-md-3 my-3">
//             <div className="card bg-dark" style={{ width: "18rem" }}>
//               <div className="d-flex justify-content-center align-items-center p-3">
//                 <img
//                   src={data.imgurl}
//                   className="card-img-top"
//                   alt="..."
//                   style={{
//                     width: "200px",
//                     height: "200px",
//                     borderRadius: "10px",
//                     border: "2px solid yellow"
//                   }}
//                 />
//               </div>
//               <div className="card-body">
//                 {/* Additional content can go here */}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Home;
//     </div>
//   )
// }

// export default Home
import React from 'react'

const Home = () => {
  return (
    <div>
        HOME
      {/* <h5>WELCOME TO HOME PAHE</h5> */}
    </div>
  )
}

export default Home
