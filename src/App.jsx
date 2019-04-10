import React, { Component } from "react";
import { hot } from "react-hot-loader";
import { getTime } from "date-fns";
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
        occuredBeforeVal: "",
        occuredAfterVal: "",
        caseVal: "",
      },
      proximity: "41.881832, -87.623177",
    };

    this.handleCaseSearchField = this.handleCaseSearchField.bind(this);
    this.handleFromDateField = this.handleFromDateField.bind(this);
    this.handleToDateField = this.handleToDateField.bind(this);
    this.fetchCases = this.fetchCases.bind(this);
  }

  fetchCases(e) {
    const {
      query,
      proximity,
    } = this.state;
    const proximitySquare = 50;
    const perPage = 10;
    const pageNo = 1;
    const beforeDate = query.occuredBeforeVal ? getTime(new Date(query.occuredBeforeVal)) : "";
    const afterDate = query.occuredAfterVal ? getTime(new Date(query.occuredAfterVal)) : "";

    const url = `https://bikewise.org:443/api/v2/incidents?page=${pageNo}&per_page=${perPage}&proximity=${proximity}&proximity_square=${proximitySquare}&query=${query.caseVal}&occurred_before=${beforeDate}&occured_after=${afterDate}`;

    e.preventDefault();

    this.setState({
      isCaseLoading: true,
      isCaseEmpty: false,
      caseHasError: false,
    });

    fetch(url)
      .then(resp => resp.json())
      .then((json) => {
        const { incidents } = json;
        this.setState({
          isCaseLoading: false,
          isCaseEmpty: false,
          caseHasError: false,
          cases: incidents,
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

  handleFromDateField(e) {
    const { query } = this.state;
    this.setState({
      query: {
        ...query,
        occuredBeforeVal: e.target.value,
      },
    });
  }

  handleToDateField(e) {
    const { query } = this.state;
    this.setState({
      query: {
        ...query,
        occuredAfterVal: e.target.value,
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
          fromDateValue={query.occuredBeforeVal}
          onFromDateChange={this.handleFromDateField}
          toDateValue={query.occuredAfterVal}
          onToDateChange={this.handleToDateField}
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
