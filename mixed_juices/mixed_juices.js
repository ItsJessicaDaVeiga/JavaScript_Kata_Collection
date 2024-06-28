/* Hello Internet ✨ , find the link to the instruction right here ⬇️
https://exercism.org/tracks/javascript/exercises/mixed-juices*/


/* Task 1: Determine how long it takes to prepare a certain juice.
param {string} name of the juice
returns {number} time in minutes */

function timeToMixJuice(name) {
    let time = 0;
    switch(name){
      case 'Pure Strawberry Joy':
        time = 0.5;
        break;
      case 'Energizer':
      case 'Green Garden':
        time = 1.5;
        break;
      case 'Tropical Island':
        time = 3
        break;
      case 'All or Nothing':
        time = 5
        break;
      default:
        time = 2.5
        break;
    }
    return time
  }

/* Task 2: Replenish the lime wedge supply
Calculates the number of limes that need to be cut to reach a certain supply.
param {number} wedgesNeeded
param {string[]} limes
returns {number} number of limes cut */

function limesToCut(wedgesNeeded, limes) {
    let nbWedge = 0;
    let nbLime = 0;
    let i = 0;
    console.log("Lime length: " + limes.length);
  
    while ((i < limes.length ) && (nbWedge < wedgesNeeded))  {
        switch (limes[i]){
        case 'small':
            nbWedge += 6
            nbLime ++
            i++
            break;
        case 'medium':
            nbWedge += 8
            nbLime ++
            i++
            break
        case 'large':
            nbWedge += 10
            nbLime ++
            i++
            break
        } ;
    }
    return nbLime;
  }

/* Task 3: Finish up the shift
param {number} timeLeft
param {string[]} orders
returns {string[]} remaining orders after the time is up
*/


function remainingOrders(timeLeft, orders) { 
    do {
        timeLeft -= timeToMixJuice(orders[0])
        orders.shift();    
    } while (timeLeft > 0);
    return orders
}
