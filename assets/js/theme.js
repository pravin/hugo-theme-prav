// Light/dark toggle. The saved choice is applied early by an inline script in <head>;
// without a saved choice the OS preference (prefers-color-scheme) is used.
(function () {
    var button = document.getElementById('theme-toggle');
    if (!button) return;

    function current() {
        var theme = document.documentElement.dataset.theme;
        if (theme === 'light' || theme === 'dark') return theme;
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    function label() {
        button.setAttribute('aria-label', current() === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
        button.title = button.getAttribute('aria-label');
    }

    button.addEventListener('click', function () {
        var next = current() === 'dark' ? 'light' : 'dark';
        document.documentElement.dataset.theme = next;
        try { localStorage.setItem('theme', next); } catch (e) {}
        label();
    });

    label();
})();
