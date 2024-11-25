import React, { Component } from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import List from './List';

class FilteredList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: "", // Search term
      type: "All", // Default filter type
    };
  }

  // Handle search input
  onSearch = (event) => {
    this.setState({ search: event.target.value.trim().toLowerCase() });
  };

  // Handle type selection from dropdown
  onFilter = (type) => {
    this.setState({ type });
  };

  // Filter items based on search term and type
  filterItem = (item) => {
    const matchesSearch = item.name.toLowerCase().includes(this.state.search);
    const matchesType =
      this.state.type === "All" || item.type === this.state.type;

    return matchesSearch && matchesType;
  };

  render() {
    return (
      <div className="filter-list">
        <h1>Produce Search</h1>

        {/* Dropdown for filtering by type */}
        <DropdownButton
          id="dropdown-basic-button"
          title={`Filter by: ${this.state.type}`}
          onSelect={this.onFilter}
        >
          <Dropdown.Item eventKey="All">All</Dropdown.Item>
          <Dropdown.Item eventKey="Fruit">Fruit</Dropdown.Item>
          <Dropdown.Item eventKey="Vegetable">Vegetable</Dropdown.Item>
        </DropdownButton>

        {/* Search input */}
        <input
          type="text"
          placeholder="Search"
          onChange={this.onSearch}
        />

        {/* Filtered list */}
        <List items={this.props.items.filter(this.filterItem)} />
      </div>
    );
  }
}

export default FilteredList;
