const PubSub = require('../helpers/pub_sub.js')

const SightingFormView = function (form) {
  this.form = form;
};

SightingFormView.prototype.bindEvents = function () {
  this.form.addEventListener('submit', (evt) => {
    this.handleSubmit(evt);
  });
};

SightingFormView.prototype.handleSubmit = function (evt) {
  evt.preventDefault();
  const newSighting = this.createSighting(evt.target)
  console.log('form view, submit', newSighting);
  PubSub.publish('SightingFormView:sighting-submitted', newSighting);
  evt.target.reset();
}

SightingFormView.prototype.createSighting = function (sighting) {
  const newSighting = {
    species: sighting.species.value,
    location: sighting.location.value,
    date: sighting.date.value
  };
  return newSighting;
};


module.exports = SightingFormView;
