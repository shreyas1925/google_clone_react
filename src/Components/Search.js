import React, { useState } from "react";
import "./Search.css";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router";
import { useStatevalue } from "../StateProvder";
import { actionTypes } from "../reducer";

const Search = ({ hideButtons = false }) => {
  // just like shooting the data  into out !! ( dispatch helps in giving action into data layout)
  // {} its just a state or a current term
  const [{}, dispatch] = useStatevalue();
  const [input, setInput] = useState("");
  const history = useHistory();

  const search = (e) => {
    e.preventDefault();
    console.log("Hit searched ", input);

    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input,
    });

    history.push("/searchpage");

    // Using input we have to work more here
  };
  return (
    <form className="search">
      <div className="search__input">
        <SearchIcon className="search__inputIcon" />
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <MicIcon />
      </div>

      {!hideButtons ? (
        <div className="search__buttons">
          <Button type="submit" variant="outlined" onClick={search}>
            Google Search
          </Button>
          <Button variant="outlined">I'm feeling Crazy</Button>
        </div>
      ) : (
        <div className="search__buttons">
          <Button
            type="submit"
            className="search__buttonsHidden"
            variant="outlined"
            onClick={search}
          >
            Google Search
          </Button>
          <Button className="search__buttonsHidden" variant="outlined">
            I'm feeling Crazy
          </Button>
        </div>
      )}
    </form>
  );
};

export default Search;
