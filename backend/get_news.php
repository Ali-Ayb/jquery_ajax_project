<?php
include 'connection_db.php';

$sql = "SELECT * FROM news";
$result = mysqli_query($conn, $sql);

$news = array();
if (mysqli_num_rows($result) > 0) {
    while ($row = mysqli_fetch_assoc($result)) {
        $news[] = $row;
    }
}

echo json_encode($news);
