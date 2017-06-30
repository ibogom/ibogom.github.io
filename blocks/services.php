<?php
include("db.php"); /*Соеденяемся с БД*/
mysql_query("SET NAMES 'utf8'");
$result = mysql_query("SELECT title FROM pages WHERE page='services'",$db);
if (!$result)
{
	echo "<p>Запрос на выборку данных из базы не прошел. Напишите об этом администратору snoppy911@mail.ru</br>
	<strong>Код ошибки:</strong></p>";
	exit(mysql_error());
}
if (mysql_num_rows($result)>0)
{
	$myrow = mysql_fetch_array($result);
}
else
{
	echo"<p>Информация по запросу не может быть извлечена в таблице нет записей.</p>";
	?><p><?php exit() ?></p><?php
}

 ?>
<div class="content" id="services">
      	<h2>
        ~<br/>
        НАШИ УСЛУГИ
        </h2>
<?php
$result2 = mysql_query("SELECT * FROM pages WHERE page='services'",$db);
if(!$result2)
{
	echo "<p>Запрос на выборку данных из базы не прошел. Напишите об этом администратору snoppy911@mail.ru		
                                    </br>
                                    <strong>Код ошибки:</strong></p>";
   ?><p><?php exit(mysql_error()); ?></p> <?php
}
if (mysql_num_rows($result2)>0)
{
	$myrow2 = mysql_fetch_array($result2);
}
do
{
	printf("
        <div class='small_content'>
        <img src='%s'>
        <h4>%s</h4>
		%s
        </div>",$myrow2['mini_img'],$myrow2['title'],$myrow2['text_content']);
}while($myrow2 = mysql_fetch_array($result2));
?>
  </div>
