import React, { Component } from "react";
import { hot } from "react-hot-loader";
import Case from "./Components/Case";
import SearchForm from "./Components/SearchForm";
import Header from "./Components/Header";
import styles from "./App.css";
import Pagination from "./Components/Pagination";
import Loading from "./Components/Loading";
import ErrorMessage from "./Components/ErrorMessage";
import EmptyMessage from "./Components/EmptyMessage";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCaseEmpty: true,
      cases: [],
      query: {
        occuredBeforeVal: "",
        occuredAfterVal: -1,
        caseVal: "",
      },
    };

    this.handleCaseSearchField = this.handleCaseSearchField.bind(this);
    this.handleFromDateField = this.handleFromDateField.bind(this);
    this.handleToDateField = this.handleToDateField.bind(this);
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
        />
      </div>
    ));
  }

  render() {
    const { isCaseEmpty, query } = this.state;

    if (isCaseEmpty) {
      return (
        <div className={styles.container}>
          <Header />
          <SearchForm
            onCaseChange={this.handleCaseSearchField}
            caseValue={query.caseVal}
            fromDateValue={query.occuredBeforeVal}
            onFromDateChange={this.handleFromDateField}
            toDateValue={query.occuredAfterVal}
            onToDateChange={this.handleToDateField}
          />
          <EmptyMessage />
        </div>
      );
    }

    return (
      <div className={styles.container}>
        <Loading />
        <EmptyMessage />
        <ErrorMessage />
        <Header />
        <SearchForm />
        { this.renderCases() }
        <Pagination />
      </div>
    );
  }
}

export default hot(module)(App);
