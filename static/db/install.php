<meta charset="utf-8">
<?php 
//����������� � ����� ���� ������
$db = new SQLite3('my.db');

//���� ���� ������ ��� ��������� �� �����, ��� ��� my.db � ���� ����
//if ($db->exec("CREATE DATABASE myphp")) echo "���� ������ �������<br>";

//������� ������� �������������
if ($db->exec("CREATE TABLE IF NOT EXISTS 'user'
               ('id' INTEGER PRIMARY KEY  AUTOINCREMENT  NOT NULL  UNIQUE , 
               'name' VARCHAR(20), 
               'age' INT(3), 
               'city' VARCHAR(50))"))
echo "������� ������������� �������<br>";

//������ ���� ������ � �������
if($db->exec("INSERT INTO user VALUES (1,'Andrey',15,'Odessa')")) echo "���� ������ �������<br>";
if($db->exec("INSERT INTO user VALUES (2,'Vitaliy',28,'Dnepr')")) echo "���� ������ �������<br>";

echo "-------------------------------------------<br>";

//������� ���� ������
$results = $db->query('SELECT * FROM user');
while ($row = $results->fetchArray()) {
    echo "���������<br>";
    echo "id:".$row['id']." ���: ".$row['name']." �������: ".$row['age']." �����: ".$row['city'];
}

//��������� ���������� � �����.
$db->close();

?>
<p><a href="/">�� �������</a></p>