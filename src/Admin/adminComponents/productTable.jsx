import React from "react";

const ProductTable = () => {
  return (
    <>
      {/* <div className="app-content-header">
        <h1 className="app-content-headerText">Products</h1>
        <button className="app-content-headerButton">Add Product</button>
        <input className="search-bar" placeholder="Search..." type="text" />
      </div> */}
      <section className="main-content">
        <section className="content">
          <div className="content-list">
            <h1>Attendance List</h1>
            <table className="table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Category</th>
                  <th>Quantity</th>
                  <th>Qty Sold</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ color: "red" }}>
                  <td>01</td>
                  <td>Sam David</td>
                  <td>Design</td>
                  <td>03-24-22</td>
                  <td>8:00AM</td>
                  <td>3:00PM</td>
                  <td>
                    <button>View</button>
                  </td>
                </tr>
                <tr className="active">
                  <td>02</td>
                  <td>Balbina Kherr</td>
                  <td>Coding</td>
                  <td>03-24-22</td>
                  <td>9:00AM</td>
                  <td>4:00PM</td>
                  <td>
                    <button>View</button>
                  </td>
                </tr>
                <tr>
                  <td>03</td>
                  <td>Badan John</td>
                  <td>testing</td>
                  <td>03-24-22</td>
                  <td>8:00AM</td>
                  <td>3:00PM</td>
                  <td>
                    <button>View</button>
                  </td>
                </tr>
                <tr>
                  <td>04</td>
                  <td>Sara David</td>
                  <td>Design</td>
                  <td>03-24-22</td>
                  <td>8:00AM</td>
                  <td>3:00PM</td>
                  <td>
                    <button>View</button>
                  </td>
                </tr>
                <tr>
                  <td>05</td>
                  <td>Salina</td>
                  <td>Coding</td>
                  <td>03-24-22</td>
                  <td>9:00AM</td>
                  <td>4:00PM</td>
                  <td>
                    <button>View</button>
                  </td>
                </tr>
                <tr>
                  <td>06</td>
                  <td>Tara Smith</td>
                  <td>Testing</td>
                  <td>03-24-22</td>
                  <td>9:00AM</td>
                  <td>4:00PM</td>
                  <td>
                    <button>View</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </section>
    </>
  );
};

export default ProductTable;
