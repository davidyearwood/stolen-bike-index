import React, { Component } from "react";
import { hot } from "react-hot-loader";
import "./App.css";
import Button from "./Components/Button";
import AngleRight from "./Components/Svg/AngleRight";
import Case from "./Components/Case";
import SearchForm from "./Components/SearchForm";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cases: [{
        id: 94345,
        title: "Large Item Pickup",
        description: "Bike frame needs to be picked up. On sidewalk by garbage/recycle cans @ back of house.",
        address: "1828 Maiden Lane Whiting, in.",
        occurred_at: 1542727055,
        updated_at: 1554151350,
        url: "https://bikewise.org/api/v1/incidents/94345",
        source: {
          name: "SeeClickFix.com",
          html_url: "https://seeclickfix.com/issues/5135064",
          api_url: "https://seeclickfix.com/api/v2/issues/5135064",
        },
        media: {
          image_url: null,
          image_url_thumb: null,
        },
        location_type: null,
        location_description: null,
        type: "Unconfirmed",
        type_properties: null,
      },
      {
        id: 94292,
        title: "Stolen Specialized CrossTrail(silver, gray or bare metal)",
        description: "Broke into basement and storage unit",
        address: "Evanston, 60201",
        occurred_at: 1542470400,
        updated_at: 1554151340,
        url: "https://bikewise.org/api/v1/incidents/94292",
        source: {
          name: "BikeIndex.org",
          html_url: "https://bikeindex.org/bikes/473478",
          api_url: "https://bikeindex.org/api/v1/bikes/473478",
        },
        media: {
          image_url: "https://files.bikeindex.org/uploads/Pu/141444/large_20181117_174052.jpg",
          image_url_thumb: "https://files.bikeindex.org/uploads/Pu/141444/small_20181117_174052.jpg",
        },
        location_type: null,
        location_description: null,
        type: "Theft",
        type_properties: null,
      },
      {
        id: 94293,
        title: "Stolen 2017 Focus Cayo Disc(black, red, and white)",
        description: "Broke into basement,  broke into storage unit.",
        address: "Evanston, IL, 60201",
        occurred_at: 1542470400,
        updated_at: 1554151336,
        url: "https://bikewise.org/api/v1/incidents/94293",
        source: {
          name: "BikeIndex.org",
          html_url: "https://bikeindex.org/bikes/473467",
          api_url: "https://bikeindex.org/api/v1/bikes/473467",
        },
        media: {
          image_url: "https://files.bikeindex.org/uploads/Pu/141443/large_20180802_175116.jpg",
          image_url_thumb: "https://files.bikeindex.org/uploads/Pu/141443/small_20180802_175116.jpg",
        },
        location_type: null,
        location_description: null,
        type: "Theft",
        type_properties: null,
      },
      {
        id: 94217,
        title: "Stolen Cannondale caad6(black, red, and yellow or gold)",
        description: "Bike was locked to rack in the morning, was gone when leaving work in the evening, no evidence of cut lock or cable.",
        address: "Chicago, IL, 60654",
        occurred_at: 1542243600,
        updated_at: 1554151349,
        url: "https://bikewise.org/api/v1/incidents/94217",
        source: {
          name: "BikeIndex.org",
          html_url: "https://bikeindex.org/bikes/471172",
          api_url: "https://bikeindex.org/api/v1/bikes/471172",
        },
        media: {
          image_url: "https://files.bikeindex.org/uploads/Pu/141284/large_CAAD6.jpg",
          image_url_thumb: "https://files.bikeindex.org/uploads/Pu/141284/small_CAAD6.jpg",
        },
        location_type: null,
        location_description: null,
        type: "Theft",
        type_properties: null,
      },
      {
        id: 95249,
        title: "Stolen 2018 Schwinn Mountain Boundary(green)",
        description: "Left my bike and locked at the Chicago Brown line station. Came back and it was gone. ",
        address: "Chicago, IL, 60610 ",
        occurred_at: 1542243600,
        updated_at: 1554151407,
        url: "https://bikewise.org/api/v1/incidents/95249",
        source: {
          name: "BikeIndex.org",
          html_url: "https://bikeindex.org/bikes/497282",
          api_url: "https://bikeindex.org/api/v1/bikes/497282",
        },
        media: {
          image_url: "https://files.bikeindex.org/uploads/Pu/143274/large_5ae9d31d-9764-4819-b180-766902ae624d_1.5c0fc25fc4d0b7a43c5bf2c30859fdd1.jpg",
          image_url_thumb: "https://files.bikeindex.org/uploads/Pu/143274/small_5ae9d31d-9764-4819-b180-766902ae624d_1.5c0fc25fc4d0b7a43c5bf2c30859fdd1.jpg",
        },
        location_type: null,
        location_description: null,
        type: "Theft",
        type_properties: null,
      },
      {
        id: 95136,
        title: "Stolen 2018 Schwinn Mountain Boundary(green)",
        description: "Locked my bike up near the Chicago brown line and came back and it was gone. ",
        address: "Chicago, 60610",
        occurred_at: 1542207600,
        updated_at: 1554151368,
        url: "https://bikewise.org/api/v1/incidents/95136",
        source: {
          name: "BikeIndex.org",
          html_url: "https://bikeindex.org/bikes/494637",
          api_url: "https://bikeindex.org/api/v1/bikes/494637",
        },
        media: {
          image_url: null,
          image_url_thumb: null,
        },
        location_type: null,
        location_description: null,
        type: "Theft",
        type_properties: null,
      }],
    };
  }

  renderCases() {
    const { cases } = this.state;

    return cases.map(c => (
      <Case
        title={c.title}
        description={c.description}
        date={c.occurred_at}
        address={c.address}
      />
    ));
  }

  render() {
    return (
      <div>
        <div className="App">
          <Button>
          This is a test
            <AngleRight fill="#fff" height={25} width={25} />
          </Button>
        </div>
        <SearchForm />
        { this.renderCases() }
      </div>
    );
  }
}

export default hot(module)(App);
