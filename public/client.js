const api = 'http://localhost:3030/';

$(() => {
  $('#shorten-button').click(shorten);
});

async function shorten() {
  // Get objects from the page
  const $linkInput = $('#link-input');
  const $outLink = $('#output-link');
  const $outputDiv = $('#output-div');

  // Get input from the div
  const input = $linkInput.val();

  try {
    // Try to insert the link into the db

    // Set the link
    $outLink.text(resultLink);
    $outLink.attr('href', resultLink);

    // Show the result
    $outputDiv.removeClass('hidden');

    // Clear the input
    $linkInput.val('');
  } catch (err) {
    // Show the error
    $outputDiv.children()[0].text(err);
    $outputDiv.removeClass('hidden');
  }
}
