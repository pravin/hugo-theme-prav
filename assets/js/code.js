// Adds a language label and a copy button to highlighted code blocks.
(function () {
    document.querySelectorAll('div.highlight').forEach(function (box) {
        var codes = box.querySelectorAll('code');
        if (!codes.length) return;
        var code = codes[codes.length - 1];
        var lang = (box.querySelector('code[data-lang]') || code).getAttribute('data-lang');

        box.classList.add('has-tools');

        if (lang) {
            var label = document.createElement('span');
            label.className = 'code-lang';
            label.textContent = lang;
            box.appendChild(label);
        }

        if (!navigator.clipboard) return;
        var button = document.createElement('button');
        button.type = 'button';
        button.className = 'code-copy';
        button.textContent = 'Copy';
        button.addEventListener('click', function () {
            navigator.clipboard.writeText(code.textContent).then(function () {
                button.textContent = 'Copied';
                setTimeout(function () { button.textContent = 'Copy'; }, 1500);
            }, function () {});
        });
        box.appendChild(button);
    });
})();
