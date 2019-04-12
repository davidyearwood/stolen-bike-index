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
import generateApiUrl from "./util/generateApiUrl";

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
      perPage: 10,
      startIndex: 0,
      pageNo: 1,
      total: 0,
      totalPages: 0,
    };

    this.handleCaseSearchField = this.handleCaseSearchField.bind(this);
    this.handleStartDateField = this.handleStartDateField.bind(this);
    this.handleEndDateField = this.handleEndDateField.bind(this);
    this.fetchCases = this.fetchCases.bind(this);
    this.handlePaginationClick = this.handlePaginationClick.bind(this);
  }

  fetchCases(e) {
    e.preventDefault();
    const {
      query,
      proximity,
      perPage,
      pageNo,
    } = this.state;

    const proximitySquare = 50;
    const occurredBefore = query.endDate ? parseInt(getTime(format(query.endDate)) / 1000, 10) : "";
    const occurredAfter = query.startDate ? parseInt(getTime(format(query.startDate)) / 1000, 10) : "";

    const url = generateApiUrl({
      occured_before: occurredBefore,
      occured_after: occurredAfter,
      proximity,
      proximity_square: proximitySquare,
      query: query.caseVal,
      per_page: 30,
      page: pageNo,
    });

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
            total: 0,
          });
        } else {
          this.setState({
            isCaseLoading: false,
            isCaseEmpty: false,
            caseHasError: false,
            cases: incidents,
            total: incidents.length,
            totalPages: Math.ceil(incidents.length / perPage),
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

  handlePaginationClick(e) {
    const {
      pageNo,
      startIndex,
      perPage,
      totalPages,
      total,
    } = this.state;

    if (Number.isInteger(parseInt(e.target.value, 10))) {
      this.setState({
        pageNo: parseInt(e.target.value, 10),
        startIndex: (parseInt(e.target.value, 10) * perPage) - perPage,
      });
    } else if (e.target.value === "previous") {
      const previousPage = pageNo - 1;
      this.setState({
        pageNo: previousPage < 1 ? 1 : previousPage,
        startIndex: (startIndex - 10) <= 0 ? 0 : startIndex - 10,
      });
    } else if (e.target.value === "next") {
      const nextPage = pageNo + 1;
      this.setState({
        pageNo: nextPage >= totalPages ? totalPages : nextPage,
        startIndex: (startIndex + 10) >= total ? startIndex : startIndex + 10,
      });
    } else {
      throw new Error("Page number or page start index is out of bounds");
    }
  }

  handleStartDateField(e) {
    const { query } = this.state;
    this.setState({
      query: {
        ...query,
        startDate: e.target.value,
      },
    });
  }

  handleEndDateField(e) {
    const { query } = this.state;
    this.setState({
      query: {
        ...query,
        endDate: e.target.value,
      },
    });
  }

  renderCases() {
    const {
      cases, perPage, startIndex,
      pageNo,
    } = this.state;
    const currentCases = cases.slice(startIndex, pageNo * perPage);

    return currentCases.map(c => (
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
      isCaseEmpty, isCaseLoading, caseHasError, total,
      totalPages, pageNo,
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
        <div className={styles.totalContainer}>
          <p className={styles.totalCases}>{`Total: ${total}`}</p>
        </div>
        { this.renderCases() }
        <Pagination
          buttonsCount={totalPages}
          onClick={this.handlePaginationClick}
          activePage={pageNo}
        />
      </div>
    );
  }
}

export default hot(module)(App);
