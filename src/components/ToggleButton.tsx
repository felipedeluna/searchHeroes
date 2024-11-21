"use client";

import React, { useState } from "react";
import styles from "../app/page.module.css";
import Image from "next/image";

export default function ToggleButton() {
const [isToggled, setIsToggled] = useState(false);

const handleToggle = () => {
    setIsToggled(!isToggled);
};

return (
    <button
    onClick={handleToggle}
    className={styles.toggleButton}
    aria-label="Toggle Button"
    >
    {isToggled ? (
        <Image
        src="/assets/toggle/Group2.svg"
        alt="Logo do Grupo"
        layout="intrinsic"
        width={60}
        height={0}
    />
    ) : (
        <Image
        src="/assets/toggle/Group6.svg"
        alt="Logo do Grupo"
        layout="intrinsic"
        width={60}
        height={0}
    />
    )}
    </button>
);
}