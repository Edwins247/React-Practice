import React, { createContext, useState } from "react";

export const UserContext = createContext();

export default function UserStore(props) {
    const [job, setJob] = useState("FE-developer");

    const user = {
        name: "hwarari",
        job: "FE-developer",
        changeJob: (updatedJob) => setJob(updatedJob),
    };

    return <UserContext.Provider value={user}>{props.children}</UserContext.Provider>
}