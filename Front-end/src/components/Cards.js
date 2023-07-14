import { useState } from "react";
import Card from "react-bootstrap/Card";
// import { ADD } from "../redux/actions/action";
import { NavLink } from "react-router-dom";
import Form from "react-bootstrap/Form";
// import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/exports";


// const BASE_URL = "http://localhost:8080";

function Cards() {
  const datas = useSelector((state) => state.cartreducer.details);
  const [filters, setFilters] = useState("all");

  const [a, setA] = useState(false);
  const [b, setB] = useState(false);
  const [f, setF] = useState(false);
  const [r, setR] = useState(false);
  const [u, setU] = useState(false);

  const belows = [...datas.filter((data) => data.price <= 100000)];
  const aboves = [...datas.filter((data) => data.price > 100000)];
  const bunglows = [...datas.filter((data) => data.type === "Bungalow")];
  const flats = [...datas.filter((data) => data.type === "Flat")];
  const residentials = [
    ...datas.filter((data) => data.type === "Residential Land"),
  ];
  console.log(belows);

  const belowFlat = flats.filter((flats) =>
    belows.find((belows) => belows.id !== flats.id)
  );
  const aboveFlat = flats.filter((flats) =>
    aboves.find((aboves) => aboves.id === flats.id)
  );

  const belowBunglow = bunglows.filter((bunglows) =>
    belows.find((belows) => belows.id !== bunglows.id)
  );
  const aboveBunglow = bunglows.filter((bunglows) =>
    aboves.find((aboves) => aboves.id !== bunglows.id)
  );

  const belowLand = residentials.filter((residentials) =>
    belows.find((belows) => residentials.id === belows.id)
  );
  const aboveLand = residentials.filter((residentials) =>
    aboves.find((aboves) => aboves.id !== residentials.id)
  );

  const b100k = () => {
    setFilters("below");
    setB(!b);
    if (f) {
      bFlat();
    } else if (u) {
      bBunglow();
    } else if (r) {
      bLand();
    }
  };
  const a100k = () => {
    setFilters("above");
    setA(!a);
    if (f) {
      aFlat();
    } else if (u) {
      aBunglow();
    } else if (r) {
      aLand();
    }
  };
  const flat = () => {
    setFilters("flats");
    setF(!f);
    if (a) {
      aFlat();
    } else if (b) {
      bFlat();
    }
  };
  const bunglow = () => {
    setFilters("bunglows");
    setU(!u);
    if (a) {
      aBunglow();
    } else if (b) {
      bBunglow();
    }
  };
  const residential = () => {
    setFilters("residentials");
    setR(!r);
    if (a) {
      aLand();
    } else if (b) {
      bLand();
    }
  };
  const aBunglow = () => {
    setFilters("aboveBunglow");
  };
  const bBunglow = () => {
    setFilters("belowBunglow");
  };
  const aLand = () => {
    setFilters("aboveLand");
  };
  const bLand = () => {
    setFilters("belowLand");
  };
  const aFlat = () => {
    setFilters("aboveFlat");
  };
  const bFlat = () => {
    setFilters("belowFlat");
  };

  // const dispatch = useDispatch();

  // const send = (e) => {
  //   dispatch(ADD(e));
  // };

  return (
    <div className="container mt-3">
      <Form>
        <Form.Check
          type="radio"
          label="Show products under 100000"
          id="u100k"
          name="group1"
          className="switch"
          onClick={() => {
            a100k();
          }}
        />
        <Form.Check
          type="radio"
          label="Show products above 100000"
          id="a100k"
          name="group1"
          className="switch"
          onClick={() => {
            b100k();
          }}
        />
      </Form>

      <Form className="type">
        <Form.Check
          type="radio"
          label="Show only Flats"
          id="f"
          name="group2"
          className="switch"
          onClick={() => {
            flat();
          }}
        />
        <Form.Check
          type="radio"
          label="Show only Residential Lands"
          id="r"
          name="group2"
          className="switch"
          onClick={() => {
            residential();
          }}
        />
        <Form.Check
          type="radio"
          label="Show only Bunglows"
          id="u"
          name="group2"
          className="switch"
          onClick={() => {
            bunglow();
          }}
        />
      </Form>
      <br></br>
      <br></br>
      <h2 className="text-center">Add to Cart Projects</h2>
      <div className="row d-flex justify-content-center align-items-center">
        {filters === "above"
          ? aboves.map((element) => {
              return (
                <>
                  <Card
                    style={{ width: "22rem", border: "none" }}
                    className="mx-2 mt-4 card_style"
                  >
                    <NavLink to={`/details/${element.id}`}>
                      <Card.Img
                        variant="top"
                        src={element.imgdata}
                        style={{ height: "16rem" }}
                        className="mt-3"
                      />
                    </NavLink>
                    <Card.Body>
                      <Card.Title>{element.rname}</Card.Title>
                      <Card.Text>Price : ₹ {element.price}</Card.Text>
                    </Card.Body>
                  </Card>
                </>
              );
            })
          : filters === "below"
          ? belows.map((element) => {
              return (
                <>
                  <Card
                    style={{ width: "22rem", border: "none" }}
                    className="mx-2 mt-4 card_style"
                  >
                    <NavLink to={`/details/${element.id}`}>
                      <Card.Img
                        variant="top"
                        src={element.imgdata}
                        style={{ height: "16rem" }}
                        className="mt-3"
                      />
                    </NavLink>
                    <Card.Body>
                      <Card.Title>{element.rname}</Card.Title>
                      <Card.Text>Price : ₹ {element.price}</Card.Text>
                    </Card.Body>
                  </Card>
                </>
              );
            })
          : filters === "flats"
          ? flats.map((element) => {
              return (
                <>
                  <Card
                    style={{ width: "22rem", border: "none" }}
                    className="mx-2 mt-4 card_style"
                  >
                    <NavLink to={`/details/${element.id}`}>
                      <Card.Img
                        variant="top"
                        src={element.imgdata}
                        style={{ height: "16rem" }}
                        className="mt-3"
                      />
                    </NavLink>
                    <Card.Body>
                      <Card.Title>{element.rname}</Card.Title>
                      <Card.Text>Price : ₹ {element.price}</Card.Text>
                    </Card.Body>
                  </Card>
                </>
              );
            })
          : filters === "belowFlat"
          ? belowFlat.map((element) => {
              return (
                <>
                  <Card
                    style={{ width: "22rem", border: "none" }}
                    className="mx-2 mt-4 card_style"
                  >
                    <NavLink to={`/details/${element.id}`}>
                      <Card.Img
                        variant="top"
                        src={element.imgdata}
                        style={{ height: "16rem" }}
                        className="mt-3"
                      />
                    </NavLink>
                    <Card.Body>
                      <Card.Title>{element.rname}</Card.Title>
                      <Card.Text>Price : ₹ {element.price}</Card.Text>
                    </Card.Body>
                  </Card>
                </>
              );
            })
          : filters === "aboveFlat"
          ? aboveFlat.map((element) => {
              return (
                <>
                  <Card
                    style={{ width: "22rem", border: "none" }}
                    className="mx-2 mt-4 card_style"
                  >
                    <NavLink to={`/details/${element.id}`}>
                      <Card.Img
                        variant="top"
                        src={element.imgdata}
                        style={{ height: "16rem" }}
                        className="mt-3"
                      />
                    </NavLink>
                    <Card.Body>
                      <Card.Title>{element.rname}</Card.Title>
                      <Card.Text>Price : ₹ {element.price}</Card.Text>
                    </Card.Body>
                  </Card>
                </>
              );
            })
          : filters === "bunglows"
          ? bunglows.map((element) => {
              return (
                <>
                  <Card
                    style={{ width: "22rem", border: "none" }}
                    className="mx-2 mt-4 card_style"
                  >
                    <NavLink to={`/details/${element.id}`}>
                      <Card.Img
                        variant="top"
                        src={element.imgdata}
                        style={{ height: "16rem" }}
                        className="mt-3"
                      />
                    </NavLink>
                    <Card.Body>
                      <Card.Title>{element.rname}</Card.Title>
                      <Card.Text>Price : ₹ {element.price}</Card.Text>
                    </Card.Body>
                  </Card>
                </>
              );
            })
          : filters === "aboveBunglows"
          ? aboveBunglow.map((element) => {
              return (
                <>
                  <Card
                    style={{ width: "22rem", border: "none" }}
                    className="mx-2 mt-4 card_style"
                  >
                    <NavLink to={`/details/${element.id}`}>
                      <Card.Img
                        variant="top"
                        src={element.imgdata}
                        style={{ height: "16rem" }}
                        className="mt-3"
                      />
                    </NavLink>
                    <Card.Body>
                      <Card.Title>{element.rname}</Card.Title>
                      <Card.Text>Price : ₹ {element.price}</Card.Text>
                    </Card.Body>
                  </Card>
                </>
              );
            })
          : filters === "belowBunglow"
          ? belowBunglow.map((element) => {
              return (
                <>
                  <Card
                    style={{ width: "22rem", border: "none" }}
                    className="mx-2 mt-4 card_style"
                  >
                    <NavLink to={`/details/${element.id}`}>
                      <Card.Img
                        variant="top"
                        src={element.imgdata}
                        style={{ height: "16rem" }}
                        className="mt-3"
                      />
                    </NavLink>
                    <Card.Body>
                      <Card.Title>{element.rname}</Card.Title>
                      <Card.Text>Price : ₹ {element.price}</Card.Text>
                    </Card.Body>
                  </Card>
                </>
              );
            })
          : filters === "residentials"
          ? residentials.map((element) => {
              return (
                <>
                  <Card
                    style={{ width: "22rem", border: "none" }}
                    className="mx-2 mt-4 card_style"
                  >
                    <NavLink to={`/details/${element.id}`}>
                      <Card.Img
                        variant="top"
                        src={element.imgdata}
                        style={{ height: "16rem" }}
                        className="mt-3"
                      />
                    </NavLink>
                    <Card.Body>
                      <Card.Title>{element.rname}</Card.Title>
                      <Card.Text>Price : ₹ {element.price}</Card.Text>
                    </Card.Body>
                  </Card>
                </>
              );
            })
          : filters === "belowLand"
          ? belowLand.map((element) => {
              return (
                <>
                  <Card
                    style={{ width: "22rem", border: "none" }}
                    className="mx-2 mt-4 card_style"
                  >
                    <NavLink to={`/details/${element.id}`}>
                      <Card.Img
                        variant="top"
                        src={element.imgdata}
                        style={{ height: "16rem" }}
                        className="mt-3"
                      />
                    </NavLink>
                    <Card.Body>
                      <Card.Title>{element.rname}</Card.Title>
                      <Card.Text>Price : ₹ {element.price}</Card.Text>
                    </Card.Body>
                  </Card>
                </>
              );
            })
          : filters === "aboveLand"
          ? aboveLand.map((element) => {
              return (
                <>
                  <Card
                    style={{ width: "22rem", border: "none" }}
                    className="mx-2 mt-4 card_style"
                  >
                    <NavLink to={`/details/${element.id}`}>
                      <Card.Img
                        variant="top"
                        src={element.imgdata}
                        style={{ height: "16rem" }}
                        className="mt-3"
                      />
                    </NavLink>
                    <Card.Body>
                      <Card.Title>{element.rname}</Card.Title>
                      <Card.Text>Price : ₹ {element.price}</Card.Text>
                    </Card.Body>
                  </Card>
                </>
              );
            })
          : datas.map((element) => {
              return (
                <>
                  <Card
                    style={{ width: "22rem", border: "none" }}
                    className="mx-2 mt-4 card_style"
                  >
                    <NavLink to={`/details/${element.id}`}>
                      <Card.Img
                        variant="top"
                        src={element.imgdata}
                        style={{ height: "16rem" }}
                        className="mt-3"
                      />
                    </NavLink>
                    <Card.Body>
                      <Card.Title>{element.rname}</Card.Title>
                      <Card.Text>Price : ₹ {element.price}</Card.Text>
                    </Card.Body>
                  </Card>
                </>
              );
            })}
      </div>
    </div>
  );
}

export default Cards;
