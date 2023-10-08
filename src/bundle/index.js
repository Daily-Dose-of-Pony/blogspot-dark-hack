// (c) 2023 Daily Dose of Pony
// Contributors: Lumière Élevé

"use strict";

// Global functions for quick element selection
let qse = (selector, source = document) => {
	return source.querySelector(selector);
};
let qsa = (selector, source = document) => {
	return source.querySelectorAll(selector);
};

// Remove the scripting HTML widget as soon as execution starts
qse(".widget.HTML").remove();

let currentScheme = 0;

// If implemented, save colour scheme preferences here

// Helper for setting colour scheme
let setScheme = (scheme = 0) => {
	currentScheme = scheme % 3;
	document.body.className = ["", "prefer-dark", "prefer-light"][scheme] || "";
};

// Define a global colour switcher
self.switchColourScheme = () => {
	setScheme(++ currentScheme);
};