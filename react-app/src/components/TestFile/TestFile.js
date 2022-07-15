import React, { useState } from "react";
import { Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

import { Worker } from "@react-pdf-viewer/core";

import oneself from "../HomePage/oneself.pdf"

const TestFile = () => {
    const [defaultPdfFile] = useState(oneself)
    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    return (
        <>
            <Viewer
                fileUrl={defaultPdfFile}
                plugins={[defaultLayoutPluginInstance]}
            />
        </>
    )
}
export default TestFile
