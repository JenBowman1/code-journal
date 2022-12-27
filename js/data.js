/* exported data */

var data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1
};

window.addEventListener('beforeunload', function (event) {
  var current = JSON.stringify(data);
  localStorage.setItem('code-journal', current);
});

var formData = localStorage.getItem('code-journal');

if (formData !== null) {
  formData = JSON.parse(formData);
}
