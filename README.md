# Specify id and class in HTML with CSS style selectors
### An HTML preprocessor that makes writing HTML more enjoyable than eating candy

```htmlc
	<div#title.box>    ---is preproccessed into--->    <div id='title' class='box'>
```

Allows for named end tags

```htmlc
	</div#title.box>    --->    </div>
```

(We all now how the end of a big HTML file looks like! This way its understandable what each end tag does.)

Allows script-style comments

```htmlc
	//<div#title.box>Comments</div#title.box>
	// These are completely removed from output, unlike HTML comments
```

The ^ symbol used for links

```htmlc
	<a^/about.html>About</a>    --->    <a href="about.html">About</a>
	<img^logo.png/>    --->    <img src="logo.png"/>

```


### Intended to be used with webpack and/or vue-loader
### Feel free to pull request/post issues
