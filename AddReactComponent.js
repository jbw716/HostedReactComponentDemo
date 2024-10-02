function loadScript(src, type) {
    var script = document.createElement('script');
    script.src = src;
    if (type) {
            script.type = type;
    }
    script.async = false;
    document.body.appendChild(script);
}
loadScript('https://unpkg.com/react@18/umd/react.production.min.js');
loadScript('https://unpkg.com/react-dom@18/umd/react-dom.production.min.js');
loadScript('https://unpkg.com/babel-standalone@6/babel.min.js');
loadScript('MyReactComponent.jsx', 'text/babel');

document.onreadystatechange = function () {
    if (document.readyState === 'complete') {
        if (document.querySelectorAll('head script').length === 0) {
            window.dispatchEvent(new Event('DOMContentLoaded'));
        }
    }
}