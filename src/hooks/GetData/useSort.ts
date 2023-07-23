import { useState, useEffect } from "react";
import { Ticket } from "../../types/Ticket";

const useSort = (Data: Ticket[], Value: string) => {
    const [DataSort, setDataSort] = useState<Ticket[]>();


    return { DataSort };
};

export default useSort;


// - [ ] use useEffect and the refrech every time the Data change
// - [ ] Check before do the function if we going sorting "dsc" "acs" or normal