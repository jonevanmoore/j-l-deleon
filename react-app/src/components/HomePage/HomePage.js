import React, { useState } from "react";
import PDFFile from "../PDFFile/PDFFile";
import TestFile from "../TestFile/TestFile";
import { PDFDownloadLink } from "@react-pdf/renderer"

const HomePage = () => {

    return (
        <div>
            <h1>J.L. Deleon Entertainment</h1>
            <div>
                <PDFFile />
                <PDFDownloadLink document={<PDFFile />} fileName='Managing Oneself'>
                    <button>Download PDF</button>
                </PDFDownloadLink>
            </div>

        </div>
    )
}

export default HomePage
