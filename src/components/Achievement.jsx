import React from "react";
import users from "../../public/users.png";
import algo from "../../public/algo.png";
import trade from "../../public/trade.png";
import api from "../../public/api.png";

export default function Achievement() {
  return (
    <div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 md:mx-36 mx-10 mt-10 mb-44">
        <div className="card border-0 shadow-md p-4 rounded-md text-center mb-10">
          <div className="text-center mt-2 mb-4">
            {/*SVG images can be used in phase 2*/}
            {/*SVG images can be used in phase 2*/}
            <img src={users} alt="graph" width="80px" className="mx-auto" />
          </div>
          <div className=" text-5xl mt-5 mb-3">
            <strong>405k+</strong>
          </div>
          <div className="pb-0">signups</div>
        </div>

        <div className="card border-0 shadow-md p-4 rounded-md text-center mb-10">
          <div className="text-center mt-2 mb-4">
            {/*SVG images can be used in phase 2*/}
            {/*SVG images can be used in phase 2*/}
            <img src={algo} alt="graph" width="80px" className="mx-auto" />
          </div>
          <div className="text-5xl mt-5 mb-3">
            <strong>~60k</strong>
          </div>
          <div className="pb-0">algos</div>
        </div>

        <div className="card border-0 shadow-md p-4 rounded-md text-center mb-10">
          <div className="text-center mt-2 mb-4">
            {/*SVG images can be used in phase 2*/}
            {/*SVG images can be used in phase 2*/}
            <img src={trade} alt="graph" width="80px" className="mx-auto" />
          </div>
          <div className="text-5xl mt-5 mb-3">
            <strong>~175k</strong>
          </div>
          <div className="pb-0">live trades daily</div>
        </div>

        <div className="card border-2 shadow-md p-4 rounded-md text-center mb-10">
          <div className="text-center mt-2 mb-4">
            {/*SVG images can be used in phase 2*/}
            {/*SVG images can be used in phase 2*/}
            <img src={api} alt="graph" width="80px" className="mx-auto" />
          </div>
          <div className="text-5xl mt-5 mb-3">
            <strong>100+</strong>
          </div>
          <div className="pb-0">broker APIs connected</div>
        </div>
      </div>
    </div>
  );
}
