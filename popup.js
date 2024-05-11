function changeTheme(theme) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {action: 'changeTheme', theme: theme});
    });
  }
  
  document.getElementById('lightButton').addEventListener('click', function() {
    changeTheme('Light');
  });
  
  document.getElementById('darkButton').addEventListener('click', function() {
    changeTheme('Dark');
  });
  
  document.getElementById('allstarButton').addEventListener('click', function() {
    changeTheme('Allstar');
  });
  
  document.getElementById('owlButton').addEventListener('click', function() {
    changeTheme('Owl');
  });
  