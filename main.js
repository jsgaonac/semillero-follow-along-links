window.onload = init;

function init() {
    createHighlight();
}

function createHighlight() {
    const highlight = document.createElement('span');
    highlight.classList.add('highlight');

    const pageContainer = document.querySelector('.page');
    pageContainer.append(highlight);

    const links = document.querySelectorAll('a');
    links.forEach(a => a.addEventListener('mouseenter', (e) => highlightLink.call({ link: e.target, highlight: highlight })));
}

function highlightLink() {
    const coordinates = this.link.getBoundingClientRect();

    const coords = {
        width: coordinates.width,
        height: coordinates.height,
        x: coordinates.left + window.scrollX,
        y: coordinates.top + window.scrollY
    };

    this.highlight.style.width = `${coords.width}px`;
    this.highlight.style.height = `${coords.height}px`;
    this.highlight.style.transform = `translate(${coords.x}px, ${coords.y}px)`;
}
