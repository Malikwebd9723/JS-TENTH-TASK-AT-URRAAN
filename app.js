//array of news
const news = [
  "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.     ",
  "Contrary to popular belief, Lorem Ipsum is not simply random text.",
  "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.",
  "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
];
let tickerText = "";
//looping through the news array
for (let i = 0; i < news.length; i++) {
  tickerText += news[i];
}

document.querySelector("#scroll").innerHTML = tickerText;