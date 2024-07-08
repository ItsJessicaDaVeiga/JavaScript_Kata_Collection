/* Hello Internet ✨ , find the link to the instruction right here ⬇️
https://exercism.org/tracks/javascript/exercises/amusement-park/ */

/* Task 1: Create a new visitor
param {string} name
param {number} age
param {string} ticketId
returns {Visitor} the visitor that was created */
function createVisitor(name, age, ticketId) {
  let visitor = {};
  visitor.name = name;
  visitor.age = age;
  visitor.ticketId = ticketId;
  return visitor;
}

/* Task 2: Revokes a ticket for a visitor.
param {Visitor} visitor the visitor with an active ticket
returns {Visitor} the visitor without a ticket */
function revokeTicket(visitor) {
  visitor.ticketId = null
  return visitor
}

/* Task 3: Determines the status a ticket has in the ticket tracking object.
param {Record<string, string|null>} tickets
param {string} ticketId
returns {string} ticket status */
function ticketStatus(tickets, ticketId) {
  let key = ticketId;
  if (tickets[key] === undefined) {
    return 'unknown ticket id'
  } else if (tickets[key] == null ) {
    return 'not sold'
  } else { 
    return "sold to " + tickets[key]
  }
}

/* Task 4: Determines the status a ticket has in the ticket tracking object and returns a simplified status message.
param {Record<string, string|null>} tickets
param {string} ticketId
returns {string} ticket status */
function simpleTicketStatus(tickets, ticketId) {
  let ActualStatus = ticketStatus(tickets, ticketId)
  if (ActualStatus.includes("sold to")) {
    let indexToSliceInOrderToCut
    return ActualStatus.slice(8)
  } else {
    return 'invalid ticket !!!'
  }
}

/* Task 5: Determines the version of the GTC that was signed by the visitor.
param {VisitorWithGtc} visitor
returns {string | undefined} version */
function gtcVersion(visitor) {
  return visitor.gtc?.version
}
