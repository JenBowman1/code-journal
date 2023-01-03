var blankImageUrl = 'images/placeholder-image-square.jpg';

var codeForm = document.querySelector('#code-notes');
var blankImage = document.querySelector('#blank-image');

var $paragraph = document.querySelector('.empty-message');

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
  data.nextEntryId++;
  data.entries.unshift(entry);
  blankImage.setAttribute('src', blankImageUrl);
  codeForm.reset();

  var $newEntry = renderEntry(entry);
  $journalEntries.prepend($newEntry);
  viewSwap('entries');

  toggleNoEntries();
});

function renderEntry(entry) {
  var $journalEntry = document.createElement('li');

  var $entryRow = document.createElement('div');
  $entryRow.setAttribute('class', 'row');
  $journalEntry.appendChild($entryRow);

  var $entryImageContainer = document.createElement('div');
  $entryImageContainer.setAttribute('class', 'column-half image-container');
  $entryRow.appendChild($entryImageContainer);

  var $entryImage = document.createElement('img');
  $entryImage.setAttribute('class', 'entry-image');
  $entryImage.setAttribute('src', entry.photoUrl);
  $entryImageContainer.appendChild($entryImage);

  var $entryContainer = document.createElement('div');
  $entryContainer.setAttribute('class', 'column-half entry-container');
  $entryRow.appendChild($entryContainer);

  var $entryTitle = document.createElement('h1');
  $entryTitle.textContent = entry.title;
  $entryContainer.appendChild($entryTitle);

  var $notes = document.createElement('p');
  $notes.textContent = entry.notes;
  $entryContainer.appendChild($notes);

  return $journalEntry;
}

var $journalEntries = document.querySelector('#journal-entries');

document.addEventListener('DOMContentLoaded', function () {
  data.entries.forEach(entry => {
    $journalEntries.appendChild(renderEntry(entry));
  });
  viewSwap(data.view);
  toggleNoEntries();
});

function toggleNoEntries() {
  if (data.entries.length !== 0) {
    $paragraph.setAttribute('class', 'hidden');
  } else {
    $paragraph.setAttribute('class', 'empty-message row');
  }
}

var $views = document.querySelectorAll('div[data-view]');

function viewSwap(viewName) {
  data.view = viewName;
  for (var i = 0; i < $views.length; i++) {
    if ($views[i].getAttribute('data-view') === viewName) {
      $views[i].className = '';
    } else {
      $views[i].className = 'hidden';
    }
  }
}

var $navItem = document.querySelector('#nav-item');
var $new = document.querySelector('#new');

function viewSwapEntriesHandler(event) {
  viewSwap('entries');
}
$navItem.addEventListener('click', viewSwapEntriesHandler);

function viewSwapEntryFormHandler(event) {
  viewSwap('entry-form');
}
$new.addEventListener('click', viewSwapEntryFormHandler);
