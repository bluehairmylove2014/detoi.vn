function handleClickOutside(
  focusArea: HTMLElement,
  className: string,
  event: MouseEvent
): void {
  const target = event.target as HTMLElement;
  if (!focusArea.contains(target)) {
    focusArea.classList.remove(className);
    if (typeof window !== 'undefined') {
      window.removeEventListener(
        'click',
        (focusArea as any)._handleClickOutside
      );
    }
  }
}

function toggleClass(
  element: HTMLElement | null,
  className: string = 'active'
): void {
  if (!element) {
    return;
  }
  const boundHandleClickOutside = (e: MouseEvent) =>
    handleClickOutside(element, className, e);

  if (element.classList.contains(className)) {
    element.classList.remove(className);
    if (typeof window !== 'undefined') {
      window.removeEventListener('click', (element as any)._handleClickOutside);
    }
  } else {
    element.classList.add(className);
    (element as any)._handleClickOutside = boundHandleClickOutside;
    setTimeout(() => {
      if (typeof window !== 'undefined') {
        window.addEventListener('click', (element as any)._handleClickOutside);
      }
    }, 100);
  }
}

function toggleClassNoListener(
  element: HTMLElement | null,
  className: string = 'active'
): void {
  if (!element) {
    return;
  }
  if (element.classList.contains(className)) {
    element.classList.remove(className);
  } else {
    element.classList.add(className);
  }
}

function addClass(element: HTMLElement | null, className: string) {
  if (element && !element.classList.contains(className)) {
    element.classList.add(className);
  }
}
function removeClass(element: HTMLElement | null, className: string) {
  if (element && element.classList.contains(className)) {
    element.classList.remove(className);
  }
}

export { toggleClass, toggleClassNoListener, addClass, removeClass };
