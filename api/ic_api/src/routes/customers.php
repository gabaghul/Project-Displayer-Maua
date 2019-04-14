<?php
use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Message\ResponseInterface as Response;

$app = new \Slim\App;

$app->get('/api/cards', function (Request $request, Response $response) {
    $sql = "SELECT * FROM ic_data";

    try{
        $db = new db();

        $db = $db->connect();

        $stmt = $db->query($sql);
        $cards = $stmt->fetchAll(PDO::FETCH_OBJ);
        $db = null;
        echo json_encode($cards);
    }catch(PDOException $e){
        echo '{"error": {"text": '.$e->getMessage().'}';
    }
});


$app->post('/api/cards/add', function (Request $request, Response $response) {
    $name_card = $request->getParam('name_card');
    $text1 = $request->getParam('text1');
    $text2 = $request->getParam('text2');
    $img = $request->getParam('img');

    $sql = "INSERT INTO ic_data (name_card, text1, text2, img) VALUES (:name_card, :text1, :text2, :img)";

    try{
        $db = new db();

        $db = $db->connect();

        $stmt = $db->prepare($sql);

        $stmt->bindParam(':name_card', $name_card);
        $stmt->bindParam(':text1', $text1);
        $stmt->bindParam(':text2', $text2);
        $stmt->bindParam(':img', $img);

        $stmt->execute();

        echo 'teste';
        
    }catch(PDOException $e){
        echo '{"error": {"text": '.$e->getMessage().'}';
    }
});