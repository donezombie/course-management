export const importExternalJS = () => {
  let listJSExternal = [
    'assets/vendor/material-design-kit.js',
  ];

  for (let jsSrc of listJSExternal) {
    const script = document.createElement("script");
    script.src = jsSrc;  
    document.body.appendChild(script);
  }
}