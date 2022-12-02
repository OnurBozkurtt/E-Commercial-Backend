import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import '../../index.css';
import ReactDOM from 'react-dom';

import React from 'react';
import { ProgressSpinner } from 'primereact/progressspinner';

const Spinner = () => {
    return (
        <div>
            <div className="card">
                <ProgressSpinner />
            </div>
        </div>
    );
}

export default Spinner