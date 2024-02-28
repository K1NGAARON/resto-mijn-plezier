function changeReviews() {
    const reviews = [
        {
            name: "Sidney",
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem voluptates sunt rerum obcaecati. Quia quis quos voluptas id, saepe sint.",
        },
        {
            name: "John P.",
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem voluptates sunt rerum obcaecati. Quia quis quos voluptas id, saepe sint."
        },
        {
            name: "Will",
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem voluptates sunt rerum obcaecati. Quia quis quos voluptas id, saepe sint.",
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