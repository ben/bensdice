Hooks.once('diceSoNiceReady', (dice3d) => {
	console.log("Ben's dice: registering Gears");
	dice3d.addSystem({id: "bensdice-gears", name: "Ben's Dice: Gears"}, 'default');
	dice3d.addDicePreset({
		type: "d6",
		labels: "",
		modelFile: "modules/bensdice/gears/d6.glb",
		system: "bensdice-gears"
	});


	console.log("Ben's dice: registering Cast Iron");
	dice3d.addSystem({id: "bensdice-castiron", name: "Ben's Dice: Cast Iron"}, 'default');
	dice3d.addDicePreset({
		system: "bensdice-castiron",
		type: "d4",
		modelFile: "modules/bensdice/castiron/d4.glb",
		labels: ['1️', '2', '3', '4']
	});
	dice3d.addDicePreset({
		system: "bensdice-castiron",
		type: "d6",
		modelFile: "modules/bensdice/castiron/d6.glb",
		labels: ['1️', '2', '3', '4', '5', '6']
	});
	dice3d.addDicePreset({
		system: "bensdice-castiron",
		type: "d8",
		modelFile: "modules/bensdice/castiron/d8.glb",
		labels: ['1', '2', '3', '4', '5', '6', '7', '8'],
	});
	dice3d.addDicePreset({
		system: "bensdice-castiron",
		type: "d10",
		modelFile: "modules/bensdice/castiron/d10.glb",
		labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
	});
	dice3d.addDicePreset({
		system: "bensdice-castiron",
		type: "d100",
		modelFile: "modules/bensdice/castiron/d10.glb",
		labels: ['10', '20', '30', '40', '50', '60', '70', '80', '90', '00'],
	});
	dice3d.addDicePreset({
		system: "bensdice-castiron",
		type: "d12",
		modelFile: "modules/bensdice/castiron/d12.glb",
		labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
	});
	dice3d.addDicePreset({
		type: "d20",
		system: "bensdice-castiron",
		modelFile: "modules/bensdice/castiron/d20.glb",
		labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'],
	});
});
