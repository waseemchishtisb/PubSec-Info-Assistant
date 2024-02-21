// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Outlet, NavLink, Link } from "react-router-dom";

import openai from "../../assets/openai.svg";
import { WarningBanner } from "../../components/WarningBanner/WarningBanner";
import styles from "./Layout.module.css";
import { Title } from "../../components/Title/Title";
import veraqor from "../../assets/veraqor.png"

const Layout = () => {
    return (
        <div className={styles.layout}>
            <header className={styles.header} role={"banner"}>
                <WarningBanner />
                <div className={styles.headerContainer}>
                <img src={veraqor} alt="Azure OpenAI" className={styles.headerLogo} />
                    <div className={styles.headerTitleContainer}>
                        <h3 className={styles.headerTitle}><Title/></h3>
                        {/* <h3>Veraqor Information Assistant</h3> */}
                    </div>
                    <nav>
                        <ul className={styles.headerNavList}>
                   
                            <button type="button" className={styles.button1}>
                            {/* <li> */}
                        
                                <NavLink to="/" className={({ isActive }) => (isActive ? styles.headerNavPageLinkActive : styles.headerNavPageLink)}>
                                    Chat
                                </NavLink>
                                </button>
                                <button type="button" className={styles.button1}>
                            <li className={styles.headerNavLeftMargin}>
                                            <button type="button" className={styles.button1}>
                                <NavLink to="/content" className={({ isActive }) => (isActive ? styles.headerNavPageLinkActive : styles.headerNavPageLink)}>
                                    Manage Content
                                </NavLink>
                            </li>
                            </button>
                        </ul>
                    </nav>
                </div>
            </header>
            {/* <div className={styles.raibanner}>
                <span className={styles.raiwarning}>AI-generated content may be incorrect</span>
            </div> */}

            <Outlet />

            <footer>
                <WarningBanner />
            </footer>
        </div>
    );
};

export default Layout;
