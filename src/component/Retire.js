import React, { useState } from "react";
import logo from "../LOGO.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Retire() {
  const [dob, setDob] = useState();
  const [retireAge, setRetireAge] = useState();
  const [currentExpense, setCurrentExpense] = useState();
  const [inflation, setInflation] = useState();
  const [data, setData] = useState(false);

  const [monExp, setMonExp] = useState();

  const scrollFaq = () => {
    const anchor = document.querySelector("#home-faq");
    anchor.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

  const next = () => {
    if (
      dob !== undefined &&
      retireAge !== undefined &&
      currentExpense !== undefined &&
      inflation !== undefined
    ) {
      const age = getAge(dob);
      const gap = retireAge - age;
      const inf = inflation / 100;
      // const monE = (currentExpense * (1 + inf)) ^ gap;
      const monE = currentExpense*Math.pow(1 + inf,gap)
      setMonExp(monE);
      setData(true);
    } else {
      alert("Enter Data!!!");
    }
  };

  return (
    <div style={{ overflowX: "hidden", margin: "0", padding: "0" }}>
      <div className="row d-flex  justify-content-center align-items-center">
        <div className="col ">
          <div className="card card-registration ">
            <div className="row g-0  ">
              <div
                className="col-xl-6 d-flex justify-content-center align-items-left"
                style={{
                  backgroundColor: "black",
                  color: "white",
                  height: "max-content",
                  flexDirection: "column",
                }}
              >
                <h5
                  className=" text-lowercase"
                  style={{
                    padding: "10px",
                    marginTop: "45px",
                    marginLeft: "40px",
                  }}
                >
                  <img
                    onClick={() => scrollFaq()}
                    src={logo}
                    height="150px"
                    width="150px"
                    alt="Error"
                  />
                </h5>
                <div style={{ marginLeft: "50px", marginTop: "50px" }}>
                  <h3>Create account</h3>
                  <p>Get access to exclusive features by creating an account</p>
                </div>
                <div className="card-body p-md-5 text-black">
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <div className="form-outline">
                        <label
                          style={{ fontWeight: "bold", color: "white" }}
                          className="form-label"
                        >
                          Date of Birth
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <div className="form-outline">
                        <input
                          type="date"
                          id="form3Example1n"
                          className="form-control form-control-lg"
                          onChange={(e) => setDob(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <div className="form-outline">
                        <label
                          style={{ fontWeight: "bold", color: "white" }}
                          className="form-label"
                        >
                          Retirement Age
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <div className="form-outline">
                        <input
                          type="number"
                          id="form3Example1n1"
                          className="form-control form-control-lg"
                          onChange={(e) => setRetireAge(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <div className="form-outline">
                        <label
                          style={{ fontWeight: "bold", color: "white" }}
                          className="form-label"
                        >
                          Current Monthly Expenses of your family
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <div className="form-outline">
                        <input
                          type="number"
                          id="form3Example1n1"
                          className="form-control form-control-lg"
                          onChange={(e) => setCurrentExpense(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <div className="form-outline">
                        <label
                          style={{ fontWeight: "bold", color: "white" }}
                          className="form-label"
                        >
                          Estimated inflation rate
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <div className="form-outline">
                        <div className="form-outline">
                          <input
                            type="number"
                            id="form3Example1n1"
                            className="form-control form-control-lg"
                            onChange={(e) => setInflation(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr style={{ color: "#ffd700" }} />

                  <div className="d-flex justify-content-end pt-3">
                    <button
                      type="button"
                      className="btn btn-warning btn-lg ms-2"
                      style={{
                        backgroundColor: "#ffd700",
                        color: "black",
                        fontWeight: "bold",
                      }}
                      onClick={async () => {
                        await next();
                        scrollFaq();
                      }}
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-6 d-none d-xl-block"
                style={{ backgroundColor: "#ffd700" }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {data ? (
        <div
          style={{
            fontSize: "22px",
            padding: "20px",
            textAlign: "center",
            marginTop: "100px",
            marginBottom: "100px",
            lineHeight: "35px",
          }}
          id="home-faq"
        >
          <p>
            Your Estimated Monthly Expenses at age {retireAge} after retirement will be{" "}
            <label style={{ color: "#ffd700", fontWeight: "bold" }}>
              {" "}
              {monExp.toFixed(2)}
            </label>
          </p>
          <p>
            It’s Easy to understand that your monthly expenses will be % higher
            than your current monthly expenses.
          </p>
          <p>
            It’s tough to manage your post retirement expenses, as your salary
            or income generally reduces drastically after retirement. So you
            have to plan your retirement well in advance.
          </p>
          <p>
            Planning your retirement is not a child’s play, it took years of
            planning and execution.
          </p>
          <p>
            Without proper guidance in creating retirement corpus, one can land
            up in a financial trouble at retirement age.
          </p>
          <p>
            To find out “HOW LONG YOUR RETIREMENT CORPUS CAN SUPPORT YOUR FAMILY
            AFTER YOUR RETIREMENT” please click here.
          </p>
          <p>
            Ofcourse, we need quite a few information about your earnings,
            expenses, investments and perception on financial planning, don’t
            worry, your data is safe and will not be share it with any third
            party, it’s our promise.
          </p>
          <p>
            So let’s go and “CHECK THAT YOUR PLANNING ON RETIRMENT CORPUS IS IN
            THE RIGHT DIRECTION OR NOT” please{" "}
            <label>
              Already have an account?{" "}
              <label
                style={{
                  cursor: "pointer",
                  color: "#ffd700",
                  fontWeight: "bold",
                }}
                onClick={() =>
                  (window.location.href =
                    "https://sawaal1croreka.com/rsc/register?retireAge=" +
                    retireAge +
                    "&dob=" +
                    dob +
                    "&currentExpense=" +
                    currentExpense +
                    "&inflation=" +
                    inflation)
                }
              >
                {" "}
                click here.
              </label>
            </label>
          </p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
