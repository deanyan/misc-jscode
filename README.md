# Miscellaneous JavaScript Code

A repo to track down JS code.

In your web page:

```html
<script src="parentWinRedirect.js"></script>
```

## Documentation
_(Coming soon)_

## Examples
The custom error display function, you should define when you call the validate function:
```html
<script src="parentWinRedirect.js"></script>
<script>
  var dest = null;
  	
	document.getElementById('btn').onclick = function() {
	  dest = window.open('', '_blank', 'fullscreen=no, width=500, height=700, resizable=no');	
			parentWinRedirect(dest, "http://www.google.com/", 500);	
	}
</script>
```
## Release History
_(Nothing yet)_
