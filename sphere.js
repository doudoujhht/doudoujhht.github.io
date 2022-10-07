const myTags = [
    'JavaScript', 'CSS', 'HTML',
    'C', 'C++', 'React',
    'Python', 'Java', 'git',
    'django', 'Node.js', 'OpenCV',
    'GCP', 'MySQL', 'jQuery',
];

const sphere = document.querySelector("#sphere");
let size = {
  size:300
}
let options = {

  // radius in px
  radius: size.size,

  // animation speed
  // slow, normal, fast
  maxSpeed: 2,
  initSpeed: 300,

  // 0 = top
  // 90 = left
  // 135 = right-bottom
  direction: 135,

  // interact with cursor move on mouse out
  keep: true,

}
let tagCloud = TagCloud('.content', myTags,options); 
  window.addEventListener('resize', () => {
    if (window.innerWidth > 1024) {
      tagCloud.destroy();
      tagCloud = TagCloud('.content', myTags,{

        // radius in px
        radius: 160,
      
        // animation speed
        // slow, normal, fast
        maxSpeed: 2,
        initSpeed: 300,
      
        // 0 = top
        // 90 = left
        // 135 = right-bottom
        direction: 135,
      
        // interact with cursor move on mouse out
        keep: true,
      
      });
    }
  }
  );

sphere.style.color = "white";