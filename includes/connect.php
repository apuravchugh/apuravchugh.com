<?php
$host = "localhost";
$username = "root";
$password = "root";
$db = "my_portfolio";
$conn = mysqli_connect($host, $username, $password, $db);
mysqli_set_charset($conn, 'utf8');

if(!$conn){
    echo "Error!";
    exit;
}
if (isset($_GET["categoryFilter"])){
    $categoryFilter = htmlentities($_GET["categoryFilter"]);
    $myQuery = "SELECT p.project_id, p.project_name, p.project_description, p.project_thumb, p.project_img1, p.project_img2, p.project_attachment, p.project_url, c.category_name
    FROM tbl_project p, tbl_category c 
    WHERE p.category_id = c.category_id
    $categoryFilter
    ORDER BY p.project_id;";
    $result = mysqli_query($conn, $myQuery);
    $portfolioRows = array();
    while($row = mysqli_fetch_assoc($result)){
        $portfolioRows[] = $row;
    }
}
$categoryTbl = "SELECT * FROM `tbl_category`";
$result = mysqli_query($conn, $categoryTbl);
$categoryRows = array();
while($row = mysqli_fetch_assoc($result)){
    $categoryRows[] = $row;
}
echo json_encode([$portfolioRows, $categoryRows]);
?>