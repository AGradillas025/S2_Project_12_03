"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 3

   Author:  Anthony S,A Gradillas
   Date:   3.1.19
   
   Filename: ah_report.js
   
   Functions:
   
   calcSum(donorAmt)
      A callback function that adds the current donation amount in the array to the donationTotal variable
   
   findMajorDonors(donorAmt)
      A callback function that returns the value true only if the current donation amount in the array
      is greater than or equal to 1000
      
   donorSortDescending(a, b)
      A callback function used to sort the donation amounts from the array in descending order
      
   writeDonorRow(value)
      A callback function that writes the HTML code for each table row that provides the contact
      information for the donor
      
*/

// Calculates the total amount of the donations to Appalachian House
var donationTotal = 0;

// This will calculate the donation total
donors.forEach(calcSum);

// The summaryTable variable will be storing the given HTML code
var summaryTable = "<table> <tr><th>Donors</th><td>" + donors.length + "</td></tr> <tr><th>Total Donations</th><td>$ " + donationTotal.toLocaleString() + "</td></tr> </table>";

// Sets the innerHTML property of the div element with the id of donationSummary to the value of the variable summaryTable
document.getElementById('donationSummary').innerHTML = summaryTable;

// Using the filter method with the callback function of findMajorDonors, an array was created named findMajorDonors and this will allow the report to show a list of the donors who contributed more than $1000 or more to the Appalachian House
var majorDonors = donors.filter(findMajorDonors);

// The sort method was applied to the majorDonors variable using the callback function donorSortDescending, and this allows the list of the major donors to be sorted in descending order
majorDonors.sort(donorSortDescending);

// The variable donorTable will store the following HTML code that was given for the table of major donors
var donorTable = "<table><caption>Major Donors</caption><tr><th>Donation</th><th>Donor ID</th><th>Date</th><th>Name</th><th>Address</th><th>Phone</th><th>E-mail</th></tr>";

// The HTML code was created for each donor row by applying the forEach method to the majorDonor variable, using the writeDonorRow as the callback function
majorDonors.forEach(writeDonorRow);

// The text string "</table>" was added to the value of the donorTable variable
donorTable += "</table>";

// The innerHTML property of the div element with the id donorTable to the value of the donorTable was set to allow all the following JS code to be published on the website
document.getElementById("donorTable").innerHTML = donorTable;



function calcSum(donorAmt) {
      donationTotal += donorAmt[9];
}

function findMajorDonors(donorAmt) {
      return donorAmt[9] >= 1000;
}

function donorSortDescending(a, b) {
      return b[9] - a[9];
}

function writeDonorRow(value) {
      donorTable += "<tr>";
      donorTable += "<td>$" + value[9].toLocaleString() + "</td>";
      donorTable += "<td>" + value[0] + "</td>";
      donorTable += "<td>" + value[10] + "</td>";
      donorTable += "<td>" + value[2] + ", " + value[1] + "</td>";
      donorTable += "<td>" + value[3] + "<br />" + value[4] + ", " + value[5] + " " + value[6] + "</td>";
      donorTable += "<td>" + value[7] + "</td>";
      donorTable += "<td>" + value[8] + "</td>";
      donorTable += "</tr>";
}