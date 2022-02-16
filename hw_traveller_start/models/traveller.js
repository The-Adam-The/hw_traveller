const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  const output = [];
  this.journeys.forEach((journey) => {
    output.push(journey.startLocation);
  }) 
  return output;
};

Traveller.prototype.getJourneyEndLocations = function () {
  const output = [];
  this.journeys.forEach((journey) => {
    output.push(journey.endLocation);
  }) 
  return output;
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  const output = this.journeys.filter(journey => journey.transport === transport)
  return output;
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  const output = this.journeys.filter(journey => journey.distance > minDistance);
    return output;
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  const output = this.journeys.reduce((runningTotal, journey) => {
    return runningTotal += journey.distance;
  }, 0);
  return output;
};

Traveller.prototype.getUniqueModesOfTransport = function () {
const outputSet = new Set();
this.journeys.forEach((journey) => {
  outputSet.add(journey.transport);
}) 
  const output = Array.from(outputSet); 
  return output;
};

module.exports = Traveller;
