(function (window) {
  appendNewElementToRoot = function (element) {
    if (!element) {
      return;
    }

    const h1 = document.createElement('h1');
    const textNode = document.createTextNode('Hello From H1');
    h1.appendChild(textNode);
    element.appendChild(h1);
  };

  window.myThirdPartyLib = {appendNewElementToRoot};
})(window);

