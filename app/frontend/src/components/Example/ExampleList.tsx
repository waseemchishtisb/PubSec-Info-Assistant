// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Example } from "./Example";

import styles from "./Example.module.css";

export type ExampleModel = {
    text: string;
    value: string;
};

const EXAMPLES: ExampleModel[] = [
    { text: "How Veraqor Leaves Encashment Policy Works?", value: "How Veraqor Leaves Encashment Policy Works?" },
    { text: "What travel reimbursements are avaialble at Veraqor?", value: "What travel reimbursements are avaialble at Veraqor?" },
    { text: "What are some medical coverages?", value: "What are some medical coverages?" }
];

interface Props {
    onExampleClicked: (value: string) => void;
}

export const ExampleList = ({ onExampleClicked }: Props) => {
    return (
        <ul className={styles.examplesNavList}>
            {EXAMPLES.map((x, i) => (
                <li key={i}>
                    <Example text={x.text} value={x.value} onClick={onExampleClicked} />
                </li>
            ))}
        </ul>
    );
};
