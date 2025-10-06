fetch('./games.json')
  .then(res => res.json())
  .then(games => {
    const container = document.getElementById('game-container');
    games.forEach(game => {
      const card = document.createElement('div');
      card.className = 'game-card';

      const title = document.createElement('div');
      title.className = 'title';
      title.textContent = game.title;

      const iframe = document.createElement('iframe');
      iframe.src = game.url;

      card.appendChild(title);
      card.appendChild(iframe);
      container.appendChild(card);
    });
  })
  .catch(err => {
    document.getElementById('game-container').innerHTML = '<p>🐸 Failed to load games. Check your games.json file.</p>';
    console.error('Error loading games:', err);
  });
