export const externalLink = (url: string, openNewTab?: boolean) => {
  const el = document.createElement('a');
  document.body.appendChild(el);
  (el.style as unknown) = 'display: none';
  el.href = url || '';
  el.target = openNewTab ? '_blank' : '';
  el.click();
  document.body.removeChild(el);
};

export const scrollToIdHandler = (id: string) => {
  const el = document.getElementById(id);

  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  } else {
    return 'notFound';
  }
};
