import axios from "axios";
import React, { useState, useEffect } from "react";
import logo from "../LOGO.jpg";

export default function Passive() {
  const [currentMonthly, setcurrentMonthly] = useState();
  const [fixedMonthly, setFixedMonthly] = useState();
  const [expectedGrowth, setExpectedGrowth] = useState();
  const [expectedInvestment, setExpectedInvestment] = useState();
  const [retirementCorpus, setRetirementCorpus] = useState(false);
  const [id, setId] = useState(false);

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    setId(queryParams.get("id"));
  });

  const next = () => {
    if (
      currentMonthly !== undefined &&
      fixedMonthly !== undefined &&
      expectedGrowth !== undefined &&
      expectedInvestment !== undefined &&
      retirementCorpus !== undefined
    ) {
      axios
        .post("https://sawaal1croreka.store//api/user/id", {
          currentMonthly: currentMonthly,
          fixedMonthly: fixedMonthly,
          expectedGrowth: expectedGrowth,
          expectedInvestment: expectedInvestment,
          retirementCorpus: retirementCorpus,
          id: id,
        })
        .then((res) => {
          if (res.data === "success") {
            window.location.href = "https://sawaal1croreka.com/rsc/table?id=" + id;
          } else {
            console.log("Failed!!");
          }
        });
    } else {
      alert("Enter Data!!!");
    }
  };

  return (
    <div
      className="row d-flex justify-content-center align-items-center h-100"
      style={{ overflowX: "hidden", margin: "0", padding: "0" }}
    >
      <div className="col">
        <div className="card card-registration">
          <div className="row">
            <div
              className="col-xl-6"
              style={{
                paddingLeft: "0",
                height: "max-content",
                backgroundColor: "black",
                color: "white",
              }}
            >
              <h5 className="mb-3 text-lowercase" style={{ padding: "10px" }}>
                <img src={logo} height="150px" width="150px" alt="Error"/>
              </h5>
              <div style={{ marginLeft: "50px" }}>
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
                        Current Monthly Passive Income:
                      </label>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div className="form-outline">
                      <input
                        type="number"
                        id="form3Example1n"
                        className="form-control form-control-lg"
                        onChange={(e) => setcurrentMonthly(e.target.value)}
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
                        Fixed Monthly Passive Income after retirement (i.e.
                        Pension etc):
                      </label>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div className="form-outline">
                      <input
                        type="number"
                        id="form3Example1n1"
                        className="form-control form-control-lg"
                        onChange={(e) => setFixedMonthly(e.target.value)}
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
                        Expected Growth Rate of Passive Income:
                      </label>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div className="form-outline">
                      <input
                        type="number"
                        id="form3Example1n1"
                        className="form-control form-control-lg"
                        onChange={(e) => setExpectedGrowth(e.target.value)}
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
                        Expected Investment Rate:
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
                          onChange={(e) =>
                            setExpectedInvestment(e.target.value)
                          }
                        />
                      </div>
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
                        Retirement Corpus:
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
                          onChange={(e) => setRetirementCorpus(e.target.value)}
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
                      color: "white",
                      fontWeight: "bold",
                      marginTop: "15px",
                    }}
                    onClick={() => {
                      next();
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
  );
}
