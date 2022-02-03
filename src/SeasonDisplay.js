import React from "react";

//Display a specific message/icon depending on the season.
const seasonConfig = {
  summer: {
    text: "Let's hit the beach",
    iconName: "sun",
  },
  winter: {
    text: "Brr, it's chilly",
    iconName: "snowflake",
  },
};

const getSeason = (latitude, month) => {
  //Return Summer if its between Month 2 and 9, else, return winter
  if (month > 2 && month < 9) {
    return latitude > 0 ? "summer" : "winter";
  } else {
    return latitude > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = (props) => {
  //Calling getSeason function and using the latitude we get from index.js
  const season = getSeason(props.latitude, new Date().getMonth());

  const { text, iconName } = seasonConfig[season];
  return (
    <div>
      <i className={`${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`${iconName} icon`} />
    </div>
  );
};

export default SeasonDisplay;
