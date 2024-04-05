// Copyright (c) 2024 Nathan De Silva All rights reserved
//
// Created by: Nathan De Silva
// Created on: Mar 2024
// This file contains the JS functions for index.html

"use strict"

/**
 * This function calculates volume of a rectangular prism
 */
function doMathClicked() {
  // input
  const length = parseInt(document.getElementById("length").value)
  const width = parseInt(document.getElementById("width").value)
  const height = parseInt(document.getElementById("height").value)

  // process
  const volumeOfPrism = length * width * height

  // output
  document.getElementById("volume-rectangle").innerHTML =
    "<p>The volume of a rectangular prism is: " + volumeOfPrism + "cm³. </p>"
}
