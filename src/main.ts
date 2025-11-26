import './styles/main.css';
import './styles/components.css';
import './styles/fonts.css';

declare global {
  interface Window {
    lucide?: {
      createIcons: () => void;
    };
  }
}

const initLucide = (): void => {
  window.lucide?.createIcons();
};

const initMobileMenu = (): void => {
  const menuButton = document.querySelector<HTMLButtonElement>('[data-mobile-menu-button]');
  const mobileMenu = document.querySelector<HTMLElement>('[data-mobile-menu]');

  if (!menuButton || !mobileMenu) {
    return;
  }

  menuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
};

document.addEventListener('DOMContentLoaded', () => {
  initLucide();
  initMobileMenu();
});

