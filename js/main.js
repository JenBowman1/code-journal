var blankImageUrl = 'images/placeholder-image-square.jpg';

var codeForm = document.querySelector('#code-notes');
var blankImage = document.querySelector('#blank-image');

codeForm.addEventListener('input', function (event) {
  if (event.target.name === 'photoUrl') {
    blankImage.setAttribute('src', event.target.value);
  }
});

codeForm.addEventListener('submit', function (event) {
  event.preventDefault();
  var entry = {
    title: codeForm.elements.title.value,
    photoUrl: codeForm.elements.photoUrl.value,
    notes: codeForm.elements.notes.value
  };
  entry.entryId = data.nextEntryId;
  data.nextEntryId = data.nextEntryId + 1;
  data.entries.push(entry);
  codeForm.reset();
  blankImage.setAttribute('src', blankImageUrl);
});
