onmessage = function (o) {
    importScripts("https://raw.githubusercontent.com/brurmonemt/PrecisionClientLocal/main/classes_server.js");
    eaglercraftServerOpts = o.data;
    main();
};
