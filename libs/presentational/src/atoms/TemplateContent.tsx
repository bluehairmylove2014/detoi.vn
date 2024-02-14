import { useEffect, useState } from 'react';

function TemplateContent({ content }: { content: string }) {
  const [renderedContent, setRenderedContent] = useState<string>('');

  useEffect(() => {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = content;

    const allElements = tempDiv.querySelectorAll('*');
    allElements.forEach((element, index) => {
      if (index != 0) element.classList.add('mt-2');
    });

    //Custom Elements h1
    const h1Elements = tempDiv.querySelectorAll('h1');
    h1Elements.forEach((h1, index) => {
      if (index !== 0) {
        h1.classList.remove('mt-2');
        h1.classList.add('mt-16');
      }
    });

    //Custom Elements h5
    const h5Elements = tempDiv.querySelectorAll('h5');
    h5Elements.forEach((h5, index) => {
      h5.classList.add('text-base');
    });

    //Custom Elements p
    const pElements = tempDiv.querySelectorAll('p');
    pElements.forEach((p) => {
      p.classList.add('text-base');
    });

    //Custom Elements ul
    const ulElements = tempDiv.querySelectorAll('ul');
    ulElements.forEach((ul) => {
      ul.classList.add('text-base');
    });

    //Custom Elements li
    const liElements = tempDiv.querySelectorAll('li');
    liElements.forEach((li) => {
      li.classList.add('text-base');
    });

    setRenderedContent(tempDiv.innerHTML);
  }, [content]);

  return <div dangerouslySetInnerHTML={{ __html: renderedContent }} />;
}

export default TemplateContent;
