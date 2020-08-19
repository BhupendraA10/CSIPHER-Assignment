var Show = document.getElementById("display");
const data = [
  {
    key: 1,
    type: "cameras",
    name: "Canon Eos",
    price: "$10",
    image: "./images/camera.jpg",
  },
  {
    key: 2,
    type: "cameras",
    name: "FujiFilm",
    price: "$15",
    image: "./images/camera2.jpg",
  },
  {
    key: 3,
    type: "cameras",
    name: "SONY",
    price: "$20",
    image: "./images/camera3.jpg",
  },
  {
    key: 4,
    type: "cameras",
    name: "Olympus",
    price: "$7",
    image: "./images/camera4.jpg",
  },
  {
    key: 5,
    type: "watches",
    name: "Omega",
    price: "$7",
    image: "./images/watch1.jpg",
  },
  {
    key: 6,
    type: "watches",
    name: "HMT",
    price: "$5",
    image: "./images/watch2.jpg",
  },
  {
    key: 7,
    type: "watches",
    name: "Rolex",
    price: "$80",
    image: "./images/watch3.jpg",
  },
  {
    key: 8,
    type: "watches",
    name: "Hamilton",
    price: "$40",
    image: "./images/watch4.jpg",
  },
  {
    key: 9,
    type: "clothes",
    name: "Peter England",
    price: "$9",
    image: "./images/clothes1.jpg",
  },
  {
    key: 10,
    type: "clothes",
    name: "Tommy",
    price: "$60",
    image: "./images/clothes2.jpg",
  },
  {
    key: 11,
    type: "clothes",
    name: "Simple",
    price: "$4",
    image: "./images/clothes3.jpg",
  },
  {
    key: 12,
    type: "clothes",
    name: "Levis",
    price: "$60",
    image: "./images/clothes4.jpg",
  },
  {
    key: 13,
    type: "eatables",
    name: "Jalebi",
    price: "$8",
    image: "./images/jalebi.jpg",
  },
  {
    key: 14,
    type: "eatables",
    name: "Laddu",
    price: "$10",
    image: "./images/laddu.jpg",
  },
];
$(document).ready(function () {
  display();
});

function display() {
  Show.innerHTML = " ";
  let toShow = " ";
  data.map((item) => {
    toShow =
      toShow +
      `
        <div class="col-xs-4">
        <div class="thumbnail">
        <img src=${item.image} />
        <div class="caption">
        <h1 style="display:inline">${item.name}</h1>
        <h4 style="float:right; display:inline">Amount:-${item.price}</h4>
        </div>
        </div>
        </div>
        `;
  });
  Show.innerHTML = toShow;
}

function ShowNow(id) {
  Show.innerHTML = " ";
  let toShow = " ";
  let data1 = data.filter((a) => a.type === id);
  data1.map((item) => {
    toShow =
     toShow +
      `
        <div class="col-xs-4">
        <div class="thumbnail">
        <img src=${item.image} />
        <div class="caption">
        <h1 style="display:inline">${item.name}</h1>
        <h4 style="float:right; display:inline">Amount:-${item.price}</h4>
        </div>
        </div>
        </div>
        `;
  });
  Show.innerHTML = toShow;
}

function search() {
  let input = document.getElementById("search").value;
    Show.innerHTML = " ";
  let toShow = " ";
  //if the search letter is present in name
    let data1 = data.filter((a) => a.name.toLowerCase().includes(input));
    data1.map((item) => {
    toShow =
      toShow +
      `
        <div class="col-xs-4">
        <div class="thumbnail">
        <img src=${item.image} />
        <div class="caption">
        <h1 style="display:inline">${item.name}</h1>
        <h4 style="float:right; display:inline">Amount:-${item.price}</h4>
        </div>
        </div>
        </div>
        `;
  }); 
  Show.innerHTML = toShow;
}
