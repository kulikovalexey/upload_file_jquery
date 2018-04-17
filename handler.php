if(isset($_FILES) && isset($_FILES['image'])) {

    $image = $_FILES['image'];

    if ($image['size'] > 200000) {
        die('error');
    }

    $imageFormat = explode(‘.’, $image[‘name’]);
    $imageFormat = array_pop($imageFormat);
 
    $imageFullName = './images/' . hash('crc32',time()) . '.' . $imageFormat;

    $imageType = $image['type'];

    if ($imageType == 'image/jpeg' || $imageType == 'image/png') {
        if (move_uploaded_file($image['tmp_name'],$imageFullName)) {
            echo 'success';
        } else {
            echo 'error';
        }
    }
}
