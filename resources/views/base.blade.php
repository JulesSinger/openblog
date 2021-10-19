<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>L'OpenBlog - {{ $title }}</title> 
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Abhaya+Libre&family=Nunito&display=swap" rel="stylesheet"> 
    @section('stylesheets')
        <link rel="stylesheet" href="/css/app.css">
    @show
    @section('javascript')
        <script type="application/javascript" src="/js/app.js" defer></script>
    @show
</head>
<body>
    @section('content')
        <div id="app"></div>    
    @show
</body>
</html>