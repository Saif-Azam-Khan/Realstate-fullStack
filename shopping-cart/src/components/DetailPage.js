import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { ADD } from "../redux/actions/action";
import { useSelector } from "react-redux/es/exports";
import "./DetailPage.css";

const DetailPage = () => {
  const reduxData = useSelector((state) => state.cartreducer.details);

  const [data, setData] = useState(reduxData);
  const { id } = useParams([]);

  const dispatch = useDispatch();
  const send = (e) => {
    dispatch(ADD(e));
  };

  const compare = () => {
    let comparedata = reduxData.filter((e) => {
      return e.id == id;
    });
    setData(comparedata);
    console.log(comparedata);
  };

  useEffect(() => {
    compare();
  }, [id]);

  return (
    <div className="container mt-2">
      <h2 className="text-center"> Deatil Page</h2>
      <section className="container mt-3">
        {data.map((ele) => {
          return (
            <div>
              <div className="items_img">
                <img src={ele.imgdata}></img>
              </div>
              <br></br>
              <div className="details">
                <p>
                  <b>Name:</b> {ele.rname}
                </p>
                <p>
                  <b>Price:</b> {ele.price}
                </p>
                <div className="button_div d-flex justify-content-center">
                <Button
                  variant="primary"
                  onClick={(element) => send(element)}
                >
                  Add to Cart
                </Button>
                </div>
                <p className="box">
                  <b>Detail:</b> {ele.details}
                </p>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default DetailPage;
