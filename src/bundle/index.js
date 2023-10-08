// (c) 2023 Daily Dose of Pony
// Contributors: Lumière Élevé

"use strict";

import svgIconAuto from "../../img/circle.svg";
import svgIconSun from "../../img/sun.svg";
import svgIconMoon from "../../img/moon.svg";

if (document.body?.className.indexOf("mobile") > -1) {
	// Reject on mobile
	throw(new Error(`This bundle does not support mobile devices.`));
};

// Global functions for quick element selection
let qse = (selector, source = document) => {
	return source.querySelector(selector);
};
let qsa = (selector, source = document) => {
	return source.querySelectorAll(selector);
};

// Remove the scripting HTML widget as soon as execution starts
qse(".widget.HTML").remove();

// Try to find the action button
let switchButton = qse("a[href='javascript:switchColourScheme()']");

// Initialize the colour scheme
let currentScheme = 0;

// Helper for setting colour scheme
let setScheme = (scheme = 0) => {
	currentScheme = scheme % 3;
	document.body.className = ["", "prefer-dark", "prefer-light"][currentScheme];
	switchButton.innerHTML = `<img style="margin:-4px;" src="data:image/svg+xml,${encodeURIComponent([svgIconAuto, svgIconMoon, svgIconSun][currentScheme])}"></img>`;
};

// If implemented, load saved colour scheme preferences here

// Apply loaded colour scheme
setScheme(currentScheme);

// Define a global colour switcher
self.switchColourScheme = () => {
	setScheme(++ currentScheme);
};