//typing animation
var headerElement1 = document.getElementById("top-text-1");
var headerElement2 = document.getElementById("top-text-2");
var mainText = document.getElementById("main-text");
var projectsLink = document.getElementById("projects-link");
var aboutLink = document.getElementById("about-link");
const topText1 = "autumn hurley".split('');
const topText2 = "// web developer ".split('');
const link1 = "> projects".split('');
const link2 = "> about".split('');

for(let n = 0; n < 7; n++){
    setTimeout(function(){
        if(n%2!=0){
            headerElement1.innerHTML="_";
        }
        else{
            headerElement1.innerHTML="&nbsp";
        }
    }, 200 * n);
}

setTimeout(function(){
    for(let n = 0; n < topText1.length; n++){
    setTimeout(function(){
        headerElement1.append(topText1[n]);
    }, 75 * n);
}
}, 1500);

setTimeout(function(){
    for(let n = 0; n < topText2.length; n++){
        setTimeout(function(){
            headerElement2.append(topText2[n]);
        }, 75 * n);
    }
}, 3000);

setTimeout(function(){
    for(let n = 0; n < 7; n++){
        setTimeout(function(){
            if(n%2!=0){
                headerElement2.innerHTML="// web developer _";
            }
            else{
                headerElement2.innerHTML="// web developer";
            }
        }, 200 * n);
    }
}, 4700);

setTimeout(function(){
    for(let n = 0; n < 5; n++){
        setTimeout(function(){
            if(n%2!=0){
                projectsLink.innerHTML="_";
            }
            else{
                projectsLink.innerHTML=" ";
            }
        }, 200 * n);
    }
}, 6000);

setTimeout(function(){
    for(let n = 0; n < link1.length; n++){
        setTimeout(function(){
            projectsLink.append(link1[n]);
        }, 75 * n);
    }
}, 7000);

setTimeout(function(){
    for(let n = 0; n < 3; n++){
        setTimeout(function(){
            if(n%2!=0){
                projectsLink.innerHTML="> projects _";
            }
            else{
                projectsLink.innerHTML="> projects ";
            }
        }, 200 * n);
    }
}, 7700);

setTimeout(function(){
    for(let n = 0; n < 5; n++){
        setTimeout(function(){
            if(n%2!=0){
                aboutLink.innerHTML="_";
            }
            else{
                aboutLink.innerHTML=" ";
            }
        }, 200 * n);
    }
}, 8000);

setTimeout(function(){
    for(let n = 0; n < link2.length; n++){
        setTimeout(function(){
            aboutLink.append(link2[n]);
        }, 75 * n);
    }
}, 9000);

setTimeout(function(){
    for(let n = 0; n < 5; n++){
        setTimeout(function(){
            if(n%2!=0){
                aboutLink.innerHTML="> about _";
            }
            else{
                aboutLink.innerHTML="> about ";
            }
        }, 200 * n);
    }
}, 9700);

console.log(topText1);
console.log(topText2);