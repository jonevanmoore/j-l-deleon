import React, { useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack"
import oneself from "../HomePage/oneself.pdf"


const HomePage = () => {

    const [numPage, setNumPages] = useState(null)
    const [pageNumber, setPageNumber] = useState(1)

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPage);
        setPageNumber(1)
    }

    return (
        <div>
            <h1>J.L. Deleon Entertainment</h1>
            <div>
                <header>
                    <Document file={oneself} onLoadSuccess={onDocumentLoadSuccess} onLoadError={console.error}>
                        <Page height="600" pageNumber={pageNumber} />
                    </Document>
                </header>
            </div>
        </div>
    )
}

export default HomePage
