/**
 * Controle do carrossel manual.
 * O CSS é responsável pela aparência e pela transição (transition).
 * Este script apenas calcula e aplica a posição do trilho (transform).
 */
(function () {
	'use strict';

	var container = document.querySelector('[data-carrossel-manual]');

	if (!container) {
		return;
	}

	var trilho = container.querySelector('.carrossel__trilho--manual');
	var slides = trilho.querySelectorAll('.carrossel__slide');
	var botaoAnterior = container.querySelector('.carrossel__seta--esquerda');
	var botaoProximo = container.querySelector('.carrossel__seta--direita');

	var total = slides.length;
	var indiceAtual = 0;

	function calcularLarguraSlide() {
		var estilo = window.getComputedStyle(slides[0]);
		var margemDireita = parseFloat(estilo.marginRight) || 0;
		return slides[0].offsetWidth + margemDireita;
	}

	function atualizarPosicao() {
		var largura = calcularLarguraSlide();
		trilho.style.transform = 'translateX(' + (-indiceAtual * largura) + 'px)';
	}

	function irParaSlide(novoIndice) {
		indiceAtual = (novoIndice + total) % total;
		atualizarPosicao();
	}

	botaoProximo.addEventListener('click', function () {
		irParaSlide(indiceAtual + 1);
	});

	botaoAnterior.addEventListener('click', function () {
		irParaSlide(indiceAtual - 1);
	});

	window.addEventListener('resize', atualizarPosicao);

	atualizarPosicao();
})();
