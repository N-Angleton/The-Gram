import React from "react";
import {createRoot} from 'react-dom/client';


document.addEventListener('DOMContentLoaded', () => {
    const rootElement = document.getElementById('root')
    const root = createRoot(rootElement)
    root.render(<h1>Hello</h1>)
})

