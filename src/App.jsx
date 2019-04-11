import React, { Component } from "react";
import { hot } from "react-hot-loader";
import { getTime, format } from "date-fns";
import Case from "./Components/Case";
import SearchForm from "./Components/SearchForm";
import Header from "./Components/Header";
import styles from "./App.css";
import Pagination from "./Components/Pagination";
import Loading from "./Components/Loading";
import EmptyMessage from "./Components/EmptyMessage";
import ErrorMessage from "./Components/ErrorMessage";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCaseEmpty: true,
      isCaseLoading: false,
      caseHasError: false,
      cases: [],
      query: {
        endDate: "",
        startDate: "",
        caseVal: "",
      },
      proximity: "41.881832, -87.623177",
    };

    this.handleCaseSearchField = this.handleCaseSearchField.bind(this);
    this.handleStartDateField = this.handleStartDateField.bind(this);
    this.handleEndDateField = this.handleEndDateField.bind(this);
    this.fetchCases = this.fetchCases.bind(this);
  }

  fetchCases(e) {
    e.preventDefault();
    const {
      query,
      proximity,
    } = this.state;

    const proximitySquare = 50;
    const perPage = 10;
    const pageNo = 1;
    const occurredBefore = query.endDate ? parseInt(getTime(format(query.endDate)) / 1000, 10) : "";
    const occurredAfter = query.startDate ? parseInt(getTime(format(query.startDate)) / 1000, 10) : "";

    const url = new URL("https://bikewise.org:443/api/v2/incidents");
    url.searchParams.set("occurred_after", occurredAfter);
    url.searchParams.set("occurred_before", occurredBefore);
    url.searchParams.set("proximity", proximity);
    url.searchParams.set("proximity_square", proximitySquare);
    url.searchParams.set("query", query.caseVal);
    url.searchParams.set("per_page", perPage);
    url.searchParams.set("page", pageNo);

    this.setState({
      isCaseLoading: true,
      isCaseEmpty: false,
      caseHasError: false,
    });

    fetch(url)
      .then(resp => resp.json())
      .then((json) => {
        const { incidents } = json;
        if (incidents.length === 0) {
          this.setState({
            isCaseLoading: false,
            isCaseEmpty: true,
            caseHasError: false,
            cases: incidents,
          });
        } else {
          this.setState({
            isCaseLoading: false,
            isCaseEmpty: false,
            caseHasError: false,
            cases: incidents,
          });
        }
      }).catch((error) => {
        this.setState({
          isCaseLoading: false,
          isCaseEmpty: false,
          caseHasError: error,
        });
      });
  }

  handleCaseSearchField(e) {
    const { query } = this.state;
    this.setState({
      query: {
        ...query,
        caseVal: e.target.value,
      },
    });
  }

  handleStartDateField(e) {
    const { query } = this.state;
    console.log(`start date: ${e.target.value}`);
    this.setState({
      query: {
        ...query,
        startDate: e.target.value,
      },
    });
  }

  handleEndDateField(e) {
    const { query } = this.state;
    console.log(`end date: ${e.target.value}`);
    this.setState({
      query: {
        ...query,
        endDate: e.target.value,
      },
    });
  }

  renderCases() {
    const { cases } = this.state;

    return cases.map(c => (
      <div className={styles.mTop} key={c.id}>
        <Case
          title={c.title}
          description={c.description}
          date={c.occurred_at}
          address={c.address}
          imgSrc={c.media.image_url}
        />
      </div>
    ));
  }

  renderHeader() {
    const { query } = this.state;

    return (
      <React.Fragment>
        <Header />
        <SearchForm
          onCaseChange={this.handleCaseSearchField}
          caseValue={query.caseVal}
          startDateValue={query.startDate}
          onStartDateChange={this.handleStartDateField}
          endDateValue={query.endDate}
          onEndDateChange={this.handleEndDateField}
          onButtonClick={this.fetchCases}
          onFormSubmit={this.fetchCases}
        />
      </React.Fragment>
    );
  }

  render() {
    const {
      isCaseEmpty, isCaseLoading, caseHasError,
    } = this.state;

    if (isCaseEmpty) {
      return (
        <div className={styles.container}>
          {this.renderHeader()}
          <EmptyMessage />
        </div>
      );
    }

    if (isCaseLoading) {
      return (
        <div className={styles.container}>
          {this.renderHeader()}
          <Loading />
        </div>
      );
    }

    if (caseHasError) {
      return (
        <div className={styles.container}>
          {this.renderHeader()}
          <ErrorMessage />
        </div>
      );
    }

    return (
      <div className={styles.container}>
        {this.renderHeader()}
        { this.renderCases() }
        <Pagination />
      </div>
    );
  }
}

export default hot(module)(App);
