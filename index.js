import { cardsData } from './data.js';

console.log('fdsafdas,', cardsData);
function generateCards() {
  const cardContainer = document.getElementById('cardContainer');
  cardsData.forEach((card, index) => {
    const cardElement = document.createElement('a');
    cardElement.href = card.link;
    cardElement.target = '_blank';
    cardElement.classList.add('card');

    const titleElement = document.createElement('div');
    titleElement.classList.add('card-title');
    titleElement.textContent = card.title;

    // Create a container for the icon
    const iconContainer = document.createElement('div');
    iconContainer.classList.add('icon-container');

    // Create the GitHub icon link
    const githubLink = document.createElement('a');
    githubLink.href = card.github;
    githubLink.target = '_blank';
    githubLink.classList.add('icon-link');
    const githubIcon = document.createElement('i');
    githubIcon.classList.add('fab', 'fa-github');
    githubIcon.style.color = '#000';
    githubLink.appendChild(githubIcon);

    // Create the Youtube icon link

    const youtubeLink = document.createElement('a');
    youtubeLink.href = card.youtube;
    youtubeLink.target = '_blank';
    youtubeLink.classList.add('icon-link');
    const youtubeIcon = document.createElement('i');
    youtubeIcon.classList.add('fa-brands', 'fa-youtube');
    youtubeIcon.style.color = '#d6330a';
    youtubeLink.appendChild(youtubeIcon);

    // Create the Preview icon link
    const previewLink = document.createElement('a');
    previewLink.href = card.link;
    previewLink.target = '_blank';
    previewLink.classList.add('icon-link');
    const preview = document.createElement('i');
    preview.classList.add('fa-solid', 'fa-eye');
    preview.style.color = '#266cb7';

    previewLink.appendChild(preview);

    // Append the icon to the container
    iconContainer.appendChild(githubLink);
    iconContainer.appendChild(youtubeLink);
    iconContainer.appendChild(previewLink);

    cardElement.appendChild(titleElement);
    cardElement.appendChild(iconContainer); // Append the icon container to the card

    cardContainer.appendChild(cardElement);
  });
}

generateCards();
