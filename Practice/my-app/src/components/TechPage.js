import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function TechPage() {
  return (
    <>
        <div>
            <h1>Welcome to the Tech Page</h1>
            <Link to="/tech/react">React</Link> | {" "}
            <Link to="/tech/javascript">JavaScript</Link>
        </div>
        <Outlet />
    </>
    
  );
}