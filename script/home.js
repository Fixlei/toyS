//--start-- imgs on sale

		let slideIndex = 1;
		showSlides(slideIndex);

		function plusSlides(n) {
		  showSlides(slideIndex += n);
		}

		function currentSlide(n) {
		  showSlides(slideIndex = n);
		}

		function showSlides(n) {
		  let i;
		  let slides = document.getElementsByClassName("mySlides");
		  let dots = document.getElementsByClassName("dot");
		  if (n > slides.length) {
			  slideIndex = 1;
		  }    
		  if (n < 1) {
			  slideIndex = slides.length;
		  }
		  for (i = 0; i < slides.length; i++) {
			slides[i].style.display = "none";  
		  }
		  for (i = 0; i < dots.length; i++) {
			dots[i].className = dots[i].className.replace(" active", "");
		  }
		  slides[slideIndex-1].style.display = "block";  
		  dots[slideIndex-1].className += " active";
		}

	//--End-- imgs on sale	

let data = [
	{
		img: "babyToys4.jpg",
		h4: "toys-Revel",
		desc: "Description of the product goes here. It can be as long as needed to convey necessary information.",
		price: 69.99
	},
	{
		img: "castle2.jpg",
		h4: "Settlers of Catan",
		desc: "Description of the product goes here. It can be as long as needed to convey necessary information.",
		price: 10.99
	},
	{
		img: "deskDeluxe2.jpg",
		h4: "xettlers of Catan",
		desc: "Description of the product goes here. It can be as long as needed to convey necessary information.",
		price: 39.99
	},
	{
		img: "deskeluxctivity1.jpg",
		h4: "toys-Revel",
		desc: "Description of the product goes here. It can be as long as needed to convey necessary information.",
		price: 15.99
	},
	{
		img: "donaldDuck2.jpg",
		h4: "Settlers of Catan",
		desc: "Description of the product goes here. It can be as long as needed to convey necessary information.",
		price: 22.99
	},
	{
		img: "dToddle2.jpg",
		h4: "Monopoly",
		desc: "Description of the product goes here. It can be as long as needed to convey necessary information.",
		price: 13.99
	},
	{
		img: "educationaloys3.jpg",
		h4: "Pokemon",
		desc: "Description of the product goes here. It can be as long as needed to convey necessary information.",
		price: 1.99
	},
	{
		img: "educationaloys21.jpg",
		h4: "Settlers of Catan",
		desc: "Description of the product goes here. It can be as long as needed to convey necessary information.",
		price: 18.99
	},
	{
		img: "elementarySchooStudents2.jpg",
		h4: "qettlers of Catan",
		desc: "Description of the product goes here. It can be as long as needed to convey necessary information.",
		price: 17.99
	},
	{
		img: "toysMelissaougFire.jpg",
		h4: "aettlers of Catan",
		desc: "Description of the product goes here. It can be as long as needed to convey necessary information.",
		price: 7.99
	},
	{
		img: "toysSettlersofCatan2.jpg",
		h4: "kettlers of Catan",
		desc: "Description of the product goes here. It can be as long as needed to convey necessary information.",
		price: 19.99
	},
	{
		img: "tToddlertoys1.jpg",
		h4: "uettlers of Catan",
		desc: "Description of the product goes here. It can be as long as needed to convey necessary information.",
		price: 11.99
	},
	{
		img: "teenToys1.jpg",
		h4: "yettlers of Catan",
		desc: "Description of the product goes here. It can be as long as needed to convey necessary information.",
		price: 19.99
	},
	{
		img: "ShinChan.jpg",
		h4: "Settlers of Catan",
		desc: "Description of the product goes here. It can be as long as needed to convey necessary information.",
		price: 19.99
	},
	{
		img: "SpiderMan.jpg",
		h4: "ettlers of Catan",
		desc: "Description of the product goes here. It can be as long as needed to convey necessary information.",
		price: 88.99
	},
	{
		img: "SpiderMan2.jpg",
		h4: "rttlers of Catan",
		desc: "Description of the product goes here. It can be as long as needed to convey necessary information.",
		price: 123.99
	},
	{
		img: "DonaldDuck2.jpg",
		h4: "Catan",
		desc: "Description of the product goes here. It can be as long as needed to convey necessary information.",
		price: 78.99
	},
	{
		img: "toysRevell3.jpg",
		h4: "Datan",
		desc: "Description of the product goes here. It can be as long as needed to convey necessary information.",
		price: 103.99
	},
	{
		img: "castle2.jpg",
		h4: "lers of Catan",
		desc: "Description of the product goes here. It can be as long as needed to convey necessary information.",
		price: 188.99
	},
	{
		img: "castle.jpg",
		h4: "odf Catan",
		desc: "Description of the product goes here. It can be as long as needed to convey necessary information.",
		price: 133.99
	}
	
	
]// JavaScript Document


function showToys(filteredData){
	
	let divEl = document.querySelector("#toyDisplay");
	divEl.innerHTML = "";
	for(let i = 0; i< filteredData.length; i++){
		let box = document.createElement("div");
		const {img, h4, desc, price} = filteredData[i];

		box.innerHTML = `<div class="product-card filterDiv ages">
			  <img src="img/${img}" alt="Product Image">
			  <h3>${h4}</h3>
			  <p>${desc}</p>
			  <p>	
					<i onclick="myFunction(this)" class="fa fa-thumbs-up"></i>
					<a href="#">Learn More</a><em>|</em>
					<button class="card-btn">Add to Cart</button></p>
			  <div class="price">$${price}</div>
			</div>`	
		divEl.appendChild(box);
	}
}

showToys(data);


document.querySelector("#filterPrice").addEventListener("click", ()=>{

	let filteredData = data.sort((a,b)=>{
		 if (a.price < b.price) {
			return -1;
		  } else if (a.price > b.price) {
			return 1;
		  }
		  // a must be equal to b
		  return 0;

	});
	console.log(filteredData)
	
	showToys(filteredData);
})


document.querySelector("#sortName").addEventListener("click", ()=>{

	let filteredData = data.sort((a,b)=>{
		 if (a.h4 < b.h4) {
			return -1;
		  } else if (a.h4 > b.h4) {
			return 1;
		  }
		  // a must be equal to b
		  return 0;

	});
	console.log(filteredData)
	
	showToys(filteredData);
})

document.querySelector("#reset").addEventListener("click", ()=>{
	showToys(data);
});

// --*-- toggle fa-thumbs-down / up-- -- 

function myFunction(x) {
  x.classList.toggle("fa-thumbs-down");
}






























