import React from "react";

const style = {
  width: "18rem"
};

class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = [
      {
        name: "Where's Walter",
        git: "https://github.com/mikegoolsby/wheres-walter",
        live: "https://wheres-walter.vercel.app/",
        img:
          "https://i.insider.com/5d7f91ed6f24eb3d3e33cc05?width=600&format=jpeg&auto=webp"
      },
      {
        name: "RQST",
        git: "https://github.com/mikegoolsby/rqst",
        live: "https://rqst-go.herokuapp.com/rqst-go",
        img:
          "https://cdn.shrm.org/image/upload/c_crop%2Ch_552%2Cw_552%2Cx_0%2Cy_0/c_fit%2Cf_auto%2Cq_auto%2Cw_767/v1/Tools%20and%20Samples/18_1076_HubPage_Illustrations_FNL_1x1_PTO_io2q6v?databtoa=eyIxeDEiOnsieCI6MCwieSI6MCwieDIiOjU1MiwieTIiOjU1MiwidyI6NTUyLCJoIjo1NTJ9fQ%3D%3D"
      }
    ];
  }

  render() {
    return this.state.map((item) => {
      return (
        <div className="card" style={style}>
          <img src={item.img} alt={item.name} className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
            <a href={item.git} className="btn btn-primary">
              <h6>Github</h6>
            </a>
            <a href={item.live} className="btn btn-primary">
              <h6>Livelink</h6>
            </a>
          </div>
        </div>
      );
    });
  }
}

export default Project;
