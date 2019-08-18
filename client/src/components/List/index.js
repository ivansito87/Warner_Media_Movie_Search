import React from "react";
import "./style.css";

// This component exports both the List and ListItem components
export const List = ({ children }) => (
  <ul className="list-group">
    {children}
  </ul>
);

export function ListItem({ children }) {
  return (
    <>
    {/*<div className="Question__tag">{""}</div>*/}
    <li className="list-group-item Question">{children}</li>
  </>
      );
}
