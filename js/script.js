// Copyright (c) 2024 Nathan De Silva. All rights reserved
//
// Created by: Nathan De Silva
// Created on: April 2024

'use strict'
/**
 * This function calculates area of a trapezoid
 */
function myButtonClicked() {
  // input
  const aBase = parseFloat(document.getElementById('a-base').value)
  const bBase = parseFloat(document.getElementById('b-base').value)
  const height = parseFloat(document.getElementById('height').value)

  // process
  const area = ((aBase + bBase) / 2) * height

  // output
  document.getElementById('area').innerHTML = 'The area is: ' + area + ' mm²'
}
