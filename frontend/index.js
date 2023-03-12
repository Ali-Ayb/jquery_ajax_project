$(document).ready(function () {
  $.ajax({
    url: "../backend/get_news.php",
    dataType: "json",
    success: function (data) {
      $.each(data, function (index, news) {
        var title = news.title;
        var description = news.description;
        var date = news.date;
        var html = '<div class="news">';
        html += "<h2>" + title + "</h2>";
        html += "<p>" + description + "</p>";
        html += "<span>" + date + "</span>";
        html += "</div>";
        $("body").append(html);
      });
    },
  });
});
