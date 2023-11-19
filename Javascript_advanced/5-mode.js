function createModeChanger(size, weight, transform, background, color) {
    return function() {
      document.body.style.fontSize = size + 'px';
      document.body.style.fontWeight = weight;
      document.body.style.textTransform = transform;
      document.body.style.backgroundColor = background;
      document.body.style.color = color;
    };
  }
  
  function main() {
    let spooky = createModeChanger(9, 'bold', 'uppercase', 'pink', 'green');
    let darkMode = createModeChanger(12, 'bold', 'capitalize', 'black', 'white');
    let screamMode = createModeChanger(12, 'normal', 'lowercase', 'white', 'black');
  
    // Make paragraph with text
    let paragraph = document.createElement('p');
    let txt = document.createTextNode('Welcome Holberton!');
    paragraph.appendChild(txt);
    document.body.appendChild(paragraph);
  
    // First btn
    let btn = document.createElement('button');
    btn.innerHTML = 'Spooky';
    btn.addEventListener('click', spooky);
    document.body.appendChild(btn);
  
    // Second btn
    btn = document.createElement('button');
    btn.innerHTML = 'Dark mode';
    btn.addEventListener('click', darkMode);
    document.body.appendChild(btn);
  
    // Third btn
    btn = document.createElement('button');
    btn.innerHTML = 'Scream mode';
    btn.addEventListener('click', screamMode);
    document.body.appendChild(btn);
  }
  
  document.addEventListener("DOMContentLoaded", function(event) {
    main();
  });
  