'use strict';

chrome.runtime.onInstalled.addListener(function (details) {
  console.log('previousVersion', details.previousVersion);
});

chrome.browserAction.setBadgeText({text: '\'Allo'});

console.log('\'Allo \'Allo! Event Page for Browser Action');

chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
  if(request) {
    var storageService = new markticleStorageService();
    if(request.action === 'add') {
      storageService.add(request.data);
    }
  }
});
