import React from "react";
import { Range } from "../components/Range";

export default {
  title: "Range",
};

export const Simple = () => (
 
    <div style={{ width: "300px" }}>
      <Range value={75} max={100} />
    </div>

);