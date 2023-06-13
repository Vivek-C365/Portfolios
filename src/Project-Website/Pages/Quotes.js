import React from "react";
import { useEffect, useState } from "react";
// import FormatQuoteIcon from "@material-ui/icons/FormatQuote";
import '../css/Quotes.css'
export default function Quote() {
  let result = "";

  // Use State Hooks is used
  let [textdata, settext] = useState("");
  let [auth, setauth] = useState("");
  let [update] = useState("");

  // onclick event work
  let getdata = async () => {
    let getqut = await fetch("https://type.fit/api/quotes");
    result = await getqut.json();

    gettext();
  };

  // get api data with random numbers and diplaying in Dom
  let gettext = () => {
    // Math object is used
    let random = Math.floor(Math.random() * 1634);

    let quests = result[random].text;
    let authors = result[random].author;

    // Condition is applied
    let data = () => {
      if (authors == null) {
        setauth("Unknown");
      } else {
        setauth(authors);
      }
    };

    settext(quests);
    data();
  };

  // UseEffect is used to exit infinite loop

  useEffect(() => {
    getdata();
  }, [update]);

  return (
    <>
      

      <div className="card">
      <div className="card_body">

        <div className="icon">
          {/* <FormatQuoteIcon fontSize="Large" /> */}
        </div>
        <div className="text">
          <div className="textdata">{textdata}</div>
          <div className="author">-{auth}</div>
        </div>
        <div className="btn">
          <button className="clickbtn" onClick={getdata}>
            New Quote
          </button>
        </div>
      </div>
      </div>
    </>
  );
}
