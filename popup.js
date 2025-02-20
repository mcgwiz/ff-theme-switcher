function changeTheme(theme) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {action: 'changeTheme', theme: theme});
    });
  }
  
  document.getElementById('lightButton').addEventListener('click', function() {
    changeTheme('light');
  });
  
  document.getElementById('darkButton').addEventListener('click', function() {
    changeTheme('dark');
  });
