function changeReviews() {
    const reviews = [
        {
            name: "Ruben S.",
            review: "Bij Resto mijn Plezier weten ze precies hoe ze hun gasten moeten verwennen. De ambiance is zo gezellig dat je je meteen thuisvoelt. En dan het eten... Hemels! Of je nu kiest voor een Thais gerecht of een klassieker van de kaart, je smaakpapillen worden gegarandeerd verwend. En dat allemaal voor een meer dan redelijke prijs. Dit is echt een pareltje onder de restaurants!",
        },
        {
            name: "Thomas D.",
            review: "Een avondje bij Resto mijn Plezier voelt als thuiskomen. De gezelligheid spat ervan af zodra je binnenstapt. De sfeer is warm en uitnodigend, perfect voor een ontspannen diner met vrienden of familie. En het eten? Dat is simpelweg verrukkelijk! Elke hap is een smaakexplosie en de porties zijn royaal. En dan die prijs-kwaliteitverhouding, ongeëvenaard! Resto mijn Plezier is echt mijn favoriete plekje geworden."
        },
        {
            name: "Sofie V.",
            review: "Een bezoekje aan Resto mijn Plezier is altijd een feestje. De gezelligheid, het lekkere eten en de vriendelijke bediening maken elke keer weer indruk op me. En de prijs-kwaliteitverhouding is gewoon top! Je krijgt hier echt waar voor je geld. Ik kan het iedereen aanraden die op zoek is naar een gezellige avond uit zonder de bank te breken.",
        },
    ];

    $('.dot').removeClass('active');
    $(this).addClass('active');

    const dotIndex = $('.dot').index(this);
    const reviewContainer = $('.review-wrapper');

    reviewContainer.find('.review-author').text(reviews[dotIndex].name);
    reviewContainer.find('.review-body').text(reviews[dotIndex].review);
};

$('.dot').click(changeReviews);