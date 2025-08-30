'use strict';

document.querySelectorAll('.tree ul ul').forEach((ul) => {
  ul.style.display = 'none';
});

const listItems = document.querySelectorAll('li');

listItems.forEach((li) => {
  const first = li.firstChild;

  if (first && first.nodeType === 3) {
    const span = document.createElement('span');

    span.textContent = first.textContent.trim();
    span.style.cursor = 'pointer';

    li.insertBefore(span, first);
    li.removeChild(first);

    const childUl = li.querySelector(':scope > ul');

    if (childUl) {
      span.addEventListener('click', () => {
        const isHidden = getComputedStyle(childUl).display === 'none';

        childUl.style.display = isHidden ? 'block' : 'none';
      });
    }
  }
});
