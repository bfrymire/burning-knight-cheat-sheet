downloadImage("https://github.com/RexcellentGames/BkWikiData/blob/master/data/images/bk_sword.png");

// Using fetch
async function downloadImage(imageSrc) {
    const image = await fetch(imageSrc);
    console.log(image);
    const imageBlob = await image.blob();
    console.log(imageBlob);
    const imageURL = URL.createObjectURL(imageBlob);
    console.log(imageURL);
}
