'use client';

import { styles } from './ThemeToggle.styles';

const ThemeToggle = () => {
  const toggle = () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  };

  return (
    <button onClick={toggle} aria-label="Toggle theme" className={styles.toggle}>
      <span className="[html[data-theme='dark']_&]:hidden">Dark</span>
      <span className="[html[data-theme='light']_&]:hidden">Light</span>
    </button>
  );
};

export default ThemeToggle;
