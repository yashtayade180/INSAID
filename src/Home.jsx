import React from "react";
import web2 from "../src/images/Home2.svg";
import Common from "./Common";
import Sdata from "./Sdata";
import Card from "./Card";

const Home = () => {
  return (
    <>
      <Common
        name="Grow your business with"
        imgsrc={web2}
        visit="/service"
        btname="Get Started"
        desc="Your Goals Are Our Goals, Too."
        desc2="Helping businesses succeed is what we do. It’s our privilege to help you grow and achieve your business objectives."
      />
      <div className="my-5">
        <h1 className="text-center"> Our Services </h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              {Sdata.map((val, ind) => {
                return (
                  <Card
                    key={ind}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    info={val.info}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
