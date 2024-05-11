function changeTheme(theme) {
    document.body.setAttribute('data-theme', theme);
  }
  
  chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === 'changeTheme') {
      changeTheme(request.theme);
    }
  });
  