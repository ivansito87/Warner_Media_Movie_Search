import React from "react";

function Form({query, handleInputChange, handleFormSubmit, getThemAll}) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="Query">
          <h3><strong>Enter Movie Title</strong></h3>
        </label>
        <input
          className="form-control"
          id="Title"
          type="text"
          value={query}
          placeholder="Ex: 2 Fast & 2 Furious"
          name="query"
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="pull-right">
        <button
          onClick={handleFormSubmit}
          type="submit"
          className="btn btn-lg btn-outline-info float-right"
        >
          Search
        </button>
        <button
          onClick={getThemAll}
          type="submit"
          className="btn btn-lg btn-outline-success float-right mr-4"
        >
          All Movies
        </button>

      </div>
    </form>
  );
}

export default Form;
