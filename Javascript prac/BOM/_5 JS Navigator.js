console.log("JavaScript Window Navigator");

// The window.navigator object contains information about the visitor's browser.

// The cookieEnabled property returns true if cookies are enabled, otherwise false:
console.log(navigator.cookieEnabled);

// The appName property returns the application name of the browser:
console.log(navigator.appname); // This property is removed (deprecated) in the latest web standard.

// The product property returns the product name of the browser engine:
console.log(navigator.product);

// The appVersion property returns version information about the browser:
console.log(navigator.appVersion);

// The userAgent property returns the user-agent header sent by the browser to the server:
console.log(navigator.userAgent);

//The platform property returns the browser platform (operating system):
console.log(navigator.platform);

// The onLine property returns true if the browser is online:
console.log(navigator.onLine);

// The javaEnabled() method returns true if Java is enabled:
console.log(navigator.javaEnabled());

/*
// Warning:
The information from the navigator object can often be misleading.

The navigator object should not be used to detect browser versions because:

Different browsers can use the same name
The navigator data can be changed by the browser owner
Some browsers misidentify themselves to bypass site tests
Browsers cannot report new operating systems, released later than the browser
*/