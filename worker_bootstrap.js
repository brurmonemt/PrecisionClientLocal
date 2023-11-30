Access-Control-Allow-Origin: https://html.cafe

onmessage = function (o) {
    importScripts("https://raw.githubusercontent.com/brurmonemt/PrecisionClientLocal/main/classes_server.js");
    eaglercraftServerOpts = o.data;
    main();
};
