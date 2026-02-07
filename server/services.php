<?php
// server/services.php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

require_once 'db.php';

$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'OPTIONS') {
    exit;
}

switch ($method) {
    case 'GET':
        $stmt = $pdo->query("SELECT * FROM services ORDER BY id ASC");
        $results = $stmt->fetchAll();
        // Convert capabilities string back to array if needed
        foreach ($results as &$row) {
            $row['capabilities'] = json_decode($row['capabilities']);
        }
        echo json_encode($results);
        break;

    case 'POST':
        $data = json_decode(file_get_contents("php://input"), true);
        $stmt = $pdo->prepare("INSERT INTO services (id, title, subtitle, description, icon, image, capabilities) VALUES (?, ?, ?, ?, ?, ?, ?)");
        $stmt->execute([
            $data['id'],
            $data['title'],
            $data['subtitle'],
            $data['description'],
            $data['icon'],
            $data['image'],
            json_encode($data['capabilities'])
        ]);
        echo json_encode(['success' => true]);
        break;

    case 'PUT':
        $data = json_decode(file_get_contents("php://input"), true);
        $stmt = $pdo->prepare("UPDATE services SET title = ?, subtitle = ?, description = ?, icon = ?, image = ?, capabilities = ? WHERE id = ?");
        $stmt->execute([
            $data['title'],
            $data['subtitle'],
            $data['description'],
            $data['icon'],
            $data['image'],
            json_encode($data['capabilities']),
            $data['id']
        ]);
        echo json_encode(['success' => true]);
        break;

    case 'DELETE':
        $id = $_GET['id'] ?? null;
        if ($id) {
            $stmt = $pdo->prepare("DELETE FROM services WHERE id = ?");
            $stmt->execute([$id]);
            echo json_encode(['success' => true]);
        }
        break;
}
?>