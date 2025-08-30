'use strict';

'use strict';

const listItems = document.querySelectorAll('li');

listItems.forEach((li) => {
  const first = li.firstChild;

  if (first && first.nodeType === 3) {
    const span = document.createElement('span');

    span.textContent = first.textContent.trim();
    span.style.cursor = 'pointer';

    li.insertBefore(span, first);
    li.removeChild(first);

    const childUl = li.querySelector('ul');

    if (childUl) {
      span.addEventListener('click', () => {
        childUl.style.display =
          childUl.style.display === 'none' ? 'block' : 'none';
      });
    }
  }
});
