require.config({
    paths : {
        "jquery" : "jquery-2.1.1",
        "Markdown" : "Markdown/Converter",
        "Editor" : "Markdown/Editor"
    }
});

require(['jquery','MarkShow'], function(js, Markshow) {
	console.log("In Main");

	var markShow = new MarkShow();

});