import React, { Component } from "react";
import { hot } from "react-hot-loader";
import "./App.css";
import Button from "./Components/Button";
import AngleRight from "./Components/Svg/AngleRight";
import Case from "./Components/Case";
import Input from "./Components/Input";

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
      }],
    };
  }

  render() {
    const c = this.state.cases[0];

    return (
      <div>
        <div className="App">
          <Button>
          This is a test
            <AngleRight fill="#fff" height={25} width={25} />
          </Button>
        </div>
        <Case
          title={c.title}
          description={c.description}
          date={c.occurred_at}
          address={c.address}
        />
        <Input placeholder="Search case descriptions" label="Case Search Field" />
      </div>
    );
  }
}

export default hot(module)(App);
