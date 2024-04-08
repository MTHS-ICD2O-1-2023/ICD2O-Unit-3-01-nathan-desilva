// Copyright (c) 2024 Nathan De Silva All rights reserved
//
// Created by: Nathan De Silva
// Created on: Mar 2024
// This file contains the JS functions for index.html

"use strict"

/**
 * This function calculates area of a trapezoid
 */
function doMathClicked() {
  // input
  const basea = parseInt(document.getElementById("a-base").value)
  const baseb = parseInt(document.getElementById("b-base").value)
  const height = parseInt(document.getElementById("height").value)

  // process
  const volumeOfTrapezoid = [(basea + baseb) / 2] * height

  // output
  document.getElementById("area-trapezoid").innerHTML =
    "<p>Area is: " + volumeOfTrapezoid + " mm². </p>"
}
