// import React from 'react';
import { useTabText } from "../../hooks/useTabText";

function PageHeader() {
const { activeTabText } = useTabText();
    return (
        <>
            <h1 className="font-bold text-4xl font-inter mb-4">{activeTabText}</h1>
        </>
    );
}

export default PageHeader;