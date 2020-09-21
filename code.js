let organelles = [];
let mode = "Name";
class ornel {
	constructor(name, anat, phys, img){
		this.name = name;
		this.anat = anat;
		this.phys = phys;
		this.img = img
		organelles.push(this);
	}
}

const plasm = new ornel("Plasma Membrane", "Phospholipid Bilayer, Pro - Double, Eu - Single", "The outer border of the cell (border control)", "plasm.png");
const nucls = new ornel("Nucleus", "Next largest after central vacuole", "Cell's control center","nucls.png");
const envel = new ornel("Nuclear Envelope", "Around the nucleus, connected to R.ER", "Separates nucleus internals from externals","envel.png");
const chrom = new ornel("Chromatin", "Like rope, in the nucleus", "Compressed DNA","chroma.png");
const nuclo = new ornel("Nucleolus", "In the nucleus, round", "Regulates cell functions & proteins","nuclo.png");
const cvac = new ornel("Central Vacuole", 'Very large, "empty", even pushes nucleus into wall, in plant cells', "Warehouse","cvac.png");
const svac = new ornel("Small Vacuole", 'Smaller than central, "empty"', "Storage shed","svac.png");
const ser = new ornel("Smooth ER", "Like coral", "Carb & Lipid factory, cell maintenence","ser.png");
const rer = new ornel("Rough ER", "Waves w/ dots, close to nucleus", "Protein factory","rer.png");
const ribo = new ornel("Ribosome", "Small circles, may be on R.ER", "RNA Translators","ribo.png");
const cytol = new ornel("Cytosol", "The actual substance everything sits in", "Keeps everything in place, has variable consistency","cyto.png");
const lyso = new ornel("Lysosome", "Has dots inside", "Converts larger food molecules into cell-usable form","lyso.png");
const mito = new ornel("Mitochondria", "Lines going across inside", "ATP generator (fueled by Lyso)","mitchondria.png");
const chloro = new ornel("Chloroplast", "Has stacked discs", "Photosynthesis","chloro.png");
const golgi = new ornel("Golgi Apparatus", "Like loops of bacon", "Protein USPS","golgi.png");
const cytok = new ornel("Cytoskeleton", "Like a web", "Organises and moves the cell and the stuff inside","cytok.png");
const centri = new ornel("Centrioles", "Like a bamboo pillar", "Anchors during mitosis","centri.png");
const wall = new ornel("Cell Wall", "Outside of the membrane, made of cellulose, in plant cells", "More rigid structural support, helps keep more water in","wall.png");
const flag = new ornel("Flagella", "Like whips", "Movement, sometimes sensor","flag.png");
const cil = new ornel("Cilia", "Like hairs", "Help with movement (either things around it or the cell itself)","cil.png");

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
		name = organelles[pos].name;
		anato = `${organelles[pos].anat}<br><img height="100" src=${organelles[pos].img} title='${organelles[pos].anat}'>`;
		physi = organelles[pos].phys;
		switch(mode){
			case "Name":
				card.innerHTML = name;
				break
			case "Anatomy":
				card.innerHTML = anato;
				break
			case "Physiology":
				card.innerHTML = physi;
				break
			case "Random":
				let display = Math.floor(Math.random() * 3);
				switch(display) {
					case 0:
						card.innerHTML = name;
						break
					case 1:
						card.innerHTML = anato;
						break
					case 2:
						card.innerHTML = physi;
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
	document.getElementById("focusImg").innerHTML = `<img height="200" src=${selected.img} title='${selected.anat}'>`
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