require(["../build/sekvens"], function (sekvens) {
	function basicExample1() {
		var duration = 1000;
		sekvens.from(0)
			.to(1000, duration)
			.on(function (value) {
				document.getElementById("basic-example-1").innerHTML = value;
			}).go();
	}

	function basicExample2() {
		var duration = 2000;
		sekvens.from(0)
			.to(1000, duration, sekvens.easeInOutQuint)
			.to(0, duration).on(function (value) {
				document.getElementById("basic-example-2").style.marginLeft = value + "px";
			}).go();
	}

	function basicExample3() {
		var duration = 2000;
		sekvens.from(0)
			.to(1000, duration)
			.to(0, duration).on(function (value) {
				document.getElementById("basic-example-3").style.marginLeft = value + "px";
			}).go();
	}

	function basicExample4() {
		var duration = 2000;
		sekvens.from(0)
			.to(360, duration)
			.to(0, duration)
			.repeat(3)
			.on(function (value) {
				document.getElementById("basic-example-4").style.transform = "rotate(" + value + "deg)";
			}).go();
	}

	function basicExample5() {
		sekvens.from(0)
			.to(200, 250)
			.wait(500)
			.to(500, 250)
			.wait(500)
			.to(0, 100)
			.repeat()
			.on(function (value) {
				document.getElementById("basic-example-5").style.marginLeft = value + "px";
			}).go();
	}

	basicExample1();
	basicExample2();
	basicExample3();
	basicExample4();
	basicExample4();
	basicExample5();
});