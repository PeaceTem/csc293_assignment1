<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
	<title>My Life Story</title>
</head>
<body>
<?php
echo "<div class='root'>";

// This is the root page of the website
// Define an array of page links
$pages = array(
    "my_story" => "my_story.php",
    "univeristy_of_Ibadan" => "uni_ibadan.php",
    "lecturers" => "lecturers.php"
);

// Check if a page parameter is set in the URL
if(isset($_GET["page"])) {
    $page = $_GET["page"];
    if(array_key_exists($page, $pages)) {
        // If the page exists, include the corresponding file
        echo "<div id=\"head\">";
        echo "<h1><a href='/'>Home</a></h1>";
        echo "<nav>";
        echo "<ul>";
        foreach($pages as $title => $url) {
            echo "<li><a href=\"?page=$title\">$title</a></li>";
        }
        echo "</ul>";
        echo "</nav>";
        echo "</div>";

        include $pages[$page];
        exit;
    } else {
        // If the page does not exist, show an error message
        echo "<p>Page not found!</p>";

        exit;
    }
} else {
    // If no page parameter is set, show a navigation menu
    echo "<div id=\"head\">";
    echo "<h1>My Story</h1>";
    echo "<nav>";
    echo "<ul>";
    foreach($pages as $title => $url) {
        echo "<li><a href=\"?page=$title\">$title</a></li>";
    }
    echo "</ul>";
    echo "</nav>";
    echo "</div>";
    // The page containing my story is display by default
    require "story.php";
    exit;
}
echo "</div>";
?>


</body>
</html>