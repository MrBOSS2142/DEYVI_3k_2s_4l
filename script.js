var canvas = document.getElementById("myChart");
var ctx = canvas.getContext("2d");

// Global Options:
Chart.defaults.global.defaultFontColor = "#fff";
Chart.defaults.global.defaultFontSize = 16;

// Data with datasets options
var data = {
  labels: [
    "Азербайджан",
    "Армения",
    "Казахстан",
    "Кыргыстан",
    "Молдова",
    "Россия",
    "Таджикистан",
    "Туркменистан",
    "Узбекситан",
    "Украина"
  ],
  datasets: [
    {
      label: "2017/2018 учебный год",
      fill: true,
      backgroundColor: "#878DFF",
      borderColor: "#373EFF",
      borderWidth: 3,
      pointRadius: 5,
      pointBorderColor: "#373EFF",
      pointBackgroundColor: "#373EFF",
      data: [10, 7, 54, 3, 4, 332, 6, 199, 10, 121]
    }
  ]
};
var myFirstChart = new Chart(ctx, {
  type: "line",
  data: data,
  options: {
    title: {
      fontSize: 20,
      display: true,
      text:
        "Распределение количества учащихся из стран СНГ (по дневной и заочной формам обучения)"
    },
    tooltips: {
      cornerRadius: 5,
      caretSize: 0,
      xPadding: 26,
      yPadding: 20,
      backgroundColor: "#595959",
      titleFontStyle: "normal",
      titleMarginBottom: 15
    }
  }
});
