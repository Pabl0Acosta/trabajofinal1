let firstShortStory = <HTMLButtonElement>document.getElementById("story1");
let secondShortStory = <HTMLButtonElement>document.getElementById("story2");
let thirdShortStory = <HTMLButtonElement>document.getElementById("story3");
let outputStory = <HTMLImageElement>document.getElementById("fullStory");
let storyOneReplacement = "https://i.imgur.com/pNHJXwf.png";
let storyTwoReplacement = "https://i.imgur.com/zlRSvpw.png";
let storyThreeReplacement = "https://i.imgur.com/yfyDjaX.png";

firstShortStory.addEventListener("click", () => {
  insertStory(outputStory, storyOneReplacement);
});

secondShortStory.addEventListener("click", () => {
  insertStory(outputStory, storyTwoReplacement);
});

thirdShortStory.addEventListener("click", () => {
  insertStory(outputStory, storyThreeReplacement);
});

function insertStory(originalStory, newStory) {
  originalStory.src = newStory.replace("190x190", "525x525");
  originalStory.style.display = "flex";
}
