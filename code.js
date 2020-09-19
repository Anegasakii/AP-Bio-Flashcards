let organelles = [];
let mode = "Name";
class ornel {
	constructor(name, anat, phys){
		this.name = name;
		this.anat = anat;
		this.phys = phys;
		organelles.push(this);
	}
}

const plasm = new ornel("Plasma Membrane", "Phospholipid Bilayer, Pro - Double, Eu - Single", "The outer border of the cell (border control)");
const nucls = new ornel("Nucleus", "Next largest after central vacuole", "Cell's control center");
const envel = new ornel("Nuclear Envelope", "Around the nucleus, connected to R.ER", "Separates nucleus internals from externals");
const chrom = new ornel("Chromatin", "Like rope, in the nucleus", "Compressed DNA");
const nuclo = new ornel("Nucleolus", "In the nucleus, round", "Regulates cell functions & proteins");
const cvac = new ornel("Central Vacuole", 'Very large, "empty", even pushes nucleus into wall, in plant cells', "Warehouse");
const svac = new ornel("Small Vacuole", 'Smaller than central, "empty"', "Storage shed");
const ser = new ornel("Smooth ER", "Like coral", "Carb & Lipid factory, cell maintenence");
const rer = new ornel("Rough ER", "Waves w/ dots, close to nucleus", "Protein factory");
const ribo = new ornel("Ribosome", "Small circles, may be on R.ER", "RNA Translators");
const cytol = new ornel("Cytosol", "The actual substance everything sits in", "Keeps everything in place, has variable consistency");
const lyso = new ornel("Lysosome", "Has dots inside", "Converts larger food molecules into cell-usable form");
const mito = new ornel("Mitochondria", "Lines going across inside", "ATP generator (fueled by Lyso)");
const chloro = new ornel("Chloroplast", "Has stacked discs", "Photosynthesis");
const golgi = new ornel("Golgi Apparatus", "Like loops of bacon", "Protein USPS");
const cytok = new ornel("Cytoskeleton", "Like a web", "Organises and moves the cell and the stuff inside");
const centri = new ornel("Centrioles", "Like a bamboo pillar", "Anchors during mitosis");
const wall = new ornel("Cell Wall", "Outside of the membrane, made of cellulose, in plant cells", "More rigid structural support, helps keep more water in");
const flag = new ornel("Flagella", "Like whips", "Movement, sometimes sensor");
const cil = new ornel("Cilia", "Like hairs", "Help with movement (either things around it or the cell itself)");

let order = [];
for (i=0;i<20;++i) order[i]=i;

// http://stackoverflow.com/questions/962802#962890
function newOrder(array) {
  var tmp, current, top = array.length;
  if(top) while(--top) {
    current = Math.floor(Math.random() * (top + 1));
    tmp = array[current];
    array[current] = array[top];
    array[top] = tmp;
  }
  return array;
}

function shuffle(){
	order = newOrder(order);
	current = 0;
	for (let pos of order){
		card = document.getElementById(String(current));
		switch(mode){
			case "Name":
				card.innerHTML = organelles[pos].name;
				break
			case "Anatomy":
				card.innerHTML = organelles[pos].anat;
				break
			case "Physiology":
				card.innerHTML = organelles[pos].phys;
				break
			case "Random":
				let display = Math.floor(Math.random() * 3);
				switch(display) {
					case 0:
						card.innerHTML = organelles[pos].name;
						break
					case 1:
						card.innerHTML = organelles[pos].anat;
						break
					case 2:
						card.innerHTML = organelles[pos].phys;
						break
					default:
						alert("Something's gone wrong, please press F12, click on console. and email vienxtras@gmail.com what you see!");
						break
				}
				break
			default:
				alert("Something's gone wrong, please press F12, click on console, and email vienxtras@gmail.com what you see!");
				break
		}
		current++
	}
}

shuffle();

function flip(toFlip){
	toFlip = String(toFlip);
	let show = document.getElementById(toFlip);
	block = document.getElementById("focus")
	block.className = "visible";
	document.getElementById("dim").className = "visible";
	let selected = organelles[order[toFlip]];
	document.getElementById("name").innerHTML = `Name: ${selected.name}`;
	document.getElementById("anat").innerHTML = `Anatomy: ${selected.anat}`;
	document.getElementById("phys").innerHTML = `Physiology: ${selected.phys}`;
}

function hide(){
	document.getElementById("focus").className = "hidden";
	document.getElementById("dim").className = "hidden";
}

function names(){
	mode = "Name";
	shuffle();
}

function anat(){
	mode = "Anatomy";
	shuffle();
}

function phys(){
	mode = "Physiology";
	shuffle();
}

function random(){
	mode = "Random";
	shuffle();
}