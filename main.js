document.getElementById('collapse-toc-btn').addEventListener('click', function() {
    var tocContainer = document.getElementById('toc-container');
    var viewerContainer = document.getElementById('viewer-container');
    var commentsContainer = document.getElementById('comments-container');

    // Toggle the TOC visibility
    tocContainer.classList.toggle('collapsed');
    if (tocContainer.classList.contains('collapsed')) {
      viewerContainer.style.width = '100%'; 
    } else {
      viewerContainer.style.width = 'calc(100% - 240px)'; 
    }
  });

  document.getElementById('collapse-comments-btn').addEventListener('click', function() {
    var commentsContainer = document.getElementById('comments-container');
    var viewerContainer = document.getElementById('viewer-container');

    // Toggle the Comments visibility
    commentsContainer.classList.toggle('collapsed');
    if (commentsContainer.classList.contains('collapsed')) {
      viewerContainer.style.width = '100%'; 
    } else {
      viewerContainer.style.width = 'calc(100% - 500px)'; 
    }
  });