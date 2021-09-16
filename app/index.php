<?php
    $title = "Base Communication";
    $text = $_POST['text']; //获取text
    $video = $_POST['video'];//获取video
    if($text == 'text') //如果有值，即代表input内的值被submit了，因此执行下面的语句，下面的if同理
    {
        $url = 'text';
    }
    if($video == 'video')
    {
        $url = 'video';
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $title; ?></title>
</head>
<body>
    <?php 
        switch($url)
        {
            case 'text':
                echo "<script>function jumurl(){window.location.href = './Text/text.html';} jumurl();</script>";
                break;
            case 'video':
                echo "<script>function jumurl(){window.location.href = './Video/video.html';} jumurl();</script>";
                break;
        }
    ?>
    <noframes>
        <h1>It means that you can't using this communication, please check your internet connection.</h1>
    </noframes>
</body>
</html>