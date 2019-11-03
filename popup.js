// popup.js
$(function () {
  $('#link').on('click', (e) => {
    chrome.tabs.create({url: $(e.target).attr('href')});
  });
  $('#link2').on('click', (e) => {
    chrome.tabs.create({url: $(e.target).attr('href')});
  });
});
