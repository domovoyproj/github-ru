// RuHub - Расширение русификации GitHub + утилиты разработчика
// https://github.com/domovoyproj/github-ru

const DICTIONARY = {
  // --- Главная навигация репозитория ---
  "pull requests": "Пул-реквесты",
  "pull request": "Пул-реквест",
  "issues": "Задачи",
  "issue": "Задача",
  "code": "Код",
  "actions": "Действия",
  "action": "Действие",
  "projects": "Проекты",
  "project": "Проект",
  "wiki": "Вики",
  "security": "Безопасность",
  "security and quality": "Безопасность и качество",
  "insights": "Аналитика",
  "settings": "Настройки",
  "discussions": "Обсуждения",
  "discussion": "Обсуждение",
  
  // --- Кнопки действий над репозиторием ---
  "fork": "Форк",
  "forks": "Форки",
  "star": "Оценить",
  "unstar": "Не оценивать",
  "starred": "Оценено",
  "watch": "Следить",
  "unwatch": "Не следить",
  "watching": "Отслеживают",
  "pin": "Закрепить",
  "unpin": "Открепить",
  "pinned": "Закреплено",
  "sponsor": "Спонсировать",
  "sponsoring": "Спонсирование",

  // --- Ветки, коммиты, релизы ---
  "commits": "Коммиты",
  "commit": "Коммит",
  "branches": "Ветки",
  "branch": "Ветка",
  "tags": "Теги",
  "tag": "Тег",
  "releases": "Релизы",
  "release": "Релиз",
  "latest": "Последний",
  "latest release": "Последний релиз",
  "release list": "Список релизов",
  "draft a new release": "Создать черновик релиза",
  "find a release": "Поиск релизов",
  "create a new release": "Создать новый релиз",
  "compare": "Сравнить",
  "compare & pull request": "Сравнить и создать PR",
  "contributors": "Участники",
  "contributor": "Участник",
  "raw": "Исходник",
  "blame": "История строк",
  "history": "История",
  "preview": "Предпросмотр",
  "open pull request": "Открыть пул-реквест",
  "close pull request": "Закрыть пул-реквест",
  "merge pull request": "Слить пул-реквест",
  "squash and merge": "Объединить и слить (Squash)",
  "rebase and merge": "Перебазировать и слить (Rebase)",
  "files changed": "Измененные файлы",
  "conversation": "Обсуждение",
  "checks": "Проверки",
  "labels": "Метки",
  "milestones": "Этапы",
  "assignees": "Исполнители",
  "author": "Автор",

  // --- Меню профиля ---
  "set status": "Задать статус",
  "profile": "Профиль",
  "your profile": "Ваш профиль",
  "your repositories": "Ваши репозитории",
  "your organizations": "Ваши организации",
  "your projects": "Ваши проекты",
  "your stars": "Ваши звёзды",
  "your gists": "Ваши gist-ы",
  "your sponsors": "Ваши спонсоры",
  "gists": "Gist-ы",
  "organizations": "Организации",
  "enterprises": "Предприятия",
  "sponsors": "Спонсоры",
  "copilot settings": "Настройки Copilot",
  "feature preview": "Предпросмотр функций",
  "appearance": "Внешний вид",
  "accessibility": "Доступность",
  "try enterprise": "Попробовать Enterprise",
  "upgrade": "Улучшить тариф",
  "help": "Помощь",
  "documentation": "Документация",
  "support": "Поддержка",

  // --- Общие действия и интерфейс ---
  "new": "Создать",
  "new repository": "Новый репозиторий",
  "new organization": "Новая организация",
  "new project": "Новый проект",
  "edit": "Редактировать",
  "delete": "Удалить",
  "cancel": "Отмена",
  "save": "Сохранить",
  "save changes": "Сохранить изменения",
  "submit": "Отправить",
  "close": "Закрыть",
  "open": "Открыть",
  "closed": "Закрыто",
  "merged": "Слито",
  "draft": "Черновик",
  "add file": "Добавить файл",
  "upload files": "Загрузить файлы",
  "create new file": "Создать новый файл",
  "go to file": "Перейти к файлу",
  "download zip": "Скачать ZIP",
  "copy": "Копировать",
  "copied!": "Скопировано!",
  "clone": "Клонировать",
  "search": "Поиск",
  "search or jump to...": "Поиск или быстрый переход...",
  "filter": "Фильтр",
  "sort": "Сортировка",
  "sort by": "Сортировать по",
  "add": "Добавить",
  "remove": "Удалить",
  "update": "Обновить",
  "rename": "Переименовать",
  "confirm": "Подтвердить",
  "back": "Назад",
  "next": "Далее",
  "previous": "Предыдущий",
  "loading": "Загрузка...",
  "more": "Ещё",
  "less": "Свернуть",
  "show more": "Показать больше",
  "view all": "Показать все",
  "sign in": "Войти",
  "sign up": "Регистрация",
  "sign out": "Выйти",

  // --- Метаданные и сайдбар ---
  "about": "О проекте",
  "readme": "README",
  "public": "Публичный",
  "private": "Приватный",
  "activity": "Активность",
  "language": "Язык",
  "languages": "Языки",
  "topics": "Темы",
  "license": "Лицензия",
  "notifications": "Уведомления",
  "dashboard": "Панель управления",
  "explore": "Обзор",
  "marketplace": "Магазин",
  "pricing": "Тарифы",
  "repositories": "Репозитории",
  "repository": "Репозиторий",
  "overview": "Обзор",
  "packages": "Пакеты",
  "environments": "Окружения",
  "deployments": "Развертывания",
  "stars": "Звёзды",
  "followers": "Подписчики",
  "following": "Подписки"
};

// --- Защита от перевода кода и пользовательского контента ---
function shouldSkipNode(node) {
  if (!node || !node.parentElement) return true;
  const el = node.parentElement;

  // Игнорируем технические теги, редакторы, преформатированный код и поля ввода
  const ignoredTags = ['SCRIPT', 'STYLE', 'TEXTAREA', 'INPUT', 'CODE', 'PRE', 'NOSCRIPT', 'MATH', 'SVG'];
  if (ignoredTags.includes(el.tagName)) return true;

  if (el.isContentEditable) return true;

  // Проверка селекторов блоков кода, diff и редакторов GitHub
  if (el.closest('pre, code, .blob-wrapper, .blob-code, .highlight, .react-code-text, .cm-content, .monaco-editor, [data-lexical-editor], .diff-table, .js-file-line')) {
    return true;
  }

  return false;
}

// --- Переводчик DOM ---
function translateDOM() {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
  let node;

  while ((node = walker.nextNode())) {
    if (shouldSkipNode(node)) continue;

    const originalText = node.nodeValue;
    if (!originalText) continue;

    const trimmedText = originalText.trim().toLowerCase();
    if (DICTIONARY[trimmedText]) {
      const translated = DICTIONARY[trimmedText];
      // Сохраняем исходные отступы вокруг слова
      node.nodeValue = originalText.replace(originalText.trim(), translated);
    }
  }

  // Перевод атрибутов (aria-label, placeholder, title)
  const elementsWithAttributes = document.querySelectorAll('[aria-label], [placeholder], [title], [data-content]');
  elementsWithAttributes.forEach(el => {
    if (el.closest('pre, code, .blob-wrapper, .highlight, .cm-content, .monaco-editor')) return;
    
    ['aria-label', 'placeholder', 'title', 'data-content'].forEach(attr => {
      if (el.hasAttribute(attr)) {
        const val = el.getAttribute(attr)?.trim().toLowerCase();
        if (val && DICTIONARY[val]) {
          el.setAttribute(attr, DICTIONARY[val]);
        }
      }
    });
  });
}

// Защита от спама мутациями (throttling)
let translationTimeout = null;
function requestTranslation() {
  if (translationTimeout) return;
  translationTimeout = setTimeout(() => {
    translateDOM();
    injectCustomButtons();
    translationTimeout = null;
  }, 80);
}

// --- Полезные кнопки для разработчиков ---
function injectCustomButtons() {
  const pageheadActions = document.querySelector('ul.pagehead-actions');
  if (!pageheadActions) return;

  // 1. Кнопка "Открыть в VS Code (github.dev)"
  if (!document.getElementById('ruhub-btn-vs-code')) {
    const vscodeLi = document.createElement('li');
    vscodeLi.id = 'ruhub-btn-vs-code';
    const vscodeUrl = window.location.href.replace('github.com', 'github.dev');

    vscodeLi.innerHTML = `
      <a href="${vscodeUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-sm ruhub-btn" title="Открыть репозиторий в веб-редакторе VS Code (github.dev)">
        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" class="octicon">
          <path d="M11.28 6.78a.75.75 0 0 0-1.06-1.06L7.22 8.72a.75.75 0 0 0 0 1.06l3 3a.75.75 0 1 0 1.06-1.06L8.81 9.25l2.47-2.47Z"></path>
          <path d="M2 2.75C2 1.784 2.784 1 3.75 1h8.5C13.216 1 14 1.784 14 2.75v10.5A1.75 1.75 0 0 1 12.25 15h-8.5A1.75 1.75 0 0 1 2 13.25Zm1.75-.25a.25.25 0 0 0-.25.25v10.5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25V2.75a.25.25 0 0 0-.25-.25Z"></path>
        </svg>
        <span class="d-none d-md-inline">VS Code</span>
      </a>
    `;
    pageheadActions.prepend(vscodeLi);
  }

  // 2. Кнопка "Скачать ZIP"
  if (!document.getElementById('ruhub-btn-zip')) {
    const parts = window.location.pathname.split('/').filter(Boolean);
    if (parts.length >= 2) {
      const [user, repo] = parts;
      const zipLi = document.createElement('li');
      zipLi.id = 'ruhub-btn-zip';
      const zipUrl = `/${user}/${repo}/archive/HEAD.zip`;

      zipLi.innerHTML = `
        <a href="${zipUrl}" class="btn btn-sm ruhub-btn" title="Скачать ZIP архив текущей ветки репозитория">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" class="octicon">
            <path d="M2.75 14A1.75 1.75 0 0 1 1 12.25v-2.5a.75.75 0 0 1 1.5 0v2.5c0 .138.112.25.25.25h10.5a.25.25 0 0 0 .25-.25v-2.5a.75.75 0 0 1 1.5 0v2.5A1.75 1.75 0 0 1 13.25 14Z"></path>
            <path d="M7.25 7.689V2a.75.75 0 0 1 1.5 0v5.689l1.97-1.969a.749.749 0 1 1 1.06 1.06l-3.25 3.25a.749.749 0 0 1-1.06 0L4.22 6.78a.749.749 0 1 1 1.06-1.06l1.97 1.969Z"></path>
          </svg>
          <span class="d-none d-md-inline">ZIP</span>
        </a>
      `;
      pageheadActions.prepend(zipLi);
    }
  }
}

// Запуск при старте
requestTranslation();

// Наблюдение за динамическими изменениями GitHub SPA
const observer = new MutationObserver(() => {
  requestTranslation();
});
observer.observe(document.body, { childList: true, subtree: true, characterData: true });
