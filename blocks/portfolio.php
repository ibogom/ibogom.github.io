<?php
include("db.php"); /*Соеденяемся с БД*/
mysql_query("SET NAMES 'utf8'");
$result = mysql_query("SELECT * FROM portfolio",$db);
if (!$result)
{
	echo "<p>Запрос на выборку данных из базы не прошел. Напишите об этом администратору snoppy911@mail.ru</br>
	<strong>Код ошибки:</strong></p>";
	 ?><p><?php exit(mysql_error()); ?></p> <?php
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
 <div class="content text" id="portfolio">
      <h2>
            ~<br/>
           наши работы
      </h2>
    <p>
    Все это делает наши сайты эффективными инструментами продаж и развития бизнеса наших заказчиков в сети Интернет.
    Наше рекламное агенство предоставляет услуги по изготовлению медиа-рекламы в различных направлениях, в число которых также входят наружная реклама, реклама в транспорте, на телевидении и в других СМИ.
    </p>
  </div>
<?php
do
{
	printf(" 
  <div class='content text portfolio'>
  <div class='title'>
  <h4>
  ~<br/>
  %s
  </h4>
  <p>designer: %s</p>
  </div>
  	<div class='portfolio_wrapper'>
      <div class='left_content pic'><img src='%s' /></div>
      <div class='center_content pic'><img src='%s' /></div>
      <div class='right_content pic'><img src='%s' /></div>
    </div>
      <div class='description'>
      <p>
      	%s
      </p>
      </div>
  </div>",$myrow['title'],$myrow['designer'],$myrow['mini_img1'],$myrow['mini_img2'],$myrow['mini_img3'],$myrow['text_content']);
}while($myrow = mysql_fetch_array($result));